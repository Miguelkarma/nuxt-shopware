const apiUrl = "http://shopware-laragon.test/store-api";
const accessKey = "SWSCUTBVY0POVTJHCNPJWLHGDQ";

import { ref } from "vue";

export const useShopware = () => {
  const products = ref<any[]>([]);

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
    products.value = data?.elements || [];
  }

  return { getProducts, products };
};
