import { db } from "../lib/db";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserByEmail = async (email) => {
    try{
        const user = prisma.user.findUnique({
            where: {email}
        })
        return user

    } catch {
        return null;
    }

}

export const getUserById = async (id) => {
    try{
        const user = prisma.user.findUnique({
            where: {id }
        })
        return user

    } catch {
        return null;
    }

}