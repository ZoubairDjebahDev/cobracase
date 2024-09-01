import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisama: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisama) {
    global.cachedPrisama = new PrismaClient();
  }

  prisma = global.cachedPrisama;
}

export const db = prisma;
