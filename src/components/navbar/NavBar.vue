<template>
    <header>
        <div class="empty"></div>
        <MainLogo />
        <MainButton size="s" to="connection" v-if="!isAuthenticated">S'identifier</MainButton>
        <MainButton size="s" to="profile" v-if="isAuthenticated">Espace membre</MainButton>
    </header>
</template>

<script lang="ts" setup>
import MainLogo from '../logo/MainLogo.vue';
import MainButton from '../button/MainButton.vue';
import { useAuthStore } from '../../store/auth.store';
import { computed } from 'vue';

const authStore = useAuthStore();

// Accès direct au getter, qui est réactif
const isAuthenticated = computed(() => authStore.getters.isAuthenticated(authStore));

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
```../../store/auth.store