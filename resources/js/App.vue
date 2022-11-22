<template>
    <div>
        <NavBar />
        <Suspense>
            <router-view></router-view>
        </Suspense>
    </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style>
.routerLink {
    --color: #0077ff;
    font-family: inherit;
    display: inline-block;
    width: 6em;
    height: 2.6em;
    line-height: 2.5em;
    overflow: hidden;
    margin: 20px;
    font-size: 17px;
    z-index: 1;
    color: var(--color);
    border: 2px solid var(--color);
    border-radius: 6px;
    position: relative;
}

.routerLink::before {
    position: absolute;
    content: "";
    background: var(--color);
    width: 150px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
}

.routerLink:hover {
    color: white;
}

.routerLink:before {
    top: 100%;
    left: 100%;
    transition: 0.3s all;
}

.routerLink:hover::before {
    top: -30px;
    left: -30px;
}

.navBar {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.navBar > li {
    display: inline;
    margin: 0px;
    padding: 5px;
    background-color: blue;
}

.navBar > li > a:link {
    text-decoration: none;
}

.navBar > li a:visited {
    color: white;
}

.navBar > li > a:hover {
    color: chartreuse;
}

.navBar > li:hover {
    background-color: black;
}
</style>
