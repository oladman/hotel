"use server";
import * as z from "zod";
import { LoginSchema } from "../Schemas";
import { signIn } from "../auth";
import {DEFAULT_LOGIN_REDIRECT} from "../routes";
import { AuthError } from "next-auth";
 
export async function login(values) {
  console.log("Login Values", values);
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "invalid fields!" };
  }
  const { email, password } = validatedFields.data

  try{
    await signIn("credentials", {
      email, 
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    }) 
  } catch (error){
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
        return {error: "Invalid credentials!"}
      
        default:
          return {error: "Something went wrong!"}

      }
  }
  throw error;
  }
};