import { randomBytes } from 'crypto';

export function delay(ms) {
  return new Promise((resolve, reject) => {
    const jitter = Math.random() * 0.4;
    const actualMs = ms * (0.8 + jitter);
    setTimeout(resolve, actualMs);
  });
}

export async function suppressErrorOutput(fn, options = {}) {
  if (!!options.debug) {
    return fn();
  }

  const original = console.error;
  console.error = () => {};
  const ret = await fn();
  console.error = original;
  return ret;
}

export function randomizeEmail(email) {
  const bytes = randomBytes(3);
  const string = bytes.toString('hex');
  const [user, domain] = email.split('@');
  return `${user}-${string}@${domain}`;
}
