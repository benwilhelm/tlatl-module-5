import { readFile, writeFile } from 'fs/promises';
import { delay } from './util.js';
import tmp from 'tmp';

const tmpFile = tmp.fileSync();

test('thing 2', async () => {
  const val = 'THING 2';
  await writeFile(tmpFile.name, val, 'utf-8');
  await delay(500);
  const actual = await readFile(tmpFile.name, { encoding: 'utf-8' });
  expect(actual).toBe(val);
});
