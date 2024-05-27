import pkg from 'pg';
const { Client } = pkg;
export const client = new Client(process.env.DATABASE_URL);

client.connect();
const execute = async()=>{
    const res = await client.query('SELECT * FROM stockdata');
    console.log(res)
}