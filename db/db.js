import { Sequelize } from 'sequelize';

// don't log SQL Statements in test environment, unless DB_LOGGING environment
// variable is explicitly set
const logging = getLoggingOption;
// const dbCnxString = 'sqlite::memory:';
const dbCnxString = 'sqlite:./.sqlite/test.sqlite';

export const db = new Sequelize(dbCnxString, { logging });

function getLoggingOption() {
  const { DB_LOGGING, NODE_ENV } = process.env;
  const log = (msg) => console.log(msg);
  if (DB_LOGGING && DB_LOGGING !== 'false') return log;
  if (NODE_ENV === 'test') return false;
  return log;
}
