#!/usr/bin/env node
'use strict';
var meow = require('meow');
var tsps = require('./');

var cli = meow([
	'Usage',
	'  $ tsps <input> [flags]',
	'',
	'flags',
	'  -g for grams [Default]',
	'  -t for tablespoons',
	'',
	'Examples',
	'  $ tsps 1',
	'  1gram of sugar is 0.25tablespoon',
	'  $ tsps -t 1',
	'  1tablespoon of sugar is 4grams'
]);

var val = cli.flags.g || cli.flags.t || cli.input[0];

if (!val) {
	console.error('Please specify a value.');
	process.exit(1);
}

var type = Object.keys(cli.flags)[0];
var result = tsps(val, type);

if (cli.flags.t) {
	// could use a module here.
	console.log(val + 'tablespoon' +
		(val > 1 ? 's ' : ' ') + 'of sugar is ' +
		result + 'gram' + (result > 1 ? 's' : '')
	);
	process.exit(0);
}

console.log(val + 'gram' +
	(val > 1 ? 's ' : ' ') + 'of sugar is ' +
	result + 'tablespoon' + (result > 1 ? 's' : '')
);
