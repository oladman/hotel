import CountryData from "/components/CountryData/CountryData";

async function getCountrybyID(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/country/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch country");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching country:", error);
    return null;
  }
}

export default async function Page({ params: { id } }) {
  const getCountryData = await getCountrybyID(id);

  return (
    <>
      <CountryData getCountryData={getCountryData} />
    </>
  );
}
