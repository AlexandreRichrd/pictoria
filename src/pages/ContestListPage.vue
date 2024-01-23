<template>
    <div id="contest-list-page">
        <NavBarNoBtn />
        <h1>Liste des concours</h1>
        <ContestListItem />
    </div>
</template>

<script lang="ts" setup>
import ContestListItem from '../components/contest/ContestListItem.vue'    
import NavBarNoBtn from '../components/navbar/NavBarNoBtn.vue';
</script>

<style lang="scss" scoped>
#contest-list-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 3em;
    }
}
</style>
