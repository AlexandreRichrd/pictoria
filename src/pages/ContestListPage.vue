<template>
    <div id="contest-list-page">
        <NavBarNoBtn />
        <h1>Liste des concours</h1>
        <div class="contest-list" v-for="contest in contests">
            <ContestListItem :title="contest.theme" :ending-date="contest.dateFin" :creation-date="contest.dateCreation" :status="contest.etat" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ContestListItem from '../components/contest/ContestListItem.vue'    
import NavBarNoBtn from '../components/navbar/NavBarNoBtn.vue';
import { IContest } from '../interfaces/contest.interface';
import { useContestStore } from '../store/contest.store';
import { onMounted, ref } from 'vue';

const contestStore = useContestStore();
contestStore.actions.fetchAllContests(contestStore.state);

const contests = ref<IContest[]>([])

onMounted(async () => {
    await contestStore.actions.fetchAllContests(contestStore.state);
    contests.value = contestStore.getters.getContests(contestStore.state);
    console.log(contests.value)
})

</script>

<style lang="scss" scoped>
#contest-list-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    h1{
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 3em;
    }
    .contest-list{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
