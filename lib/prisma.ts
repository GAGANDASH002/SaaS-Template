import { PrismaClient } from "@prisma/client";


const prismaClientSinglton = () => {
    return new PrismaClient();
}

type prismaClientSinglton = ReturnType<typeof prismaClientSinglton>;

// Checks if there exists a prior db connection or not
const globalForPrisma = globalThis as unknown as { prisma : PrismaClient | undefined };

// if connection exists then use that connection or create a new one 
const prisma = globalForPrisma.prisma ?? prismaClientSinglton();

export default prisma;

// if env is not production env
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
