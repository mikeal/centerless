import { writeFile as asyncWriteFile } from 'node:fs/promises'
import * as sha256 from 'sync-multihash-sha2/sha256'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { toString } from 'uint8arrays/to-string'
import { mkdirp } from 'mkdirp'

const tmp = join(tmpdir(), 'blocks')
mkdirp.sync(tmp) 

const in_tmp = str => join(tmp, str)

const writeFile = async buffer => {
	const path = in_tmp(toString(sha256.digest(buffer).digest))
	return asyncWriteFile(path, buffer)
}

export { writeFile }
