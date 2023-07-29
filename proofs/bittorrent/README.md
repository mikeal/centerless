# Bittorrent Proofs

🚧 under development 🚧

notes:

Pretty simple:
* Get the Torrent Info as Bytes (torrent file or DHT query)
* Torrent Proof is a FilterProof over the info bytes that
  linearly collects each sha2 hash of each part. The
	resulting representation is a valid ByteArray for those
	parts.

* Input interface can be created using WebTorrent to pull the relevent
  bytes.


