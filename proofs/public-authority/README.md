# Public Authority Proofs

There is data that appears to be "owned" or otherwise "controlled"
by an authority.

When the appearance of ownership is public, that authority will
make that data available to the public from locations identifiably
owned by that authority.

The data, and the authority, are dependent phenomena. The *meaning*
of the data would change were it to come from a different authority,
and vice versa.

This is presumed to mean that this authority's control over data
is unshakable. However, the mean appearance of the data *in public*
means that every public actor has a means of verification.

In other words, we can talk **about** data on twitter.com and even
built upon that data in our own systems and networks without the
permission of the "owner" as long as they are making the data publicly
available.

All we need is a cryptographic identity that will not conflict with
other forms of expression such that they result in crytographically
secured guaranteed uniqueness.

# De-Centering Twitter(.com)

There is the appearance of data "owned" by twitter.com. Some actors
read this data over an API (api.twitter.com), some by reading it
on twitter.com, some by embeddable widgets in other sides that 
display the data.

All we need to do is describe this data in such a way that the
resulting structure is unique among all data ever created or
generated on the internet. Once we have this method, we can
read the data from **anywhere** that we know is a trusted source
of such verification. Meaning, we can read it out of the HTML elements
in the widget embeds, the site content appearing in our browser, or
the formally registered API provided by twitter.com.

We use twitter.com as an example, but this is clearly true of any
appearance of publicly available data that is "owned" by an authority.
There's no issue of copyright to speak of because we won't be
directly using the copyrighted work, we'll be working with something
much more akin to an index of publicly available data which we
have well established rights to index and talk *about* present in
common law and Google, along with other big search companies, have
diligently protected the right to do so on The Web.

We should then seek to arrive at a universally understood description,
such that the entity itself is not copyrightable as such, that can
describe any data anywhere on The Web in deterministic way. Simple, ya :)

## Public Authority Proof

In data on The Web there is the appearance of a linear chain of authority
from the authority down a heirarchy of entities. Data in different
systems may appear in numerous formats and encodings and we want to 
un-separate those distinctions in order to arrive at an ideal representation.

```
[ 'twitter.com', 'user', 'mikeal' ]
const id = 12312
[ 'twitter.com', 'tweets', id ]
```

We can easily compute unique identifiers by passing the relevant data
into a hash function. We can then pass the unique identifier of the parent
into the input of each subsequent hash. Each hash digest result is 
written to the proof such that the final proof's width is the same
as the length of the entity chain.

The hash of the resulting proof block is guaranteed to be unique for that
entity.

The simplest algorithm (implemented here) is to take an "un-typed encoding"
of every entity as input to a digest, with each digest proceed by the final (concatenated)
digest of its parent.

This way, the proofs are recursive representations, each entity representing the final
value of the chain at each state. This allows for a variety of useful inclusion
checks to be performed on the resulting proof.


