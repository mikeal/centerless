# `centerless`

Centerless is a realm of pure cryptography resulting
from the de-centering of data from its address.

* Centerless is not centralized.
* Centerless is not de-centralized.
* Centerless is entirely ***without*** **center**.

Since input data to cryptography and the resulting
proof addresses are inter-dependent *and* deterministic,
it is then possible to reach proof without a fixed
representation or address since any variations in
representations or addresses representing the same
bytes will result in the same proof.

This can be used to:
* Make any static website offline and update itself by pulling diffs
  without moving or changing anything about where the site is hosted.
* Publish patches, enhancements and other mutations to data as diffs against data
  already on The Web, relying upon the already hosted data as a base.
  * If the source file changes, the cryptography will break rather than produce a
	  bad merge file.
	* Anybody at any time can provide that data via other means or protocols to
    build the merge, so dependence upon the origin service is highly severable.
* Data encoded into different formats by different systems and
	different actors can be cryptographicaly equalized. The resulting
	state proofs can be used to build universal diffs and state changes
	against the abstract agreed upon state rather than the hashes of
	indeterministic and varied encodings.

## Centralized, De-Decentralized, and Centerless

Things are understood to be *centralized* when their **address**
describes a single (center) **location**.

An **address** is understood to be *de-centralized* when it is
*de-located* from its singular location address. One-way hash functions
and derivative one-way cryptography are used to arrive at a
hash based address that relies upon no autority or central location
since anyone implementing the hash functions can produce proof.

In both of these systems (centralized and de-centralized),
* there is an address,
* and there is data being addressed.

The appearance of "de-centering" is the loss of singularity in 
data **location** because "center" had previously defined as *"location"*.

In truth, data and addresses have been "de-located." In both systems,
data and addresses are inter-dependent. The center of one
system is a location and the center of the other is a hash digest.

The cryptography we're talking about here is very simple. We're
passing data into a function that returns some form of proof:
a deterministic, securely randomized, byte range of a predictable
(fixed) size.

The problem is that every new cryptographic function we write
results in a different address. This means that **data**, the
thing we're ***actually trying to represent***, is being divided
and segmented into new silos resulting from the re-centering
of the address to a fixed representation of a single method of
cryptography.

As an example, many data products across many categories offer
features related to the hash digest of an API result or file. File
and data addresses for IPFS files, Bittorrent, dat, git, and
every other system built from a merkle structure that
includes meta information and/or represents the file as
a byte array.

This difference in addresses has meant a lack of compatibility
between systems and lead all of these sytems to pursure their
own transport layers with minimal support for existing transports
like HTTP.

Centerless brings data and addresses into perfect union such
that the resulting cryptography does not depend on a single 
identifier (center).

If there's a means of cryptographic verification between formats,
then centerless can treat them equally. As long as the
resulting proofs match, the data from different encodings, addresses,
and locations can be mixed and matched.

All data, everywhere on the Internet, using any transport (HTTP, FTP,
git, Bittorrent, IPFS) is acceptible input if it ends in a matching proof. Once
*anyone* has a matching proof they can publish the cryptography that
arrived at that proccess for the benefit of others doing the same.

## `Input`, `Instructions`, and `Proof`

Let's define "data" in the abstract as "some bytes." All data, at some
point or another, is turned into bytes. This way, centerless works with all
systems that work in bytes, which is all systems.

Let's call this abstract interface for data `Centerless`.

There are three interfaces that inherit, or extend, this interface.

1. `Input` (Bytes)
2. `Instructions` (Array of Numbers)
3. `Proof` (Array of Hash Digests)

Each of these interfaces derive from `Centerless` and `Centerless`
can be seen as these interfaces collected as a triple (`[ Input, Instructions, Proof]`)
representing a cryptographically secure virtual memory system
that can produce and consume partial proofs using the same interface
that provides partial selectivity for the Input.

* Instuctions can be Input,
* Input can be Instructions.
* Proof can be Input or Instructions.
* Input could be Proof but not all Inputs can be Proof.

This results in forms of recursion that may previously have appeared
to be impossible as they are not expressable in any system of cryptography
that exclusively builds upon its own encoding. But anyone familiar with
cryptography enough to recognize the power of equivalency should see
that one must only entangle the determinism of one system with another
to move between statements of equality never intentionally expressed
in the original encodings.

What holds these unions together are the characteristics of each
interface and how they interrelate.

### Input

Input is a view of data as bytes.
* it has a `.read(offset, close)` interface.

Input is also a view of data as a byte array.
* it includes a representation of data as consistent representation
of byte segments (but could be just a single segment).
* which means you can do all kinds of generic functional programming
on the array to build proofs.

Since `Instructions` and `Proofs` are valid `Input` they
also have these characteristics.

### Instructions

`Instructions` is a view of an array of numbers.
* there aren't more than a few encodings, so equivalencies are easy to build and validate
* we've succesfully avoided most types! arrays of numbers are supported even more widely than JSON 🤣
* proof functions must be able to calculate the **width** (number of hashes) of a resulting proof
  with **only** the `Instructions`. this allows `Input` to remain virtualized while the proof
	function writes into the allocated width.

Remember, proof functions can `.read()` from *anywhere* in the `Input`. When
we build more sophisticated data structures that need more than just numbers
it'll be passed as additional `Input`, so don't go thinking that the only thing
a proof function can understand or build against is numbers.

`Instructions` only need to be what is necessary to selectively `.read()` the input
and allocate the width of the proof.

Instruction interfaces implement a specific encoding scheme when they are `.read()`
but are often able to stay agnostic of encoding. Even when they aren't agnostic of encoding,
there aren't that many potential encoding schemes, so equivalency proofs can be generated
and generalized for a small set of potential encodings.

### Proof

`Proof` is a view of an array of hash digests.
* each element of the byte array is securely randomized
* which means that if you decode the trailing bytes as a number, it's
  a securely randomized number.
* and if you sort the digests before you write them, you can
  predictably seek into it as an index. the performance of
	this sort of index is faster than any tree you could
	build.

All proofs in centerless are hash function agnostic.

When proofs are addressed as a single block the resulting address
must be a `multihash`. The hash algorithm and digest length of that
address is the same hash algorithm and length used for every
hash in the proof.

Since proofs are encoded separtely from input data and proof
instructions proofs are easily upgraded to new hash functions without
re-encoding any of the underlying data layer. When addresses
to foreign resources are written using a different `multihash`
the differences between them can be close with equivalencies
just like the differences in all other `Input` sources.

# Location Claims

Various means of retreiving data on the internet exist.

In Centerless, verifiable claims are written regarding any relevant
location data needed to satisfy proof might reside. These claims
map a URI to a hash digest. It may be the case that this claim
is *never* **entirely** verified, as is the case when a sub-ranges of
data are used.

This allows centerless to leverage numerous centralized data
transmission protocols without ever becoming centralized itself.

This allows centerless to liberate data from any location you
find it in, since anything you build upon in centerless depends
not on the location but on the cryptography resulting from that
location and can grow to include any other location that can
make proof.

# Files

All extant crytopgraphic addresses for a file are one of two things
1. the digest of a standardized one-way hash function applies to the entire file content
2. the digest address of a merkle representation of the file *as a byte array*. this true
   of bittorrent, ipfs, dat, and others.

`Input` can represent both of these scenarios natively with DigestProof
and ByteArrayProof.

`Input`s, and equivalencies between these representations and native representations,
can be implemented for 

# Directories and Maps
