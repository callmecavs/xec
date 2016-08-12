# xecute

A modern async script loader, built on Promises.

## Install

```
npm i xecute --save
```

## Usage

```
xecute('path/to/file.js')
  .then(() => console.log('Loaded and executed successfully!'))
  .catch(() => console.log('Something went wrong.'))
```

## Browser Support

1. Async script loading requires [`async`](http://caniuse.com/#search=async) attribute support.
2. [Promises](http://caniuse.com/#search=promises) are required. If needed, [polyfill](https://github.com/stefanpenner/es6-promise) them.

## License

[MIT](https://opensource.org/licenses/MIT). © 2016 Michael Cavalea
