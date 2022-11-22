<script setup>
import { useUserstore } from "../../store/users.js";
import UserTable from "../../components/UserTable.vue";
import { onMounted, ref } from "vue";

const userStore = useUserstore();
const users = ref(userStore.getAllfromState());

await userStore.getAllfromDB();

console.log("log", users);
</script>

<template>
    <UserTable :users="users" />
</template>
