# anticore-quick-start

Create your own [anticore](https://github.com/Lcfvs/anticore) based project to build your app/site in seconds!

## How to install it?

<ul>
 <li>Be sure to have **node.js** installed on your machine or install it: [node.js](https://nodejs.org/en/download/)</li>
 <li>Install this package **into your localhost directory**
  <details>
   <summary>On UNIX systems</summary>

   ```shell
   $ project-dir=/var/www/html/project-name
   $ git clone https://github.com/Lcfvs/anticore-quick-start.git $project-dir
   $ cd $project-dir
   $ npm i -D
   $ npm run build
   ```
   </details>
   <details>
    <summary>On Windows systems</summary>

    ```cmd
    project-dir=C:\wamp\www\project-name
    git clone https://github.com/Lcfvs/anticore-quick-start.git %project-dir%
    cd %project-dir%
    npm install -D
    npm run build
    ```
   </details>
  </li>
  <li>Open your browser on your project index [http://localhost/project-name](http://localhost/project-name)</li>
  <li>Enjoy!</li>
</ul>

## Make your first middleware

Create a `./assets/js/dev/test.md.js`

```js
import { anticore } from 'anticore'
import { onClick } from 'anticore/dom/emitter/on/onClick'
import { one } from 'anticore/dom/query/one'

function changeColor (event) {
  one('h1', event.target).style.backgroundColor = '#ccc'
}

// create a middleware to be applied on each element matching the `main.test` selector
anticore.on('main.test', function (element, next) {
  onClick(element, changeColor)
  next() 
})
```

## Register your middleware

Import your middleware into your `./assets/js/dev/index.js`

```js
import {anticore} from 'anticore'

// Import your own middlewares here
import './default.md.js'
import './test.md.js'

// Let the following lines at the end of this file
import 'anticore/middleware/main/mono'
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
<main class="test">
  <h1>Test title</h1>
  <p>This is the test content</p>
</main>
```

## Link it into your page

```html
<a href="./fragments/test.html">Load the test content</a>
```

