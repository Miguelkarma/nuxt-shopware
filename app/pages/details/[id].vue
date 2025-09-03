<script lang="ts" setup>
const { id } = useRoute().params;
</script>
<template>
  <div v-if="id">
    <h1 class="text-xl">{{ id }}</h1>
       <h1 class="text-xl">{{ getSingleProduct.tran }}</h1>
  </div>
</template>
