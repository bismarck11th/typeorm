import { createConnection } from 'typeorm';

const main = async () => {
  try {
    const connection = await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres'
    });
    console.log('Connected to Postgres');
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to Postgres');
  }
};

main();
