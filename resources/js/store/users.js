import { computed, ref } from "vue";
import axios from "axios";

const state = ref({});

export const useUserstore = () => {
    async function getAllfromDB() {
        const { data } = await axios.get("/api/users");
        console.log("getUsers", data.data);
        state.value = data.data;
    }

    const getAllfromState = () => {
        console.log("state", state.value);
        return computed(() => {
            return state.value;
        });
    };

    async function getByID(id) {
        const { data } = await axios.get("/api/users/" + id);
        // console.log("data", data);
        return data;
    }

    async function addToState(payload) {
        const { data } = await axios.post("api/users/create", payload);
    }

    async function update(ticket) {
        const { data } = await axios.post(`api/users/${user.id}`, ticket);

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
