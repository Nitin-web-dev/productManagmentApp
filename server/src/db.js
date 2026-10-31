import {Pool} from 'pg';

const pool = new Pool({
    host: "db",
    port: 5432,
    user: "serverdb123",
    password: "password123",
    database: "serverpgdb"

})

export default pool;