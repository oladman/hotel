import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const id = params.id; // ✅ Hotel ID from URL (string)
    if (!id) {
      return NextResponse.json({ message: "Hotel ID is required" }, { status: 400 });
    }

const hotel = await prisma.hotel.findUnique({
  where: { id },
  include: {
    country: {
      select: {
        countryName: true, // ✅ only fetch this field
      },
    },
    roomTypes: {
      include: {
        roomTypeImages: true,
        rooms: true,
        extras: true,
        taxes: true,
      },
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
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
