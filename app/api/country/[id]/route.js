import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const id = params.id; // ✅ UUID is a string — no parseInt()

    if (!id || typeof id !== "string") {
      return NextResponse.json({ message: "Invalid country ID" }, { status: 400 });
    }

    const country = await prisma.country.findUnique({
      where: { id }, // ✅ UUID string
      include: {
        hotels: {
          include: {
            amenities: true,
          },
        },
        aboutCountries: true,
        imageContents: true,
        popularPlaces: {
          include: {
            images: true,
          },
        },
      },
    });

    if (!country) {
      return NextResponse.json({ message: "Country not found" }, { status: 404 });
    }

    return NextResponse.json(country);
  } catch (error) {
    console.error("❌ Error Fetching Country:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
