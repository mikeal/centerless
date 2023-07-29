# Filter Proof

🚧 under construction 🚧

Filter Proofs represent a ByteArray that is a filter
result applied to the `input`.

Notes:
* Instructions is a linear series of deltas for each
  subpart in the byte array, which means
	* the length of the instructions / 2 is the width of the
	  proof and the length of the resultant byte array
	* since it is encoded as deltas there is no possibility
	  that the byte array appears out of order from the original
		input.

