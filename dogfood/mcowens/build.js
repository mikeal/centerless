import { readFileSync as read, 
         readdirSync as dir,
				 writeFileSync as writeFile,
				 appendFileSync as append
				 } from 'node:fs'
import { toString } from 'uint8arrays/to-string'
import { join } from 'node:path'
import rmd from 'remove-markdown'
import is_chinese from 'is-chinese'
import strlen from 'utf8-length'
import OpenAI from 'openai'

const translations = JSON.parse(toString(read('translations.json')))

const _filter = f => f.length > 2

const logs = new Map(
  toString(read('prompt.log')).split('\r\n').filter(_filter).map(str => JSON.parse(str))
)

const writeLog = (prompt, result) => {
	append('prompt.log', JSON.stringify([ prompt, result ]) + '\r\n')
	logs.set(prompt, result)
}

const map_prompt = async (chinese, english, openai, model='gpt-3.5-turbo') => {
	const prompt = `Return a map in JSON format of each chinese character to english world, preserving binomials, from the translation below.

Chinese: ${chinese}

English: ${english}
`

  // check cache
	if (logs.has(prompt)) return logs.get(prompt)
  
  const completion = await openai.chat.completions.create({
    model,
    messages: [
      { role: 'user', content: prompt }
    ]
  })
  const { choices: [ default_choice ] } = completion
  const { message: { role, content } } = default_choice

	if (content[0] !== '{') throw new Error('Not JSON')
	const map = JSON.parse(content)
	writeLog(prompt, map)
	return map
}

const config = {
  apiKey: process.env.OPENAI_API_KEY,
}
let openai = new OpenAI(config)

const translation_map = async (chinese, english, openai) => {
  const map = await map_prompt(chinese, english, openai)
	for (const [ ch, en ] of Object.entries(map)) {
		if (!ch.length || !en.length) {
			delete map[ch]
		}
		if (!english.includes(en)) {
			delete map[ch]
		}
		if (!chinese.includes(ch)) {
			delete map[ch]
		}
	}
	return map
}

const { entries } = Object

let trans_maps = await Promise.all(entries(translations).flatMap(([name, lines]) => {
	return lines.flatMap(pairs => pairs.map(([ chinese, english ]) => translation_map(chinese, english, openai)))
}))

const mcowens = {}
for (const map of trans_maps) {
	for (const [chinese, english ] of entries(map)) {
		if (!mcowens[chinese]) mcowens[chinese] = {}
		if (!mcowens[chinese][english]) mcowens[chinese][english] = 0
		mcowens[chinese][english]++
	}
}

writeFile('mcowens-map.json', JSON.stringify(mcowens))
