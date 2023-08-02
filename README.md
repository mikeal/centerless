# `centerless`

Centerless is a secure virtual data (memory/storage)
realm resulting from the de-centering of data from its
address

* Centerless is not centralized.
* Centerless is not de-centralized.
* Centerless is entirely ***without*** **center**.

Centerless resembles a cryptographically complete virtual
memory system, with equivalencies that entangle the determinism
of different data encodings and authorities, upon which
higher performance data structures can be built that can read
and write data from/to **anywhere**.

This allows for the resolution of dispute among all
contention for the characteristic "center" of data.

Such as:
* Object/Type Encoding ([JSONProofs](./proofs/json))
* Transport/Location Address ([LocationClaim](./claims/location))
* Publishing Authority ([PublicAuthority](./proofs/public-authority))
* "File" Encoding: 
	* [ByteArrayProofs](./proofs/byte-array) which serve as a basis for other compatible proofs,
  * [IPFSProofs](./proofs/ipfs), 
	* [BittorrentProofs](./proofs/bittorrent), 
	* [GitProofs](./proofs/git), 

All of these accomplish two goals:
1. Dispute arising between incompatible systems can be resolved via cross-compatibility,
2. The degree to which these systems are compatible is determined
   by the users and cryptographers nearest that system rather than
	 the owners, creators, or maintainers of such systems,
3. as such, any power resulting from the appearance of unity around
   the central point of dispute may be liberated by applying cryptography
	 to the characteristics of sameness in ordinary appearance of
	 that which appears to be divergent.

Centerless is documented as a collection of pure cryptographic
processes. It's not written to/for a specific language, specification,
software, hardware, etc. 

Such processes accept bytes, view them as numbers, and return proof
as very large numbers encoded to bytes. If you've got numbers and bytes you should
be able to implement centerless proofs along with the relevant
data structure operations and transports in whatever system you require to accomplish the intended result.

This respository includes implementions in plain JavaScript, suitable
for browsers, Node.js, and any other JS environment.

## Power of the Public

This page may seem overly philosophical but it’s important to remain abstract when the potential application is so vast.

Humans have been describing our world with bytes for decades and continue to invest more and more of our being in this activity. Most of the communication between beings, our art, our culture, all of it appears to be moving as bytes.

That appearance of movement is the space of application for centerless. Cryptography is bytes in and bytes out, and Centerless is about applying cryptography to data **as we already see it.**

Centerless is not a new thing you put data into, it’s for describing *any data you can see* so that we, **the public**, can build upon all that we see without having to negotiate with whatever power seems to have collected around the data we *already see*.

We think that large companies, institutions, standards groups, governance boards, and all the accumulated interests of technology and commerce are holding power by holding data. But data is never valuable in and of itself, the value of **anything** depends upon an observer. All that we see we place some value on, spending attention and capital investing *in* that value wherever it *appears* to be. The value they appear to hold depends on us, they can’t “take it away” without making it valueless.

If the public can see this data, and they **need** us to see it in order for it be of value, then what is stopping us from building with **each other** upon what we already see?

Cryptography can authenticate that:
* two (or more) parties are talking about the same thing
* without either party trusting one another
* and without any outside authority.

Anything we see, we can talk about in this trustless manor. We know this, but we easily forget it. Why?

[Nāmarūpa](https://en.m.wikipedia.org/wiki/Namarupa) (Name and Form), once something “exists” it has a name, once something has a name it is said to “exist.” We can’t talk about data without giving it a name. The names the authority uses depends on them (centralized). When we try to talk about data that is **absent this authority** we give it a new name, and that new name results in new data. This creates a dualistic tension between authority/ownership and the independent authenticatability of data.

How can I authenticate data claimed to be “tweets” without receiving data from twitter.com? Tweets are things that are created, owned, and read from twitter.com, that’s what the word “tweet” means!

If the Internet Archive said “this is data is tweets” would you beleive them? I would, most others would as well. Even if I didn’t, most people have no problem checking twitter.com to verify.

So then, what is stopping us from building data layers and alternate applications that build **on top of** the data anyone can see?

The entire category of “data products” available to us to solve such problems are built for the sorts of institutions that have large data problems, **data owners**, rather than the public. To date, everyone who has come into contact with the cryptography to solve these problems has created new systems that encode new data resulting in new accumulations of power among the founding actors of those systems. Given enough time these systems bear the characteristics of centralization of prior systems with new names.

## Centralized, De-Decentralized, and Centerless

Things are understood to be *centralized* when their **address**
describes a single (center) **location**.

Data appears to be *de-centralized* when it is
*de-located* from its singular location address using a hash digest based addess. One-way hash functions
and derivative one-way cryptography are used to arrive at a
hash digest that relies upon no authority or central location
since anyone implementing the algorithm can produce proof. This also means
that consensus and compatibility are determined by algorithmic compatibility
rather than specification alignment.

In both of these systems (centralized and de-centralized),
* there is an address,
* and there is data being addressed.

The appearance of "de-centering" is the loss of singularity in 
data **location** because "center" had previously defined as *"location"*.

In truth, authenticatable data structures
**"de-locate"**, rather than "de-center" data. In both systems
(centrally located and cryptographically de-located),
data and addresses are inter-dependent. The center of one
system is a *location* and the center of the other is a hash digest.

The cryptography we're talking about here is very simple. We're
passing data into a function that returns some form of proof:
a deterministic, guaranteed unique, byte range of a predictable
(fixed) size which could also be viewed as a very large number guaranteed to be “random” within a fixed albeit incredibly large number space. That's true of sha2, and it's true of git and IPFS and all systems that use hash functions to link their internally encoded descriptions of data.

The problem is that every new cryptographic process we write potentially
results in a differentiated address. This means that **data**, the
thing we're ***actually trying to represent***, is being divided
and segmented into new silos resulting from the **re-centering**
of the address to a fixed representation of a single method of
cryptography.

As an example, many data products across many categories offer
features related to the hash digest of an API result or file. File
and data addresses for IPFS files, Bittorrent, dat, git, and
every other system built from a merkle structure that
include meta information and/or represent the file as
a byte array, all result in different addresses.

This difference in addresses has meant a lack of compatibility
between systems and lead all of these sytems to pursue their
own transport layers with minimal support for existing transports
like HTTP. So, in practice, this is worse than data just being
divided by encoding, it's also being divided by transport.

Centerless uses recusively composable virtual data interfaces so
that the cryptography applied to them does not depend on a single 
identifier (center), meaning there is **no single fixed address** for data
in centerless. We can then define structured equivalencies
between data representations such that the differentiating characteristics
of the encoding layer are irrelevant as long as they can read bytes
that result in compatible proof.

If there's a means of cryptographic verification between formats,
then centerless can treat them equally. As long as the
resulting proofs match, the data from different encodings, addresses,
and locations can be mixed and matched.

All data, everywhere on the Internet, using any transport (HTTP, FTP,
git, Bittorrent, IPFS) is acceptible input if it ends in a matching proof. Once
*anyone* has a matching proof they can publish the cryptography that
arrived at that proccess for the benefit of others doing the same. Rather
than dividing data among encodings and networks, centerless allows for
the entanglement of determinism between cryptographies so that each
can be used together if the sources are truly equivalent.

## `Input`, `Instructions`, and `Proof`

Let's define "data" in the abstract as "some bytes." All data, at some
point or another, is turned into bytes. This way, centerless works with all
systems that work in bytes, which is all systems.

Let's call the base interface for data (secure virtual memory) `Centerless`.

There are three interfaces that inherit, or extend, this interface.

1. `Input` (Bytes)
2. `Instructions` (Array of Numbers)
3. `Proof` (Array of Hash Digests)

Each of these interfaces derive from `Centerless` and `Centerless`
can be seen as these interfaces collected as a triple (`[ Input, Instructions, Proof]`)
representing a cryptographically secured virtual memory system
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
* it's a representation of data as a sequence of sized byte segments (but could be only one segment long).
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
* each element of the byte array is securely randomized relativistic fingerprint,
	* so if the proof can be calculated selectively based on the read position
	  in the proof you can work with partial proofs.
* if you sort the digests before you write them, you can
  predictably seek into it as an index. the performance of
	this sort of index is faster than any tree you could
	build.
* if you decode the trailing bytes of any element in the
  byte array as a number, it's a securely randomized number.
	just make sure you read the number from the back of the digest
	because if the digests are sorted it won't be very random :)

All proofs in centerless are hash function agnostic and can be
built from any standard hash function (sha2, blake3, etc).

When proofs are addressed as a single block the resulting address
must be a `multihash`. The hash algorithm and digest length of that
address is the same hash algorithm and length used for every
hash in the proof.

Since proofs are encoded separately from the input data and proof
instructions, proofs are easily upgraded to new hash functions without
re-encoding any of the underlying data layer. When addresses
to foreign resources are written using a different `multihash`
the differences between them can be closed with equivalencies
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
