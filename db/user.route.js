import { User } from './user.model.js';

export async function createUserRouteHandler(params) {
  try {
    await User.create(params);
    return 200;
  } catch (err) {
    console.error(err);
    return 500;
  }
}
