import { FooBar } from './foobar.js';

test('should set all allowed properties passed to constructor', () => {
  const sut = new FooBar({
    foo: 'FOO',
    bar: 'BAR',
  });
  expect(sut.foo).toEqual('FOO');
  expect(sut.bar).toEqual('BAR');
});

test('should default separator to empty string', () => {
  const sut = new FooBar({
    foo: 'FOO',
    bar: 'BAR',
  });

  expect(sut.separator).toEqual('');
});

test('.foobar should return combo of foo/separator/bar', () => {
  const sut = new FooBar({
    foo: 'FOO',
    bar: 'BAR',
  });

  expect(sut.foobar).toEqual('FOOBAR');
});
