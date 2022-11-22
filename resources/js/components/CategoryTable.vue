<template>
    <h1>Categories</h1>
    <table style="width: 100%">
        <thead>
            <tr>
                <td>id</td>
                <td>category</td>
                <td>date created</td>
                <td>change name</td>
                <td>delete</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="category in categories" key="id">
                <td>{{ category.id }}</td>
                <td>{{ category.category }}</td>
                <td>{{ category.created_at }}</td>
                <td>
                    <router-link
                        class="routerLink"
                        :to="{
                            name: 'EditCategory',
                            params: { id: category.id },
                        }"
                        >Edit</router-link
                    >
                </td>
                <td>
                    <a class="routerLink" @click="deleteFromDB(category.id)"
                        >Delete</a
                    >
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { useCategoryStore } from "../store/categories";
const categoryStore = useCategoryStore();

const props = defineProps({
    categories: Array,
});

const deleteFromDB = (categoryID) => {
    categoryStore.deleteFromDB(categoryID);
};
</script>

<style>
table,
tr,
td {
    border: 1px solid black;
}
</style>
