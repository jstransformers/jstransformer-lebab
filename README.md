# jstransformer-lebab

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-lebab.svg)](https://greenkeeper.io/)

[Lebab](http://lebab.io/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-lebab/master.svg)](https://travis-ci.org/jstransformers/jstransformer-lebab)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-lebab/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-lebab)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-lebab/master.svg)](http://david-dm.org/jstransformers/jstransformer-lebab)
[![NPM version](https://img.shields.io/npm/v/jstransformer-lebab.svg)](https://www.npmjs.org/package/jstransformer-lebab)

## Installation

    npm install jstransformer-lebab

## API

```js
var lebab = require('jstransformer')(require('jstransformer-lebab'));

lebab.render('var lebab = require('lebab');').body
//=> "import lebab from 'lebab';"
```

## License

MIT
