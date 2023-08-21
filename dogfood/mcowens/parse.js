import { readFileSync as read, readdirSync as dir } from 'node:fs'
import { toString } from 'uint8arrays/to-string'
import { join } from 'node:path'
import rmd from 'remove-markdown'
import is_chinese from 'is-chinese'

const guess = text => !is_chinese(text) 

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

for (const file of dir('sutras')) {
	if (!file.endsWith('.md')) continue
	const text = toString(read(join('sutras', file)))
	const lines = text.split('\n')
	  .filter(x => x)
		.map(t => trim_md(t))
		.filter(x => {
			if (removals.includes(x)) return false
			return true
		})
	const headings = []

	while (guess(lines[0]) === guess(lines[1]) === true) {
		headings.push(lines.shift())
	}

	const flip = find_flip(lines)
	if (flip) {
		console.log({flip})
		const to_flip = lines.slice(0, flip)
		let i = 0
		while (i < to_flip.length) {
			const [ first, second ] = to_flip.slice(i, i+2)
			lines[i] = second
			lines[i++] = first
			i++
		}
	}

	texts[file.slice(0, file.length-3)] = { 
    headings, lines, file
	}
}


console.log(texts)
