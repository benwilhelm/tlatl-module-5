import { User } from './db/index.js';

export default async function setup() {
  await User.sync({ force: true });
}
