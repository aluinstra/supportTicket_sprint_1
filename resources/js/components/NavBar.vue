<template>
    <ul class="navBar">
        <li>
            <router-link :to="{ name: 'TicketsOverview' }"
                >Tickets Overview</router-link
            >
        </li>
        <li>
            <router-link :to="{ name: 'CategoriesOverview' }"
                >Category Overview</router-link
            >
        </li>
        <li>
            <router-link :to="{ name: 'CreateCategory' }"
                >Create Category</router-link
            >
        </li>
        <li>
            <router-link :to="{ name: 'UsersOverview' }"
                >Users Overview</router-link
            >
        </li>
    </ul>
</template>

<script setup></script>
