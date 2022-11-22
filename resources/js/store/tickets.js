import { computed, ref } from "vue";
import axios from "axios";

const state = ref({ tickets: [] });

export const useTicketStore = () => {
    async function getAllfromDB() {
        const { data } = await axios.get("/api/tickets");
        // console.log("get", data.data);
        state.value = data.data;
    }

    const getAllfromState = () => {
        // console.log("state", state.value);
        return computed(() => {
            return state.value;
        });
    };

    async function getByID(id) {
        const { data } = await axios.get("/api/tickets/" + id);
        // console.log("data", data);
        return data;
    }

    async function addToState(payload) {
        const { data } = await axios.post("api/tickets/create", payload);
    }

    async function update(ticket) {
        const { data } = await axios.post(`api/tickets/${ticket.id}`, ticket);

        return data.data;
    }

    async function deleteFromDB(id) {
        console.log("delete store", id);
    }
    return {
        getAllfromDB,
        getAllfromState,
        getByID,
        addToState,
        update,
        deleteFromDB,
    };
};
