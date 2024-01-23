<template>
    <router-link :to="'/contest'" id="contest-list-item">
        <h2>{{ props.title }}</h2>
        <p>finit le : {{ props.endingDate }}</p>
        <p>créé le: {{ props.creationDate }}</p>
        <p :class="props.status == 'pas commence' ? 'pending' : props.status == 'en cours' ? 'open' : 'closed'">{{ props.status }}</p>
    </router-link>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: String,
    endingDate: String,
    creationDate: String,
    status: String
})
</script>

<style lang="scss" scoped>
#contest-list-item{
    width: 80%;
    height: 10rem;
    background-color: #FFF;
    border: 1px solid var(--grey);
    border-radius: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: var(--black);
    .open{
        background-color: var(--validate);
        color: #FFF;
        padding: 1rem;
        border-radius: 1rem;
    }
    .closed{
        background-color: var(--alert);
        color: #FFF;
        padding: 1rem;
        border-radius: 1rem;
    }
    .pending{
        background-color: var(--pending);
        color: #FFF;
        padding: 1rem;
        border-radius: 1rem;
    }
}

</style>