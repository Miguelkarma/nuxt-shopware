export const getSingleProduct = async (id: string) => {
  const apiUrl = import.meta.env.VITE_SHOPWARE_API_URL;
  const accessKey = import.meta.env.VITE_SHOPWARE_ACCESS_KEY;

  const { data, error } = await useFetch(`${apiUrl}/product/${id}`, {
    headers: {
      "sw-acess-key": accessKey,
      "Content-Type": "application/json",
    },
  });
  if (error.value) {
    console.error("error fetching product:", error.value);
    return null;
  }
  return data.value;
};
