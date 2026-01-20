import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const destination = searchParams.get("name");

    if (!destination) {
      return NextResponse.json({ message: "Missing destination" }, { status: 400 });
    }

    const hotels = await prisma.hotel.findMany({
      where: {
        name: { contains: destination, mode: "insensitive" },
      },
      include: {
        amenities: true,
        reviews: true,
        hotelImages: true,
        promotions: true,
        popularPlaces: true,
        country: true,
        roomTypes: {
          include: {
            roomTypeImages: true,
            extras: true,
            taxes: true,
          },
        },
      },
    });

    if (!hotels.length) {
      return NextResponse.json({ message: "No hotels found" }, { status: 404 });
    }

    return NextResponse.json(hotels, { status: 200 });
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
