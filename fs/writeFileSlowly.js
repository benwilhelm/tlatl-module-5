import { writeFile } from 'fs/promises';
import { delay } from '../util.js';

export async function writeFileSlowly(filePath, text) {
  await writeFile(filePath, text, 'utf-8');
  const ms = Math.random() * 50;
  await delay(ms);
}
