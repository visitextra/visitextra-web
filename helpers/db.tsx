import { type GeneratedAlways, Kysely, CamelCasePlugin } from 'kysely'
import { PostgresJSDialect } from 'kysely-postgres-js'
import { DB } from './schema'
import postgres from 'postgres'

const isDbUrlValid = (url: string | undefined): boolean => {
  if (!url) return false;
  if (url.includes("fill this up")) return false;
  if (!url.startsWith("postgres://") && !url.startsWith("postgresql://")) return false;
  return true;
};

const createKyselyProxy = (): any => {
  const handler: ProxyHandler<any> = {
    get(target, prop, receiver) {
      if (prop === 'then') {
        return (resolve: any, reject: any) => {
          resolve({
            id: 'mock-id',
            numInsertedOrUpdatedRows: 1n
          });
        };
      }
      if (typeof prop === 'string') {
        return (...args: any[]) => {
          if (prop === 'onConflict') {
            const callback = args[0];
            if (typeof callback === 'function') {
              try {
                callback(new Proxy({}, handler));
              } catch (e) {
                // Ignore errors
              }
            }
          }
          return new Proxy({}, handler);
        };
      }
      return new Proxy({}, handler);
    }
  };
  return new Proxy({}, handler);
};

let dbInstance: any;
const dbUrl = process.env.FLOOT_DATABASE_URL;

if (isDbUrlValid(dbUrl)) {
  try {
    dbInstance = new Kysely<DB>({
      plugins: [new CamelCasePlugin()],
      dialect: new PostgresJSDialect({
        postgres: postgres(dbUrl!, {
          prepare: false,
          idle_timeout: 10,
          max: 3,
        }),
      }),
    });
  } catch (e) {
    console.warn("Failed to initialize database client. Using mock database fallback Proxy.", e);
    dbInstance = createKyselyProxy();
  }
} else {
  console.warn("FLOOT_DATABASE_URL is not configured or invalid. Using mock database fallback Proxy.");
  dbInstance = createKyselyProxy();
}

export const db = dbInstance as Kysely<DB>;