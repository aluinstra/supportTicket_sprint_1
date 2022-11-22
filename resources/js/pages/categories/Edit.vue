<script setup>
import { ref } from "vue";

import { useCategoryStore } from "../../store/categories.js";
import { useRoute } from "vue-router";

const categoryStore = useCategoryStore();

const route = useRoute();

const category = ref(await categoryStore.getByID(route.params.id));

const submitEditing = () => {
    console.log("edit");
    categoryStore.update(category.value);
};
</script>

<template>
    <div>
        <h1>Edit</h1>
        <input type="text" v-model="category.category" />
        <button type="submit" @click="submitEditing()">Submit</button>
    </div>
</template>
