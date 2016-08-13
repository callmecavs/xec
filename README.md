# xec

An async script loader, for the browser, built on Promises.

## Install

```
npm i xec --save
```

## Usage

```es6
import xec from 'xec'

xec('path/to/file.js')
  .then(() => console.log('Loaded and executed successfully!'))
  .catch(() => console.log('Something went wrong.'))
```

## Browser Support

1. Async script loading requires [`async`](http://caniuse.com/#search=async) attribute support.
2. [Promises](http://caniuse.com/#search=promises) are required. If needed, [polyfill](https://github.com/stefanpenner/es6-promise) them.

## License

[MIT](https://opensource.org/licenses/MIT). © 2016 Michael Cavalea
