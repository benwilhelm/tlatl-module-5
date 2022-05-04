import { readFile } from 'fs/promises';
import { writeFileSlowly } from './writeFileSlowly.js';

test('thing 1', async () => {
  const val = 'THING 1';
  const fileName = '.test-output/test.txt';

  // console.log(Date.now() % 100000, 'write thing 1');
  await writeFileSlowly(fileName, val);

  // console.log(Date.now() % 100000, 'read thing 1');
  const actual = await readFile(fileName, { encoding: 'utf-8' });
  expect(actual).toBe(val);
});

test('thing 2', async () => {
  const val = 'THING 2';
  const fileName = '.test-output/test.txt';

  // console.log(Date.now() % 100000, 'write thing 2');
  await writeFileSlowly(fileName, val);

  // console.log(Date.now() % 100000, 'read thing 2');
  const actual = await readFile(fileName, { encoding: 'utf-8' });
  expect(actual).toBe(val);
});
