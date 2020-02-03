webpackHotUpdate("static/development/pages/updates/3.js",{

/***/ "./pages/updates/3.js":
/*!****************************!*\
  !*** ./pages/updates/3.js ***!
  \****************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var layouts_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! layouts/update */ "./layouts/update.js");
var _jsxFileName = "/Users/abbeytitcomb/Documents/GitHub/access-p2p/pages/updates/3.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var meta = {
  releaseDate: new Date(2020, 1, 26),
  title: 'Social P2P by Emily Woods'
};
function Index() {
  return __jsx(layouts_update__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meta: meta,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " The following blog post was written by Emily Woods, a member of the AccessP2P cohort. She's graciously allowed us to repost it here, but the original can be found on her ", __jsx("a", {
    href: "https://emilywoods.me/blog/social-p2p/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "blog"), "."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, " In November 2019, I attended ", __jsx("a", {
    href: "https://accessp2p.xyz/why",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "AccessP2P"), ". This was formed as a series of lectures, aimed at introducing a group of people to peer-to-peer (P2P) technologies and concepts."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "The topic of Social Peer-to-Peer was lecture #3 in the AccessP2P series."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "The very first lecture had been an introduction to P2P. It delved into the \u201Cperson-to-person\u201D aspects of P2P, as a zoom out from the potentially techno-centric focus of P2P. The Social P2P lecture was an appropriate follow-up. In this lecture, we gained an introduction to social networks, peer-to-peer (P2P)-based network paradigms, and the concept of trust."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "This lecture was presented by ", __jsx("a", {
    href: "https://isthisa.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Sarah Friend"), ", an artist and software engineer. It provided an opportunity to learn more about the structure and development of social networks, to find out what are some P2P social networks we can become part of, and, if we wished, to start P2P-ing with ", __jsx("a", {
    href: "https://scuttlebutt.nz/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Scuttlebutt"), "!"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "A social network"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "A \u201Csocial network\u201D is a familiar concept to most of us these days. When hearing the term, what pops into your head? It\u2019s likely to be the image of a small blue bird or white \u201Cf\u201D on a deep blue background. While social media networks may have seized the term somewhat, in its essence a social network is a network of interconnected humans, online or offline. Many of the social networks we log onto every day, are intended to mirror the way that people interact in the \u201Creal-world\u201D: social media networks coerce real-life connections into something quantifiable."), __jsx("img", {
    src: "https://emilywoods.me/assets/images/social_p2p/network.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Before delving into social networks, it helps to know what is meant by \u201Ca network\u201D. A network is a graph, meaning there are entities (nodes) which have connections between them (edges). A graph can be directed or undirected, which means a connection goes one-way or both ways. To illustrate this, Sarah referred to the way users interact on Twitter, where one person follows another and that person does not need to follow back (directed graph), and compared it with how users interact on a platform like Facebook, where \u201Cfriending\u201D an individual requires consent by both individuals (undirected graph)."), __jsx("div", {
    className: "img_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: "https://emilywoods.me/assets/images/social_p2p/graph_direction.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Sarah then continued by describing a couple of specific types of networks: ", __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Small-world_network",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "small world"), " and ", __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Scale-free_network",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "scale-free"), ". In a small world graph, some nodes are \u201Chubs\u201D meaning that they have a higher number of connections than others. As a result of having a number of highly connected nodes, these small world networks can provide shorter paths between nodes. Sarah likened this to having an extroverted person in the network: someone with a lot of friends and who does a lot of the social heavy-lifting, who as a consequence, will reduce the number of connections between other individuals. For ease of understanding, Sarah suggested a lattice as the opposite of a small world graph, given that each node has an evenly distributed number of neighbours, ie. connections."), __jsx("img", {
    src: "https://emilywoods.me/assets/images/social_p2p/small_world.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "A scale-free network, can also be referred to as a power-law network, given that this type of network asymptotically follows a power-law distribution. This describes the relationship between the number of nodes and the number of connections a node will have, and demonstrates the fraction of nodes which are likely to have a particular degree of connectivity. A characteristic of scale-free networks, it is that it can be relatively common for nodes to have a number of connections, which exceeds the average number of connections i.e. a small number of well- connected nodes may dominate the network and result in a centralised structure. Social networks can be scale-free."), __jsx("img", {
    src: "https://emilywoods.me/assets/images/social_p2p/scale_free.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "In summary, social networks are just another type of graph, where the nodes are people and the edges are the means by which they connect. While this may seem relatively simple to understand, there is a lot more that goes on within social media platforms, beyond the user interface and the relationship-graphs we can visualise for ourselves. [Aside: while carrying out an exercise in threat modelling of a P2P network during the ", __jsx("a", {
    href: "https://www.youtube.com/watch?v=wkrWhEFABrA&feature=youtu.be",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Access P2P Security lecture"), ", it provided a little context into what kind of information which can be deduced from relationships in a network, if someone wants to take advantage of it.]"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "What can a P2P-based social network look like?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Most applications use a client-server relationship: we (the client) make a request to the server and the server fulfils it. With P2P, peers are connected to each other, without a central server. Protocols such as ", __jsx("a", {
    href: "https://www.datprotocol.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Dat"), " and ", __jsx("a", {
    href: "http://scuttlebot.io/more/protocols/secure-scuttlebutt.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Secure Scuttlebutt"), " provide a means of achieving this. In a P2P network, nodes connect and form a (social) network."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "P2P social networks can take many forms. For example, the PGP web of trust and key-signing parties can be considered a form of social network. At a key-signing party, participants sign each others\u2019 keys, which acknowledges this person is who they say they are (via government issued documentation or otherwise), to extend the web of trust. The party itself follows a specific protocol. One of the concepts which comes out of PGP is a strong set, referring to the biggest collection of connected keys. Any two keys within this strong set have a path of connections between them and are part of the global web of trust. However it is possible that isolated islands form, separate from this strong set. Understanding the existence of this ", __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Web_of_trust#Strong_set",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "strong set"), " and isolated islands, we can identify a potentially malicious group. A malicious group may be an island of users who all trust each other and support each others\u2019 content, but remain unconnected to the strong set. This could be evidence of a ", __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Sybil_attack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Sybil attack"), " taking place - whereby a large number of false users is created by an attacker to gain influence."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Some commonly-known P2P social network applications are Scuttlebutt, Mastodon and Bittorrent. In the lecture, Sarah honed in on Scuttlebutt! So what did we learn about it? Well, Scuttlebutt is a social network which makes use of the ", __jsx("a", {
    href: "http://scuttlebot.io/more/protocols/secure-scuttlebutt.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Secure Scuttlebutt Protocol"), ". It has a number of different clients which you can use to connect to the protocol, such as ", __jsx("a", {
    href: "https://github.com/ssbc/patchwork",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Patchwork"), " and ", __jsx("a", {
    href: "https://github.com/ssbc/patchbay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Patchbay"), ". The network uses gossip protocols as a way to disseminate information between peers. Most messages in Scuttlebutt are plain text and publicly visible, but private messages are also possible. Private messages are encrypted and sent through the people you\u2019re connected to, but can only be decrypted with your intended recipient\u2019s PGP key! One of the neat things about Scuttlebutt is that it is local-first! The story goes that this is because many of the developers and original creators of Scuttlebutt spend a lot of time on boats, and naturally still wanted to be able to connect to their friends. (This is also good to know, since I, too, have had many, many fantasy conversations about beginning a nomadic life on a boat and/or van in recent years). The potential downside of local-first is that you will always store more than you can access or see. In Scuttlebutt, trust is directed, i.e. it goes one way."), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "How we trust"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "In P2P (and other forms of digital social networks) trust is usually binary: you\u2019re friends with someone or you\u2019re not, you follow someone or you don\u2019t. This only partially reflects relationships in reality - in the \u201Creal world\u201D we trust people with varying degrees of certainty."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Two core results of trust are \u201Ctrust as identity\u201D and \u201Ctrust as reputation\u201D. While these are interconnected and similar, they are not necessarily the same. There are also different ways of characterising trust: global versus local, centralised versus decentralised, policy-based versus reputation-based."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Sarah also explored the concept of anonymity in P2P networks, and the question appeared: \u201CWhat does anonymity even mean?\u201D Anonymity is never truly guaranteed. And even if it appears that you are anonymous now, there are things which may be used to identify you over time, such as relationships or patterns of behaviour. Anonymity, insofar as it goes, is mostly beyond your control and is really limited by the lengths that somebody can go to in order to uncover your identity. And, even if this is difficult to uncover now, who\u2019s to say what will be possible in the future. Anonymity (probably) won\u2019t last forever."), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Concluding Thoughts"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Sarah\u2019s lecture was an interesting journey through graph theory, P2P protocols, and trust.Every segment of her talk included references to complementary research or applications, so even afterwards, there was much to explore and follow up on. With regards to trying out social P2P applications, I haven\u2019t yet set myself up Scuttlebutt, but I would like to give it a try!"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Links and references"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "A recording of the lecture as well as many of the supporting materials, can be found ", __jsx("a", {
    href: "http://accessp2p.xyz/resources",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "here"), "."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Here is a helpful guide for getting started with ", __jsx("a", {
    href: "https://docs.datproject.org/docs/intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Dat"), "s.")), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Acknowledgements"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Thank you to ", __jsx("a", {
    href: "https://twitter.com/angedupre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Ange"), " for reviewing this post, and also for the wonderful work she did with overseeing the entire AccessP2P programme."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Thank you to ", __jsx("a", {
    href: "https://isthisa.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Sarah"), " for reviewing this post and for sharing her knowledge on social P2P!"));
}

/***/ })

})
//# sourceMappingURL=3.js.984030fd3e684dcd65c4.hot-update.js.map