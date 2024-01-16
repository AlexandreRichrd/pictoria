<template>
    <header>
        <div class="empty"></div>
        <MainLogo />
        <MainButton size="s" to="connection">S'identifier</MainButton>
    </header>
</template>

<script lang="ts" setup>
import MainLogo from '../logo/MainLogo.vue';
import MainButton from '../button/MainButton.vue';
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