# Sutra Proofs

This is a collection of data structures and proofs for
understanding and working with language *as mere appearance.*

The term "sutra," used to describe a class of Buddhist
scripture, comes from the sanksrit "sutram"
meaning "string, thread." as seen in the 
common english word "suture" used to describe sergical
sewings.

The term "sutra" came to be used in Buddhism to describe teachings
written for the first time to text from prior oral tradition
along with new sections that "stitched together" oratory verses 
through exposition and commentary unique to the written form
of the teaching.

`Sutra` "stitches together" all forms of language serialized to text.
This includes:
* common languages (english, chinese, sanskrit, etc.),
* programming languages,
* and translations between them all.

In addition to understanding these forms of formal language,
there is also an undertstanding of forms visible within
these languages that are universal between languages of common
characteristics:
* sequences
* dualisms (positive/negative, good/bad)
* set (similar to sequence but resting in equality)
* sections (chapters, [recursive] sub-sections, etc)
* markup (🚧🚧🚧)

## Sutra Interface

There is a recursive interface from which all other interfaces derive
called "Sutra" that:
* is a valid `ByteArray`
* where each element of the byte array is considered an "inclusion."
* An instance
* **MAY** have a parent and
* **MAY** have a single child instance for each inclusion (element of
  byte array) of a pre-determined type implementing the Sutra interface.

It is through this interface that we can come to see all
language as a series of inclusions. Those inclusions are
able to describe with cryptographically secured precision
the relativity in which they appear.

From this understanding we can build systems that understand all language
in high precision, without the need to adjust any specifics for each language.

## Proofs

Proofs provide cryptographic addresses for the relativity appearance of language
in the set on inclusions being addressed.

Let's start with a short example where we break the string "Hello World"
into a series of inclusions and inspect the resulting proofs and masks.

```js
import { string } from 'centerless/sutra'

const text = string('Hello World')
const words = text.split(' ')
const word_proof = words.proof()
console.log(word_proof)
// SplitProof([' '], ['Hello', 'World']) 
console.log(word_proof.length)
// 3 /* [ HASHER([' ']), HASHER('Hello'), HASHER('World') ]  */
console.log(word_proof.mask)
// Mask([0], ['Hello World'])
const hello_letters = words.inclusion(0).split()
const letter_proof = hello_letters.proof()
console.log(letter_proof)
// SplitProof([], ['H', 'e', 'l', 'l', 'o'])
console.log(letter_proof.mask())
// Mask([0, 0], ['Hello World', 'Hello'], 
console.log(words.inclusion(1 /* "World" */).split().proof().mask())
// Mask([0, 1], ['Hello World', 'World'])
```

## Masks

Masks describe the parent inclusion path to any piece of text.
const mask = words.inclusion(1 /* "World" */).split().proof().mask()
const relative_proof = mask.relative()
console.log(relative_proof.length)
// 2 /* [ HASHER('Hello World'), HASHER('World') ] */
cosnt inclusion_proof = mask.proof()
console.log(inclusion_proof.length)
// 2 /* [ HASHER('Hello World' + hash_result_of->, HASHER('World') ]
const absolute_proof = mask.absolute()
console.log(absolute_proof.length)
// 2 /* [ HASHER(0 + 'Hello World' + hash_result_of->, HASHER(1, 'World') ] */
```

Masks have three proofs:
* relative (the hash of each element in the mask)
* inclusion (a recursive address scheme relative to the word in the parent split)
* absolute (a recursive address scheme relative to the word as it appears positionally in the parent split)

This may seem excessive, but luckily every element in every proof
is created on an as-needed basis, so you only generate what you need.

## Common Language Proofs

Common language proofs are simple proofs for any spoken language that
use a series of rules for each layer of recursion visible in common
language.

The rule sets are, in order:
* Text
* Lines
* Arrangements
* Parts
* Characters

Text is any small or large document from which the lines will be consider inclusions.

Lines are a `SplitProof(['\r', '\n'])`. Note that SplitProofs are built from FilterProofs,
so the characters used to split the text are not visible in the inclusion. For each element 
of Lines there are Arrangements.

Arrangements is a `SplitProof` with a series of delimiters representing the end of common
sentence structures, and a few other rules to handle edge cases. For each element of
the Arrangements there are Parts.

Parts is a `SplitProof` with a series of word ***and puncuation*** delimiters. For each
element in Parts there are Characters.

Characters is a text encoding split (utf8 default) of all the characters occuring in the
parent.

## Translations

A translation is a transform of one piece of language to another. It describes
an exact "swap" for a single value called `origin` (instance of Lines, Arrangments, Parts, etc)
relative to the inclusions of the `origin`.

This means the a Translation's `origin` is seen *like* a `Mask` for the translation.

A `Translation` can then be used as the basis for sub-inclusion `Translations`
recursively. These sub-inclusions all rolled up can then be used to determine
`Mask`s with known equivalency to the `origin`'s `Mask` in the relavitity collected
in the parent containers.

```js
import { translation } from 'centerless/sutra'


## 


