
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
          include: {
            amenities: true,
            roomTypes: {
              select: {
                beds: true,
                bathrooms: true,
                maxOccupancy: true,
              },
            },
          },
        },
        aboutCountries: true,
        countryImages: true,
        popularPlaces: { include: { images: true } },
      },
    });

    if (!country) {
      return NextResponse.json({ message: "Country not found" }, { status: 404 });
    }

    const hotelsWithAggregatedRoomData = country.hotels.map((hotel) => {
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

      const { roomTypes, ...hotelData } = hotel; // Exclude roomTypes from the final hotel object

      return {
        ...hotelData,
        maxBeds,
        maxBathrooms,
        maxGuests,
      };
    });

    return NextResponse.json({ ...country, hotels: hotelsWithAggregatedRoomData });
  } catch (error) {
    console.error("❌ Error Fetching Country:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
