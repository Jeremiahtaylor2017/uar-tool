import { publicProcedure, router } from "../trpc";
import { controlsRouter } from "./controls";

export const appRouter = router({
    healthcheck: publicProcedure.query(async () => 'yay!'),
    controls: controlsRouter
})

export type AppRouter = typeof appRouter;