import { createRouter, createWebHashHistory } from "vue-router";

import UsersOverview from "../pages/users/Overview.vue";

import TicketsOverview from "../pages/tickets/Overview.vue";
import CreateTicket from "../pages/tickets/Create.vue";
import TicketDetails from "../pages/tickets/TicketDetails.vue";

import CategoriesOverview from "../pages/categories/Overview.vue";
import CreateCategory from "../pages/categories/Create.vue";
import EditCategory from "../pages/categories/Edit.vue";

import ResponsesOverview from "../pages/responses/Overview.vue";

const routes = [
    { path: "/", component: TicketsOverview, name: "TicketsOverview" },
    {
        path: "/create-ticket",
        component: CreateTicket,
        name: "CreateTicket",
    },
    {
        path: "/ticket-details/:id",
        component: TicketDetails,
        name: "TicketDetails",
    },
    {
        path: "/categories",
        component: CategoriesOverview,
        name: "CategoriesOverview",
    },
    {
        path: "/create-category",
        component: CreateCategory,
        name: "CreateCategory",
    },
    {
        path: "/responses",
        component: ResponsesOverview,
        name: "ResponsesOverview",
    },
    {
        path: "/edit-category/:id",
        component: EditCategory,
        name: "EditCategory",
    },
    {
        path: "/users",
        component: UsersOverview,
        name: "UsersOverview",
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
