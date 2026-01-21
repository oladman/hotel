// /app/api/hotel/[id]/route.js
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    if (!id || typeof id !== "string") {
      return NextResponse.json({ message: "Hotel ID is required" }, { status: 400 });
    }

    const hotel = await prisma.hotel.findUnique({
      where: { id },
      include: {
        country: { select: { name: true } },
        roomTypes: {
          select: {
            id: true,
            name: true,
            description: true,
            sizeSqFt: true,
            maxOccupancy: true,
            beds: true,
            bathrooms: true,
            basePrice: true,
            totalCount: true,
            availableCount: true,
            hotelId: true,
            createdAt: true,
            updatedAt: true,
            roomTypeImages: true,
            rooms: true,
            extras: true,
            taxes: true,
          },
        },
        hotelImages: true,
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
