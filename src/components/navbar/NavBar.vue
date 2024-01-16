<template>
    <header>
        <div class="empty"></div>
        <MainLogo />
        <MainButton size="s" to="connection" v-if="!userStore.getters.getUserIsConnected(useUserStore)">S'identifier</MainButton>
        <MainButton size="s" to="profile" v-if="userStore.getters.getUserIsConnected(useUserStore)">Espace membre</MainButton>
    </header>
</template>

<script lang="ts" setup>
import MainLogo from '../logo/MainLogo.vue';
import MainButton from '../button/MainButton.vue';
import { useUserStore } from '../../store/user';

const userStore = useUserStore();
console.log(userStore.getters.getUserIsConnected);
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .empty{
        width: 9rem;
    }
}
</style>
```