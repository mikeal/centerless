import { allocUnsafe } from 'uint8arrays/alloc`

const buffer = nums => new Uint8Array(nums)
const zero = buffer([ 0 ])
const one = buffer([ 1 ])

const byte_arrays = [
 [ zero ],
 [ zero, zero ],
 [ one ],
 [ zero , one ]
] 

const fill = (size, seed=zero, hasher) => {
  const mem = allocUnsafe(size)
	let i = 0
	while (i < size) {
		seed = hasher.digest(seed)
		mem.set(seed, i)
	  i += seed.byteLength
	}
}

byte_arrays.push([ fill(1024) ])
byte_arrays.push([ fill(1024 * 1024 ) ])

const instructions = byte_arrays.map(ba => MemoryByteArray.create(ba).instructions)
export { instructions, byte_arrays }
