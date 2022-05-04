import { User } from './user.model.js';
import { createUserRouteHandler } from './user.route.js';
import { suppressErrorOutput } from '../util.js';

beforeAll(() => User.sync({ force: true }));
beforeEach(() => User.destroy({ where: {}, truncate: true }));

test('Returns 200 with valid params', async () => {
  const params = {
    name: 'Ben',
    email: 'ben@ben.ben',
  };
  const response = await createUserRouteHandler(params);
  expect(response).toEqual(200);
});

test('Returns 500 on error', async () => {
  const params = {
    name: 'Ben',
    email: 'ben@ben.ben',
  };
  jest.spyOn(User, 'create').mockImplementation(() => {
    throw new Error('Fake Error');
  });

  const response = await suppressErrorOutput(() =>
    createUserRouteHandler(params)
  );
  expect(response).toEqual(500);
});
