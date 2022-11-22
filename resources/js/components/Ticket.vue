<template>
    <div>
        <table>
            <tr>
                <th>titel</th>
                <th>content</th>
            </tr>
            <tr>
                <td>
                    <input
                        type="text"
                        placeholder="titel"
                        v-model="ticket.titel"
                    />
                </td>
                <td>
                    <input
                        type="text"
                        placeholder="content"
                        v-model="ticket.content"
                    />
                </td>
            </tr>
        </table>

        <td>
            <button
                type="submit"
                class="btn btn-outline-warning"
                @click="$emit('submit')"
            >
                submit
            </button>
        </td>
    </div>
</template>

<script setup>
const props = defineProps({
    ticket: Object,
});
</script>
