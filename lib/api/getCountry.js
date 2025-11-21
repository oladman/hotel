import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCountry = async () => {
  try {
    // For server-side usage, directly use Prisma instead of fetch
    // This avoids issues with undefined API URLs at build time
    const countries = await prisma.country.findMany({
      include: {
        hotels: true,
      },
    });

    return countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};
