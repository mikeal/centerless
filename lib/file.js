import { ByteArray } from './centerless.js'
import * as sha256 from 'sync-multihash-sha2/sha256'

class File extends ByteArray {
	static local (path, hasher=sha256) {
	}
}
