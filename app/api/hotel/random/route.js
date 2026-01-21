import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const hotels = await prisma.hotel.findMany({
      take: 100,
      orderBy: [
        { createdAt: "desc" },
        { rating: "desc" },
      ],
      include: {
        country: {
          select: {
            name: true,
          },
        },
        roomTypes: {
          select: {
            beds: true,
            bathrooms: true,
            maxOccupancy: true,
          },
        },
      },
    });

    // Shuffle hotels
    const shuffledHotels = hotels.sort(() => 0.5 - Math.random());
    const randomHotels = shuffledHotels.slice(0, 15);

    // Aggregate room-type data
    const formattedHotels = randomHotels.map((hotel) => {
      const maxBeds =
        hotel.roomTypes.length > 0
          ? Math.max(...hotel.roomTypes.map((r) => r.beds || 0))
          : 0;

      const maxBathrooms =
        hotel.roomTypes.length > 0
          ? Math.max(...hotel.roomTypes.map((r) => r.bathrooms || 0))
          : 0;

      const maxGuests =
        hotel.roomTypes.length > 0
          ? Math.max(...hotel.roomTypes.map((r) => r.maxOccupancy || 0))
          : 0;

      // Remove roomTypes from final payload
      const { roomTypes, ...hotelData } = hotel;

      return {
        ...hotelData,
        maxBeds,
        maxBathrooms,
        maxGuests,
      };
    });


    return NextResponse.json(formattedHotels);
  } catch (error) {
    console.error("Error fetching random hotels:", error);
    return NextResponse.json(
      { error: "Failed to fetch random hotels" },
      { status: 500 }
    );
  }
}