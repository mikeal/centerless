import matrix from './matrix.js'
import { writeFile } from './util.js'
import { MemoryByteArray } from '../lib/centerless.js'
import { File } from '../lib/file.js'

const instances = { byte_arrays: { memory: [] } }

for (const ba of matrix.byte_arrays) {
	instances.memory = MemoryByteArray.from(ba)
}

instances.btye_arrays.file = await Promise.all(instances.memory.map(async mba => {
	const path = await writeFile(mba.read())
	return File.local(path)
}))

console.log(instances.bytes_arrays)
