<script setup>
import { ref } from "vue";

import { useTicketStore } from "../../store/tickets";
import Ticket from "../../components/Ticket.vue";

const ticketStore = useTicketStore();

const ticket = ref({
    titel: "",
    content: "",
});

const createTicket = () => {
    console.log("create");
    // ticketStore.addToState(category.value);
};
</script>

<template>
    <h1>Create Ticket</h1>
    <Ticket :ticket="ticket" @submit="createTicket" />
</template>
