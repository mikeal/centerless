import { allocUnsafe } from 'uint8arrays/alloc'
import * as sha256 from 'sync-multihash-sha2/sha256'
import { MemoryByteArray } from '../lib/centerless.js'

const buffer = nums => new Uint8Array(nums)
const zero = buffer([ 0 ])
const one = buffer([ 1 ])

const byte_arrays = [
 [ zero ],
 [ zero, zero ],
 [ one ],
 [ zero , one ]
] 

const fill = (size, seed=zero, hasher=sha256) => {
  const mem = allocUnsafe(size)
	let i = 0
	while (i < size) {
		seed = hasher.digest(seed).digest
		mem.set(seed, i)
	  i += seed.byteLength
	}
	return mem
}

byte_arrays.push([ fill(1024) ])
byte_arrays.push([ fill(1024 * 1024 ) ])

const instructions = byte_arrays.map(ba => MemoryByteArray.from(ba).instructions)
export { instructions, byte_arrays }
