
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
export async function GET(req, { params }) {
  try {
    const { id } = params;

    if (!id || typeof id !== "string") {
      return NextResponse.json({ message: "Invalid country ID" }, { status: 400 });
    }

    const country = await prisma.country.findUnique({
      where: { id },
      include: {
        hotels: {
          include: { amenities: true },
        },
        aboutCountries: true,
        countryImages: true,
        popularPlaces: { include: { images: true } },
      },
    });

    if (!country) {
      return NextResponse.json({ message: "Country not found" }, { status: 404 });
    }

    return NextResponse.json(country);
  } catch (error) {
    console.error("❌ Error Fetching Country:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
