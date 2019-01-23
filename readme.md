# anticore-quick-start

Create your own [anticore](https://github.com/Lcfvs/anticore) based project to build your app/site in seconds!

## How to install it?

* Be sure to have **node.js** installed on your machine or install it: [node.js](https://nodejs.org/en/download/)
* Install this package **into your localhost directory**
  * On UNIX systems:
  ```shell
  $ cd /var/www/html/project-name
  ```
  * On Windows systems:
  ```cmd
  cd C:\wamp\www\project-name
  ```
* Install it
```shell
$ git clone https://github.com/Lcfvs/anticore-quick-start.git .
$ npm i -D
$ npm run build
```
* Open your browser on your project index [http://localhost/project-name](http://localhost/project-name)
* Enjoy!

## Make your first middleware

Create a `./assets/js/dev/test.md.js`

```js
import { anticore } from 'anticore'
import { one } from 'anticore/dom/query/one'
import { replace } from 'anticore/dom/tree/replace'

// create a middleware to be applied on each element matching the `main.test` selector
anticore.on('main.test', function (element, next, loaded) {
  // replace the current main by the new one
  loaded && replace(element, one('main'))
  next() 
})
```

## Register your middleware

Import your middleware into your `./assets/js/dev/index.js`

```js
import {anticore} from 'anticore'
import './test.md.js'

anticore.defaults().populate()
```

## Build your app

**Into your localhost directory**, each time your JS code changes
```cmd
$ npm run build
```

## Create the content

Create a file into your project, for example `./fragments/test.html`

```html
<main class="test">This is the test content</main>
```

## Link it into your page

```html
<a href="./fragments/test.html">Load the test content</a>
```

