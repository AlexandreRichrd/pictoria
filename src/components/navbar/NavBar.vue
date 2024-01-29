<template>
    <header>
        <div class="empty"></div>
        <MainLogo />
        <MainButton size="s" to="connection" v-if="!isAuthenticated">S'identifier</MainButton>
        <MainDropdown v-if="isAuthenticated" />
    </header>
</template>

<script lang="ts" setup>
import MainLogo from '../logo/MainLogo.vue';
import MainButton from '../button/MainButton.vue';
import MainDropdown from '../dropdown/MainDropdown.vue';
import { computed } from 'vue';
import { useCookies } from '@vueuse/integrations/useCookies';

const cookies = useCookies();



// Accès direct au getter, qui est réactif
const isAuthenticated = computed(() => cookies.get('jwt-token') !== undefined)


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
