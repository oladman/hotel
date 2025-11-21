import CountryData from "/components/CountryData/CountryData"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getCountrybyID(id) {
  try {
    // Use Prisma directly to avoid undefined API URL at build time
    const country = await prisma.country.findUnique({
      where: { id },
      include: {
        hotels: {
          include: {
            amenities: true,
          },
        },
        aboutCountries: true,
        imageContents: true,
        popularPlaces: {
          include: {
            images: true,
          },
        },
      },
    });

    if (!country) {
      throw new Error("Country not found");
    }

    return country;
  } catch (error) {
    console.log("Error fetching country:", error);
    return null;
  }
}


async function page({ params: { id } }) {
  const getCountryData = await getCountrybyID(id);

  return (
    <>
     <CountryData getCountryData={getCountryData}/>
    </>
  );
}

export default page;
