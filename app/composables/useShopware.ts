import { ref } from "vue";

export const useShopware = () => {
  const products = ref<any[]>([]);

  const apiUrl = import.meta.env.VITE_SHOPWARE_API_URL;
  const accessKey = import.meta.env.VITE_SHOPWARE_ACCESS_KEY;

  async function getProducts(limit = 20, page = 1) {
    const res = await fetch(`${apiUrl}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "sw-access-key": accessKey,
      },
      body: JSON.stringify({ limit, page }),
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    const data = await res.json();
    console.log(data);
    products.value = data?.elements || [];
  }

  return { getProducts, products };
};
