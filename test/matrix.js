// Data Structures
import { MemoryByteArray } from '../lib/centerless.js'
import { File } from '../lib/file.js'

// Fixtures
import { byte_arrays, instructions as ba_instr } from './byte-arrays.js'


const types = {
	byte_array: { MemoryByteArray, File }
}

const matrix = { byte_arrays, types }

export default matrix
