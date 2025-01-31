import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
prisma
  .$connect()
  .then(() => {
    console.log("Connected to Prisma");
  })
  .catch((err) => {
    console.error("Error connecting to Prisma", err);
  });
