<script setup lang="ts">
const { getProducts, products } = useShopware();

onMounted(async () => {
  await getProducts();
});
</script>

<template>
  <h1 class="flex justify-center mt-5 text-xl font-semibold">Welcome g</h1>

  <div class="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <nuxt-link
      v-for="product in products"
      :key="product.productNumber"
      :to="`/details/${product.productNumber}`"
      class="border rounded shadow p-4 text-center hover:shadow-lg cursor-pointer transition hover:scale-105 hover:border-gray-700"
    >
      <h1 class="text-lg font-regular">
        {{ product.productNumber }}
      </h1>
      <h2 class="text-xl font-bold">
        {{ product.translated.name || "No name" }}
      </h2>
      <p>{{ product.translated.description || "No description" }}</p>
      <p>${{ product.calculatedPrice.unitPrice || "loading" }}</p>

      <img
        :src="product.cover?.media?.url || '/placeholder.jpg'"
        class="w-auto h-40 object-fill rounded m-auto"
      />
    </nuxt-link>
  </div>
</template>
