<template>
    <div>
        <h1>Edit ticket {{ ticket.id }}</h1>
        <textarea id="textbox" v-model="ticket.details"></textarea>
        <br />
        <button type="submit" @click="submitEditing()">Submit</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useTicketStore } from "../../store/tickets";

const ticketStore = useTicketStore();

const route = useRoute();

const ticket = ref(await ticketStore.getByID(route.params.id));

const submitEditing = () => {
    console.log("submit");
    console.log(ticket.id);
    console.log(ticket.details);
};
</script>

<style>
#textbox {
    min-width: 300px;
    min-height: 200px;
}
</style>
