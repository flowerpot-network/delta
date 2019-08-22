# accessp2p.xyz

Main web outlet of the accessP2P project. Generation of the static output is
managed with [NEXT.js](https://nextjs.org/). We picked the following
components:

* [NEXT.js] - side structure and content management
* [Sass] - CSS extension language for layouts and styles
* [yarn] - dependency management and task execution

### Develop

To run a local instance of the site issue the following command:

```
yarn dev
```

### Build

To produce the latest version of the static generation run:

```
yarn export
```

### Deploy

This will build and deploy the website to github pages with the custom url [accessp2p.xyz](https://accessp2p.xyz).

```
yarn deploy
```
