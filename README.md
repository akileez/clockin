# clockin
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

## Installation
```bash
$ npm install clockin
```

## Usage
```js
var getDate = require('clockin')

var present = new Date()
getDate(present, 'now') // Sunday, August 23rd, 2015 05:06:14 GMT-0400
getDate(present)        // Sunday, August 23rd, 2015 05:06:14 GMT-0400
getDate('now')          // Sunday, August 23rd, 2015 05:06:14 GMT-0400
getDate()               // Sunday, August 23rd, 2015 05:06:14 GMT-0400
```

## API

#### `clockin ([date [, mask]])` 

## Why?
After analyzing my usage of [moment](https://www.npmjs.com/package/moment), I discovered that 99 out of 100 times I used
the date formatting routines of the present `moment`. 

## See Also
-

## License
[ISC](https://tldrlegal.com/license/ISC-license)

[npm-image]: https://img.shields.io/npm/v/clockin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/clockin
[travis-image]: https://img.shields.io/travis/akileez/clockin.svg?style=flat-square
[travis-url]: https://travis-ci.org/akileez/clockin
[coveralls-image]: https://img.shields.io/coveralls/akileez/clockin.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/akileez/clockin?branch=master
[downloads-image]: http://img.shields.io/npm/dm/clockin.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/clockin
