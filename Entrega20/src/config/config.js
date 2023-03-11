import dotenv from "dotenv";
import ParsedArgs from "minimist";

dotenv.config();

const objArgs = ParsedArgs(process.argv.slice(2), {
    alias: {
        p: 'port',
        m: 'mode',
        e: 'env',
    },
    default: {
        port: 8080,
        mode: 'FORK',
        env: 'TEST'
    }
});

export const options = {
    server: {
        PORT: objArgs.port,
        MODE: objArgs.mode,
        NODE_ENV: objArgs.env,
        dbType: process.env.DATABASE_TYPE || 'MONGO',
    },
    mongoDB: {
        mongoUrl: objArgs.env === "TEST" ? process.env.MONGO_URL_TEST : process.env.MONGO_URL
    },
    sqlite: {},
}