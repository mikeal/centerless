# JSON Proofs

🚧 under construction 🚧

JSON Proofs provide a deterministic representation of typed
object data between a variety of formats. The only compatability
requirement between formats is:

* Strings are encoded as utf-8 (true of almost all uncompressed formats)
* Binary is encoded "raw" (true of all uncompressed formats)

While these are called "JSON" proofs, we include support for two
additional types common among many encoding formats, but support
for these is not required unless you need equivalency which would
require that **both** formats support the type.
* Binary
* CID (merkle link, supported in native IPLD types)

# Understanding JSON Proofs

Encoding formats vary a lot in terms of how they tokenize and represent the
following structures:
* Objects
* Arrays
* Numbers
* Boolean (true/false)
* Null

JSON Proof instructions contain all the relevant offset information to
understand the placement of all relevant structural tokens and representation
of these values. The encoding used for hash identification is fixed so that it
does not change between formats, and number values are included inline in
the instructions in order to avoid variations in encoding formats.

String and Binary values offsets are also included in the instructions, these
offsets are used to read offsets from the origin data in order to produce
proofs.

Since the original positions are understood, changes can be synced and
understood between changes in formats. Changes can even be merged into
alternate encodings with little to no understanding of the format
being manipulation (depending on the format).

# Proof Format

The instructions to the proof contain:
* type information for all types in the object
* inine representations of simple types
* offset information for all types and relevant structural tokens

From these instructions the `width` of the proof can be calculated,
since the number of all entites is known and proofs are simply
a hash of the typing information followed by a hash of each entity.

# Proof Algorithm

We'll start with a simple JSON object.

`{ "hello": "world" }`
