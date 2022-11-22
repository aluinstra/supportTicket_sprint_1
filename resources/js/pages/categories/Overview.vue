<script setup>
import { useCategoryStore } from "../../store/categories.js";
import CategoryTable from "../../components/CategoryTable.vue";
import { onMounted, ref } from "vue";

const categoryStore = useCategoryStore();
const categories = ref(categoryStore.getAllfromState());

// onMounted(async () => {
await categoryStore.getAllfromDB();
// });
</script>

<template>
    <CategoryTable :categories="categories" />
</template>
