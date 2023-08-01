
const array = size => new Array(size)

let log
if (process.debug) {
	log = (...args) => console.log(...args)
} else {
	log = () => {}
}

class Centerless {
	constructor ([ input, instructions, proof ]) {
		this.input = input
		this.instructions = instructions
		this.proof = proof
	}
	trace (name, args, fn) {
		const result = fn()
		log({ name, args, result })
		return result
	}
}

const read_from_parts = (start, end, parts) {
	// fast path
  if (parts.length === 1 && parts[0][0] === start && parts[0][1] === end) {
		return parts[0][2]
	}
	// slow path
	const concatable = []
	for (const [ open, close, part ] of parts) {
		if (open < start) {
		  	
		}
	}
}

class Input extends Centerless {
	read (start, end) {
		const result = this.trace('read', { start, end }, () => this._read(start, end))
		if (!result[0]) {
			throw new Error('Out of bounds')
		}
    if (result.then) {
			return result.then(parts => read_from_parts(start, end, parts))
		}
		if (result[0][2].then) {
			return Promise.all(result.map(async ([s, e, parts]) => [ s, e, await parts ]))
			              .then(parts => read_from_parts(start, end, parts))
		}
		return read_from_parts(start, end, result)
	}
	map (fn) {
		return this.trace('map', {}, () => this._map(fn))
	}
}

class ByteArray extends Input {
	constructor (args) {
		super(args)
		const [ length, ...lengths ] = this.instructions
		this.lengths = lengths.slice(0, length)
		this.width = length
	}
	get read_offset () {
		return this._read_offset || 0
	}
	_map (fn) {
		let i = this.read_offset
		return this.lengths.map(l => fn(this.read(i, i += l)))
	}
	read (start, end) {
		return this.input.read(start + this.read_offset, end + this.read_offset)
	}
	build (hasher) {
		return ByteArrayProof.build(this, hasher) 
	}
	static from (array) {
		return MemoryByteArray.from(array)
	}
}

class MemoryByteArray extends ByteArray {
	constructor (array) {
		this.lengths = array.map(part => part.byteLength)
		this.length = array.length
		this.width = array.length
		this._inmem = array
	}
	static from (array) {
		return new this(array)
	}
	_read (start, end) {
		let offset = 0
		let begin
		let i = 0
		const parts = []
		while (i < this.lengths.length) {
			const length = this.lengths[i]
			if (start < offset || end < offset) {
				parts.push([ offset, offset += length, this.get(i) ])
			}
			if (offset > end) {
				break
			}
			i++
		}
		return parts
	}
}

class Proof extends ByteArray {
	constructor ([ input, [ width, digest_length ]) {
		this.length = width
		this.digest_length = digest_length
	}
	get lengths () {
		return array(this.length).map(() => this.digest_length)
	}
	static alloc (width, digest_length) {
		return new this.alloc(
	}
	static from (digests_array) {
		const input = ByteArray.from(digests_array)
		return new this([ input, [ digests_array.length, digests_array[0].byteLength ]])
	}
}
class ByteArrayProof extends Proof {
	static build (byte_array, hasher) {
		return this.from(byte_array.map(part => hasher.digest(part)))
		const mem = ByteArray.alloc(byte_array.width * hasher.digest_length)
		mem.append(hasher.digest(
	}
}


