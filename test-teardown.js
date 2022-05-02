import { User } from './db/index.js';

export default async function teardown() {
  await User.destroy({ where: {}, truncate: true });
}
