import prisma from '../prisma';

export const getRandomHotels = async () => {
  try {
    const hotels = await prisma.hotel.findMany({
      take: 100, // Fetch a reasonable number of hotels to randomize from
      orderBy: [
        {
          createdAt: 'desc', // Prioritize latest hotels
        },
        {
          rating: 'desc', // Then highest-rated
        },
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

    // Shuffle the hotels array and select the first 15
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

    return formattedHotels;
  } catch (error) {
    console.error('Error fetching random hotels:', error);
    return []; // Return an empty array on error to prevent .map() issues
  }
};
