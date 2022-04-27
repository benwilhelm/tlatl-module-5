import { readFile, writeFile } from 'fs/promises';
import { delay } from './util.js';
test('thing 1', async () => {
  const val = 'THING 1';
  await writeFile('./test.txt', val, 'utf-8');
  await delay(500);
  const actual = await readFile('./test.txt', { encoding: 'utf-8' });
  expect(actual).toBe(val);
});
