// @ts-check

const { z } = require('zod');

// This file is included in /next.config.js which ensures the app isn't built with invalid env vars
const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(['development', 'test', 'production'])
})

const env = envSchema.safeParse(process.env);

if (!env.success) {
    console.error(
        'Invalid envionment variables:',
        JSON.stringify(env.error.format(), null, 4)
    )
    process.exit(1);
}

module.exports.env = env.data;