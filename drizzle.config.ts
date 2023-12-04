import type { Config } from "drizzle-kit";
import { env } from "./env.mjs";

export default {
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL || "",
  },
} satisfies Config;
