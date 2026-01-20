import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { destination, checkIn, checkOut, guests } = body;

    if (!destination || !checkIn || !checkOut || !guests) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    // 🔍 Find matching hotels
    const hotels = await prisma.hotel.findMany({
      where: {
        name: { contains: destination, mode: "insensitive" },
      },
      select: { id: true },
    });

    if (!hotels.length) {
      return new Response(
        JSON.stringify({ message: "No hotels found" }),
        { status: 404 }
      );
    }

    const hotelIds = hotels.map((h) => h.id);

    // 🏨 Fetch room types + hotel relations
    const roomTypes = await prisma.roomType.findMany({
      where: {
        hotelId: { in: hotelIds },
        maxOccupancy: { gte: Number(guests) },
        availableCount: { gt: 0 },
      },
      include: {
        hotel: true,
        roomTypeImages: true,
      },
    });

    return new Response(JSON.stringify(roomTypes), { status: 200 });
  } catch (error) {
    console.error("Search Error:", error);
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
