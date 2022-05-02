import { User } from './user.model.js';
import { createUserRouteHandler } from './user.route.js';
import { suppressErrorOutput, randomizeEmail } from '../util.js';

test('Returns 500 on error', async () => {
  const params = {
    name: 'Ben',
    email: randomizeEmail('ben@ben.ben'),
  };
  jest.spyOn(User, 'create').mockImplementationOnce(() => {
    throw new Error('Fake Error');
  });

  const response = await suppressErrorOutput(() =>
    createUserRouteHandler(params)
  );
  expect(response).toEqual(500);
});

test('Returns 200 with valid params', async () => {
  const params = {
    name: 'Ben',
    email: 'ben0@ben.ben',
  };
  try {
    const response = await createUserRouteHandler(params);
    expect(response).toEqual(200);
  } catch (err) {
    console.error(err);
    throw err;
  }
});
