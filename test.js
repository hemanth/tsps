import test from 'ava';
import fn from './';

test('grams to teaspoons', t => {
	t.is(fn(4, 'g'), 1);
	t.end();
});

test('teaspoons to grams', t => {
	t.is(fn(1, 't'), 4);
	t.end();
});
