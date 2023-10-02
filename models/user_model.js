import pg from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: '14112002',
    host: 'localhost',
    port: 5432,
    database: 'userandcars'
})