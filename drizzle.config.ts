import type { Config } from "drizzle-kit";
import dotenv from 'dotenv';
dotenv.config();

export default {
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    driver: "mysql2",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || 'mysql://user:pass@db.com'
        // connectionString: 'mysql://e38g9vufujg6u0yojk7l:pscale_pw_ikT5xUYOIXzTKOIMMURN1BxmHfmtrqaNfMRqlGt1Yz9@aws.connect.psdb.cloud/uac-tool?ssl={"rejectUnauthorized":true}'
    }
} satisfies Config;