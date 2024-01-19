<template>
    <router-link :to="props.to" :class="props.size" >
        <slot></slot>
    </router-link>
</template>

<script lang="ts" setup>
const props = defineProps({
    to: {
        type: String,
        default: '#'
    },
    size: {
        type: String,
        default: 'm'
    }
})
</script>

<style lang="scss" scoped>
a{
    background-color:#FFF;
    
    color: var(--primary);
    text-decoration: none;
    border: 1px solid var(--primary);
    &:hover{
        background-color: var(--primary-hover);
    }
}

.s{
    padding: 0.8rem 2rem;
    border-radius: 1.5rem;
}

.m{
    padding: 1.2rem 2.5rem;
    border-radius: 4rem;
}

.l{
    padding: 1.5rem 3rem;
    border-radius: 3rem;
}
</style>
```