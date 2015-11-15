# tsps [![Build Status](https://travis-ci.org/hemanth/tsps.svg?branch=master)](https://travis-ci.org/hemanth/tsps)

> grams of sugar in tablespoons.

__So, you want to know how many tablespoons of sugar you are eating?__

## Install

```
$ npm install --save tsps
```


## Usage

```js
const tsps = require('tsps');

tsps(1);
//=> '1gram of sugar is 0.25tablespoon'

tsps(1, 'g');
//=> '1gram of sugar is 0.25tablespoon'

tsps(1, 't');
//=> 1tablespoon of sugar is 4grams

```

## CLI

```
$ npm install --global tsps
```

```
$ tsps --help

  grams of sugar in tablespoons.

  Usage
    $ tsps <input> [flags]

  flags
    -g for grams [Default]
    -t for tablespoons

  Examples
    $ tsps 1
    1gram of sugar is 0.25tablespoon
    $ tsps -t 1
    1tablespoon of sugar is 4grams
```

## GIF FTW!
[tsps.gif](./tsps.gif)

## Motivation?

[![Sugar (HBO)](http://img.youtube.com/vi/MepXBJjsNxs/0.jpg)](https://www.youtube.com/watch?v=MepXBJjsNxs&feature=youtu.be&t=530)


## License

MIT © [Hemanth.HM](http://h3manth.com)
