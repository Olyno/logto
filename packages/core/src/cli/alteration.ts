import 'module-alias/register';
import { assertEnv } from '@silverhand/essentials';
import { createPool } from 'slonik';

import { deployAlterations } from '@/alteration';
import { configDotEnv } from '@/env-set/dot-env';

configDotEnv();

const deploy = async () => {
  const databaseUrl = assertEnv('DB_URL');
  const pool = await createPool(databaseUrl);
  await deployAlterations(pool);
  await pool.end();
};

const command = process.argv[2];

if (command !== 'deploy') {
  throw new Error('Unsupported command.');
}

void deploy();
