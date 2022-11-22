import { computed, ref } from "vue";
import axios from "axios";

const state = ref({});

export const useCategoryStore = () => {
    async function getAllfromDB() {
        const { data } = await axios.get("/api/categories");
        // console.log(data);
        state.value = data.data;
    }

    const getAllfromState = () => {
        // console.log(state.value);
        return computed(() => {
            return state.value;
        });
    };

    async function getByID(id) {
        const { data } = await axios.get("/api/categories/" + id);
        // console.log("data", data);
        return data;
    }

    async function addToState(payload) {
        const { data } = await axios.post("api/categories/create", payload);
    }

    async function update(category) {
        const { data } = await axios.post(
            `api/categories/${category.id}`,
            category
        );
        return data.data;
    }

    async function deleteFromDB(category) {
        console.log("delete store", state.value);
        const { data } = await axios.delete("api/categories/" + category);

        return state.value;
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
