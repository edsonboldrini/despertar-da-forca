import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DESPERTAR_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'tuffi.db.elephantsql.com',
      port: 5432,
      username: 'drbfxsbk',
      password: 'yfdTXQyIMYXPAP2grGbk5BzwwAOSriUD',
      database: 'drbfxsbk',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];