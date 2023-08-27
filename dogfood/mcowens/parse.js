import { readFileSync as read, readdirSync as dir, writeFileSync as writeFile } from 'node:fs'
import { toString } from 'uint8arrays/to-string'
import { encode } from './lib/text-format.js'
import { globSync as glob } from 'glob'
import { join } from 'node:path'
import rmd from 'remove-markdown'
import is_chinese from 'is-chinese'
import strlen from 'utf8-length'

const guess = text => text.length > 1 ? !is_chinese(text.slice(1,2)) : !is_chinese(text.slice(0,1)) 

const texts = {}

const trim_md = text => {
	text = rmd(text)
	while (text.startsWith('*') || text.startsWith('#')) {
		text = text.slice(1)
	}
	while (text.endsWith('*')) {
		text = text.slice(0, text.length-1)
	}
	return text
}

const removals = [ 'LOTUS UNDERGROUND' ]

const find_flip = lines => {
	let i = 1
	let prev = lines[0]
	while (i !== lines.length && guess(prev) !== guess(lines[i])) {
		prev = lines[i]
		i++
	}
	if (i === lines.length) return 0
	return i
}

const parseFile = file => {
  const text = toString(read(file))
	const lines = text.split('\n')
	  .filter(x => x)
		.map(t => trim_md(t))
		.filter(x => {
			if (removals.includes(x)) return false
			if (x.startsWith('CHAPTER')) return false
			return true
		})
	const headings = []

	while (guess(lines[0]) === guess(lines[1]) === true) {
		headings.push(lines.shift())
	}

	const flip = find_flip(lines)
	if (flip) {
		const to_flip = lines.slice(0, flip)
		let i = 0
		while (i < to_flip.length) {
			const [ first, second ] = to_flip.slice(i, i+2)
			lines[i++] = second
			lines[i++] = first
		}
	}

  while (guess(lines[lines.length-1]) === guess(lines[lines.length-2]) === true) {
		lines.pop()
	}

	let i = 1 
	while (i < lines.length) {
		if (guess(lines[i-1]) === guess(lines[i])) {
			lines[i-1] += '\n\n' + lines.splice(i, 1)[0]
		} else {
			i++
		}
	}
	return lines
}

class Translation {
	constructor (_from, _to) {
		this._from = _from
		this._to = _to
	}
	generate_map (openai) {
	}
	static from (_from, _to) {
		return new Translation(_from, _to)
	}
}


class Part {
	constructor ({ string, chars }) {
		this.string = string
		this.chars = chars
	}
	static from (string) {
		return new Part({ string, chars: safe_split(string, puncuation) })
	}
	translate (to) {
		return Translation.from(this, to)
	}
}

class Line {
	constructor ({ string, parts }) {
		this.string = string
		this.parts = parts
		let i = 0
		this.offsets = this.parts.map(p => {
			const found = string.indexOf(p, i)
			if (found === -1) throw new Error('Invalid constructor args')
			i = found + p.length
		})
	}
	map (fn) {
		return this.parts.map(fn)
	}
	static from (string) {
		const parts = safe_split(string, sentence_delimiters)
		return new Line({ string, parts })
	}
}

class TranslationPairs  {
	constructor (lines) {
		this.lines = lines
		this.pairs = []
		let i = 0
		while (i < lines.length) {
			this.pairs.push([ lines[i++], lines[i++] ])
		}
	}
	map (fn) {
		return this.pairs.map(([x,y]) => fn([ Line.from(x), Line.from(y) ]))
	}
	static from (lines) {
		return new TranslationPairs(lines)
	}
}

const puncuation = [
  '"',
  "'",
  '「',
  '」',
  '」',
  '[',
  ']',
  ':',
  ';',
  '、',
  '!',
  ',',
  ' ',
  '：',
  '，',
  '　',
  '！',
  '；'
]

const sentence_delimiters = ['.', '。', '\n']

const safe_split = (string, split_chars) => {
  /* Regex splitting across languages is hard and error prone, this is better */
  const chars = string.split('')
  const results = []
  let current = ''
  while (chars.length) {
    const next = chars.shift()
    if (split_chars.includes(next)) {
      if (current.length) results.push(current)
      current = ''
    } else {
      current += next
    }
  }
  if (current.length) results.push(current)
  return results
}

if (process.argv.length < 3) throw new Error('no args')
const files = process.argv.slice(2).flatMap(f => glob(f))

const pairs = files.flatMap(f => TranslationPairs.from(parseFile(f)).pairs)
console.log(encode(pairs))

