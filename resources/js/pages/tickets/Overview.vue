<template>
    <h1>Overview Tickets</h1>
    <TicketTable :tickets="tickets" :users="users" />
</template>

<script setup>
import { ref } from "vue";
import TicketTable from "../../components/TicketTable.vue";
import { useTicketStore } from "../../store/tickets";
import { useUserstore } from "../../store/users";

const ticketStore = useTicketStore();
const userStore = useUserstore();

const tickets = ref(ticketStore.getAllfromState());
const users = ref(userStore.getAllfromState());

await userStore.getAllfromDB();
await ticketStore.getAllfromDB();
</script>
