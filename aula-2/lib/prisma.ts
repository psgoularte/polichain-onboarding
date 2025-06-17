import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient({ lof: ["query"] });

if (process.env.MODE_ENV === "development") globalForPrisma.prisma = prisma;
