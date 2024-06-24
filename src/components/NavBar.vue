<template>
    <div class="nav">
        <div class="nav__item" v-for="link in LINKS" :key="link.value">
            <router-link :to="link.route">{{link.value}}</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">

const LINKS = [
    {route: "/", value: "Strona główna"},
    {route: "/about", value: "O mnie"},
    {route: "/", value: "Oferta"},
    {route: "/", value: "Jak pracuję"},
    {route: "/", value: "Zabiegi"},
    {route: "/", value: "Cennik"},
    {route: "/", value: "Kontakt"}
]
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 12px;
}
</style>