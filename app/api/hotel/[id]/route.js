import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Reuse Prisma client globally (important for serverless)
let prisma;
if (!global.prisma) {
  global.prisma = new PrismaClient();
}
prisma = global.prisma;

export async function GET(req, { params }) {
  try {
    const id = params.id;

    if (!id || typeof id !== "string") {
      return NextResponse.json({ message: "Hotel ID is required" }, { status: 400 });
    }

    const hotel = await prisma.hotel.findUnique({
      where: { id },
      include: {
        country: { select: { countryName: true } },
        roomTypes: {
          include: { roomTypeImages: true, rooms: true, extras: true, taxes: true },
        },
        images: true,
        reviews: true,
        amenities: true,
        bookings: true,
        promotions: true,
        popularPlaces: true,
      },
    });

    if (!hotel) {
      return NextResponse.json({ message: "Hotel not found" }, { status: 404 });
    }

    return NextResponse.json(hotel);
  } catch (error) {
    console.error("❌ Error fetching hotel:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
