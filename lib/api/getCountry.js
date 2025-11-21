export const getCountry = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/country`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch countries");

    const contentType = res.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      return res.json();
    }

    throw new Error("Invalid response format");
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};
