import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create a country
export async function POST(request) {
  try {
    const data = await request.json();
    const { countryName, countryAttach, countryDescription, code } = data;

    // Create new country
    const newCountry = await prisma.country.create({
      data: {
        countryName,
        countryAttach,
        countryDescription,
        code, // remember: code is required & unique in your model
      },
    });

    return NextResponse.json(newCountry, { status: 201 });
  } catch (error) {
    console.error("Error Adding Country:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

// Get all countries with their hotels
export async function GET() {
  try {
    const countries = await prisma.country.findMany({
      include: {
        hotels: true, // ✅ Correct relation name
      },
    });

    return NextResponse.json(countries, { status: 200 });
  } catch (error) {
    console.error("Error Fetching Countries:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
