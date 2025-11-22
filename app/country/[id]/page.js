
import CountryData from "@/components/CountryData/CountryData";

const prisma = new PrismaClient();

async function getCountrybyID(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/country/${id}`, {
      cache: "no-store"
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
