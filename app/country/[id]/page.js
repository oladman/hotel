import CountryData from "@/components/CountryData/CountryData";



async function getCountrybyID(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/country/${id}`, {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Country");
    }
    return await res.json();
  } catch (error) {
    console.log("Error fetching country:", error);
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
