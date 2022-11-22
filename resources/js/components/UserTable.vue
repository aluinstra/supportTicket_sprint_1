<template>
    <h1>users</h1>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" key="id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const props = defineProps({
    users: Array,
});
</script>

<style>
table,
tr,
td {
    border: 1px solid black;
}
</style>
