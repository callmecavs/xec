# xec

[![xec on NPM](https://img.shields.io/npm/v/xec.svg?style=flat-square)](https://www.npmjs.com/package/xec)

An async script loader, for the browser, built on Promises.

> Pronounced "exec".

## Install

```
npm i xec --save
```

## API

xec exports a singleton, and _won't load the same source twice_.

It exposes the following API:

* [one](#onesource)
* [many](#manysources)

### .one(source)

```javascript
import { one } from 'xec'

one('path/one.js')
  .then(() => console.log('Script loaded and executed.'))
  .catch(() => console.log('Something went wrong.'))
```

### .many(sources)

```javascript
import { many } from 'xec'

const sources = [
  'path/one.js',
  'path/two.js'
]

many(sources)
  .then(() => console.log('All scripts loaded and executed.'))
  .catch(() => console.log('Something went wrong.'))
```

## Browser Support

1. Async script loading requires [`async`](http://caniuse.com/#search=async) attribute support.
2. [Promises](http://caniuse.com/#search=promises) are required. If needed, [polyfill](https://github.com/stefanpenner/es6-promise) them.

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
