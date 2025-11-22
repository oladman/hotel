export const dynamic = "force-dynamic";

import HotelData from "/components/HotelData/HotelData"; // ✅ Capitalized import
async function getHotelByID(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hotel/${id}`, {
      cache: "no-store", // ✅ Correct option
    });

    if (!res.ok) {
      throw new Error("Failed to fetch hotel");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching hotel:", error);
    return null;
  }
}

export default async function Page({ params: { id } }) {
  const hotel = await getHotelByID(id); // ✅ Correct function call

  if (!hotel) {
    return <div className="text-center text-red-500">Hotel not found.</div>;
  }

  return (
    <div >
      <HotelData hotel={hotel} /> {/* ✅ Correct prop name and component */}
    </div>
  );
}
