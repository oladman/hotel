import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {

    const data = await request.json()
    console.log(data)

    const { name, password, email } = await request.json()

       const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      }


  });


    return NextResponse.json(newUser)

}