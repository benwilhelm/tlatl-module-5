import { readFile } from 'fs/promises';
import { writeFileSlowly } from './writeFileSlowly.js';
import tmp from 'tmp';

test('thing 1', async () => {
  const val = 'THING 1';
  const fileName = tmp.fileSync().name;

  await writeFileSlowly(fileName, val);

  const actual = await readFile(fileName, { encoding: 'utf-8' });
  expect(actual).toBe(val);
});
