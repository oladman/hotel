import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const destination = searchParams.get("name");

    if (!destination) {
      return new Response(JSON.stringify({ message: "Missing destination" }), { status: 400 });
    }

    const hotels = await prisma.hotel.findMany({
      where: {
        Hname: { contains: destination, mode: "insensitive" },
      },
      include: {
        amenities: true,
        reviews: true,
        images: true,
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
      return new Response(JSON.stringify({ message: "No hotels found" }), { status: 404 });
    }

    return new Response(JSON.stringify(hotels), { status: 200 });
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}
