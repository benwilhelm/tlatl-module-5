import { FooBar } from './foobar.js';

test('should set all allowed properties passed to constructor', () => {
  const sut = foobarFactory();
  expect(sut.foo).toEqual('FOO');
  expect(sut.bar).toEqual('BAR');
});

test('should default separator to empty string', () => {
  const sut = foobarFactory();
  expect(sut.separator).toEqual('');
});

test('.foobar should return combo of foo/separator/bar', () => {
  const sut = foobarFactory();
  expect(sut.foobar).toEqual('FOOBAR');

  const sutDash = foobarFactory({ separator: '-' });
  expect(sutDash.foobar).toEqual('FOO-BAR');
});

test('missing property throws error', () => {
  const sut = () => foobarFactory({}, { remove: ['foo'] });
  expect(sut).toThrow(/missing properties: foo/i);
});

function foobarFactory(overrides, options) {
  const defaults = {
    foo: 'FOO',
    bar: 'BAR',
  };
  const props = { ...defaults, ...overrides };

  if (options?.remove) {
    options.remove.forEach((key) => {
      delete props[key];
    });
  }

  return new FooBar(props);
}
