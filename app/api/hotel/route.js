import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ Create new hotel
export async function POST(request) {
  try {
    const data = await request.json();
    const { Country, Hname, Haddress, Hdescription, image } = data;

    const newHotel = await prisma.hotel.create({
      data: {
        Country,
        Hname,
        Haddress,
        Hdescription,
        image,
      },
    });

    return NextResponse.json(newHotel);
  } catch (error) {
    console.error("Error Creating Hotel:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// ✅ Fetch all or filter by name
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");

    let hotels;

    if (name) {
      // 🔍 Search hotels by partial match in Hname (case-insensitive)
      hotels = await prisma.hotel.findMany({
        where: {
          Hname: {
            contains: name,
            mode: "insensitive",
          },
        },
      });
    } else {
      // Return all hotels if no search term
      hotels = await prisma.hotel.findMany();
    }

    return NextResponse.json(hotels);
  } catch (error) {
    console.error("Error Fetching Hotels:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
