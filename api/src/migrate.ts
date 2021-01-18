import { Application } from './application';
import { log, error } from './log';

export async function migrate(args: string[]) {
  const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
  log('Migrating schemas (%s existing schema)', existingSchema);

  const app = new Application();
  await app.boot();
  await app.migrateSchema({existingSchema});

  // Connectors usually keep a pool of opened connections,
  // this keeps the process running even after all work is done.
  // We need to exit explicitly.
  process.exit(0);
}

migrate(process.argv).catch(err => {
  error('Cannot migrate database schema', err);
  process.exit(1);
});
