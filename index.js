'use strict';
const GMS = 4;

module.exports = function (val, type) {
	type = type || 'g';

	if (typeof val !== 'number') {
		throw new TypeError('Expected a number');
	}

	if (!/^(g|t)$/.exec(type)) {
		throw new TypeError('Unknown type: ' + type);
	}

	if (type === 'g') {
		return val / GMS;
	} else if (type === 't') {
		return val * GMS;
	}
};
