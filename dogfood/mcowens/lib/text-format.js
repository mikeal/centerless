const input = '>>> '
const output = '<<< '

const parse = string => {
	const io = []
	
	let inner = null
	for (const line of string.split('\n')) {
		if (line.startsWith(input)) {
			if (inner) throw new Error('Double Input')
			else {
				inner = line.slice(input.length)
			}
		} else if (line.startsWith(output)) {
			if (!inner) throw new Error('Output before Input')
			else {
				io.push([ inner, line.slice('<<< '.length) ])
				inner = null
			}
		} else {
			if (inner) inner += ( '\n' + line )
			else {
				io[io.length-1][1] += ( '\n' + line ) 
			}
		}
	}
	return io
}

const encode = pairs => pairs.map(([i, o]) => '>>> ' + i + '\n' + '<<< ' + o).join('\n')

export { parse, encode }
