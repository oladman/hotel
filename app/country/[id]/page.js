import CountryData from "/components/CountryData"



async function getCountrybyID(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/country/${id}`, {
      catch: "no-store",
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
