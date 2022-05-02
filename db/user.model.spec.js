import { User } from './user.model.js';

beforeAll(() => User.sync({ force: true }));
beforeEach(() => User.destroy({ where: {}, truncate: true }));

test('getByEmailDomain gets all users whose email belongs at domain', async () => {
  await User.bulkCreate([
    { email: 'foo@baz.com', name: 'Foo' },
    { email: 'bar@baz.com', name: 'Bar' },
    { email: 'bif@baz.com', name: 'Bif' },
    { email: 'bif@example.com', name: 'Nope' },
  ]);

  const found = await User.findByEmailDomain('baz.com');
  expect(found.map((u) => u.email)).toEqual([
    'foo@baz.com',
    'bar@baz.com',
    'bif@baz.com',
  ]);
});

test('Saves Valid User', async () => {
  const params = {
    name: 'Ben',
    email: 'ben0@ben.ben',
  };
  const user = await User.create(params);
  expect(user.name).toEqual(params.name);
  expect(user.email).toEqual(params.email);
});
