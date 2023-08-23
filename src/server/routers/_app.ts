import { publicProcedure, router } from "../trpc";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from 'zod';
import { prisma } from '@/server/prisma';

export const appRouter = router({
    healthcheck: publicProcedure.query(async () => 'yay!')
})

export type AppRouter = typeof appRouter;