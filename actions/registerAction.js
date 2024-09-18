"use server";
import * as z from "zod";
import { RegisterSchema } from "../Schemas";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { getUserByEmail } from "../data/user";

const prisma = new PrismaClient();

export async function registerAction(values) {
  console.log("Register Values", values);
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "invalid fields!" };
  }
  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already in use!" };
  }
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User Created Successfully!" };
}
