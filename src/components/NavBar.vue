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
    {route: "/o-mnie", value: "O mnie"},
    {route: "/oferta", value: "Oferta"},
    {route: "/jak-pracuje", value: "Jak pracuję"},
    {route: "/zabiegi", value: "Zabiegi"},
    {route: "/cennik", value: "Cennik"},
    {route: "/kontakt", value: "Kontakt"}
]
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 16px;
    padding-right: 20px;
}
</style>