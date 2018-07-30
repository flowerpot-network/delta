# Oscoin: Principles & Motivation

When we started Oscoin, our motivation was guided by the observation that
crypto-currencies could enable a new form of community-owned and operated
network. The invention of digital scarcity[^1] made it possible to economically
incentivize and remunerate network participants for their service in a simple,
transparent way, without mediation by a third-party.

[^1]: When we think of a digital environment, we usually think of things that
  can be easily duplicated, copied and pasted, counterfeited... etc., but
  bitcoin and the blockchain introduced the concept of *digital scarcity*. In
  order to duplicate a bitcoin, you would need to duplicate the entire
  blockchain instantaneously -- an impossible feat with contemporary computing.

If Bitcoin sought to reward network *operators* for their service in validating
transactions, other projects such as Zcash and Dash extended that reward to the
engineers working on the software.

It was only natural for us to imagine a community of open-source developers,
incentivized by a native currency distributed to the projects most valued by
the community, and traded between collaborators, users and maintainers of
these projects. This ecosystem, we thought, could provide a solution to the
problem of open-source sustainability[^2], while also freeing the community
from centralization risks associated with platforms such as GitHub and GitLab.

[^2]: Rebuilding the Cathedral: <https://www.youtube.com/watch?v=VS6IpvTWwkQ>

Well aware of the fraud and confusion around decentralization, we saw potential
in crypto-currencies to address socio-economic problems which would allow
contributors to be rewarded in a currency that *also* confers ownership of the
network. By consolidating equity with currency, we create a fairer distribution
mechanism for long term network sustainability. In such an economy, there are
no second class citizens[^3], everyone is aligned around a single token,
everyone wins and loses together.

[^3]: In the current financial system, equity accrues value over time, while
  currency loses value. Those who principally hold equity thus get richer,
  while those who hold currency get poorer.

An uncomfortable truth about our society is that *apparent* convenience is
chosen over everything else. Centralized platforms offer this convenience
seemingly for "free", but since the explosion of the Internet in the 1990s we
can observe how this pans out: critical social infrastructure is taken over by
corporate interests as communities move from one centralized platform to
another. Our belief is that *logical* centralization[^4] is necessary for
communities to exist, but economic centralization is not.

[^4]: Logical centralization: <https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274>

**Oscoin**

Oscoin is a community-governed network for collaboration and incentivization
around open-source software.

Our first task is to build a protocol and an open platform on top of which the
community can build tools with a common set of building blocks. We aren't
looking to reproduce the Web 2.0 era of monolithic applications, whether closed
or open-source -- instead we're taking a protocol-first approach hoping to see
a wide variety of clients and applications following. We aim to provide a
common vocabulary on which people can build collaboration and version-control
tooling as they see fit.

Behind the scenes, we use blockchains to replicate digital ledgers in a
permissionless way, IPFS[^5] as a storage solution, and an infrastructure built
upon public key cryptography. Network participants can host their code on the
network, transact and collaborate with each other. But most importantly they
get to govern the network through a combination of on-chain and off-chain
processes, where the semantics of the protocol are updated automatically once an
on-chain community consensus has been reached.

[^5]: IPFS: <https://ipfs.io/>

Due to its permissionless nature, the network is free of socio-economic single
points of failure, is censorship resistant and always online. Lastly, our
protocol is being implemented on a self-amending core language we call
*radicle*, which allows for changes to be carried out by the community without
forks or client upgrades.

On the incentivization side, our protocol allows the community to pledge their
tokens towards the projects they value, signaling their preferences within the
network and helping their favorite projects be financed while still holding
their assets. This form of incentivization can be thought of as "support with
the benefit of hindsight" that allows projects to receive continuous income for
the ongoing development and maintenance of their project. This provides an
alternative to existing forms of incentivization such as donations, corporate
sponsorships etc., that is dependable, transparent and developer friendly.

The mechanism through which this takes place is a token-curated registry (TCR)
[^6] which informs the allocation of funds of the community treasury.  This
"crypto-economic game" makes it profitable for the community to protect its
commons through a process of self-organization, while allocating rewards to
the projects most likely to bring value to the open-source ecosystem.

[^6]: TCRs: <https://medium.com/@ilovebagels/token-curated-registries-1-0-61a232f8dac7>

Finally we'd like to enable developers to create project-specific
incentivization mechanisms and capture value as they see fit. One of the key
trends that we observe in open-source communities today is summarized by the
statement *my code is free, my time isn't*. With our platform, developers will
be able to charge others for influence within their projects. This could take
the form of prioritization of issues, support, 24 hour issue resolution,
bounties or even participation on project governance.  The underlying
principle is that developers should be in control of whether or how to
extract value. We supply only the primitives and enable the community to
experiment around them, which is the modus operandi of open-source
software.

If you'd like to get involved, find us on irc.freenode.net on the #oscoin
channel, [@oscoin](https://twitter.com/oscoin) on twitter and
[t.me/oscoin](http://t.me/oscoin) on Telegram.
