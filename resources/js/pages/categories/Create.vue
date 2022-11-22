<script setup>
import { ref } from "vue";

import { useCategoryStore } from "../../store/categories";

const categoryStore = useCategoryStore();

const category = ref({
    category: "",
});

const createCategory = () => {
    console.log("create");
    categoryStore.addToState(category.value);
};
</script>

<template>
    <h1>Create Category</h1>
    <input type="text" v-model="category.category" />
    <button type="submit" @click="createCategory()">Submit</button>
</template>
