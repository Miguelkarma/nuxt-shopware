<script setup lang="ts">
const { getProducts, products } = useShopware();

onMounted(async () => {
  await getProducts();
});
</script>

<template>
  <div class="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div
      v-for="product in products"
      :key="product.id"
      class="border rounded shadow p-4 text-center"
    >
      <h1 class="text-lg font-regular">
        {{ product.productNumber }}
      </h1>
      <h2 class="text-xl font-bold">
        {{ product.translated.name || "No name" }}
      </h2>
      <p>{{ product.translated.description || "No description" }}</p>

      <img
        :src="product.cover?.media?.url || '/placeholder.jpg'"
        class="w-auto h-40 object-fill rounded m-auto"
      />
    </div>
  </div>
</template>
