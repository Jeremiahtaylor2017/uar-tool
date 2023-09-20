import { publicProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";
import { z } from 'zod';
import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from 'mysql2/promise';
import * as schema from '@/db/schema';

const connection = await mysql.createConnection({
    uri: process.env.DATABASE_URL
})
const db = drizzle(connection, { schema, mode: 'planetscale' });
migrate(db, { migrationsFolder: "drizzle" });

export const controlsRouter = router({
    list: publicProcedure.query(async () => {
        return await db.query.controls.findMany();
    }),
    addControl: publicProcedure.input(z.string()).mutation(async (opts) => {
        return await db.insert(schema.controls).values({
            name: opts.input,
            dateUploaded: new Date()
        })
    })
})