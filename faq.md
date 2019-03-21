# Frequently Asked Questions

#### Q: What is Oscoin?

Oscoin is a cryptocurrency that rewards open source software projects based on
their relative value, using a system called Osrank.

The easiest way to think about it is something like Bitcoin, but where a
portion of the block reward is distributed to open source projects within the
network.

#### Q: What is Osrank and how does it work?

In order to determine how to distribute oscoin to the open source community, we
created **Osrank**. The intuition behind Osrank is that in order to determine the
*relative value* of a software project in the network, we need to leverage the
graph of open source dependencies and contributions. Osrank is informed by
PageRank and TrustRank.

#### Q: What is the role of the Oscoin currency?

Oscoin is fungible. After it is mined, it is distributed to OSS
projects based on their Osrank. The main functions it serves are:

1. Projects stake oscoin to be registered on the ledger and have an Osrank
   assigned. A small amount is burned over time to keep inactive projects from
   cluttering the ledger.

2. Projects are encouraged to require attribution directly on the ledger - this
   kind of attribution requires staking oscoin.

3. The platform and currency will facilitate exchange of services on the
   network. For example: feature prioritization, bug fixes, bounties, user
   support, code review and security audits.

#### Q: As a maintainer, how do I get rewarded?

As a maintainer, the first step is to register your projects on the ledger.
The source code can live on any hosting platform but needs to be publicly
visible.  Other projects can then start to depend on your project, increasing
your Osrank.  Every epoch, rewards in oscoin are distributed to projects based
on their Osrank.  These rewards vest over time, at which point the maintainer can
decide on how to allocate the funds.

#### Q: What are the incentives for maintainers to keep checkpointing their projects?

Checkpointing is how you add contributions, and contributions can increase your
project’s Osrank, bringing in higher rewards.

#### Q: How are authors rewarded vs. maintainers vs. contributors? Do authors get an ongoing stream of oscoin, even if they cease maintaining it?

This is entirely configurable per-project. The smart contracts associated with
a project determine who receives the rewards and how much. For example, a
contract could specify that the original author gets 1% of all rewards and
donations, and that this contract can only be updated if the original author
agrees.

#### Q: How will you ensure validity of the information on the ledger?

To bootstrap the network, a set of actors will perform the work. For the long
term however, we are researching oracle-based solutions which could involve
slashing dishonest projects.

#### Q: As a closed-source commercial entity, how does one participate?

Projects within the oscoin network have the ability to incentivize their
supporters, by giving them influence or services around their project, eg.
issue prioritization, feature voting etc. This requires supporters to pledge a
certain amount of oscoin towards the project. For commercial entities, this
offers a new way to support and invest in open source.

In addition, donations in oscoin have the advantage of full transparency: one
can easily see where and how the funds are being used, since oscoin provides
all open source projects with an account.

#### Q: What consensus algorithm does Oscoin use?

Oscoin currently uses Nakamoto consensus, but we are researching alternatives
that are less environmentally hazardous at scale.

