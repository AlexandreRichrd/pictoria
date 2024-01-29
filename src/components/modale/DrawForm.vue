<template>
    <form @submit="handleSubmit">
        <h1>Dépôt de dessin</h1>
        <div class="commentaire-group">
            <label for="commentaire">Commentaire du dessin</label>
            <textarea name="" id="commentaire" cols="30" rows="10" v-model="commentaire"></textarea>
        </div>
        <div class="file-group">
            <label for="file">Fichier du dessin</label>
            <input type="file" name="" id="file" @change="dropFile">
        </div>
        <MainButton @click="handleSubmit">Envoyer</MainButton>
    </form>
</template>

<script lang="ts" setup>
import MainButton from '../button/MainButton.vue';
import { ref } from 'vue';
import type { IDrawBody } from '../../interfaces/draw.interface';
import { useDrawStore } from '../../store/draw.store';

const drawStore = useDrawStore();

const commentaire = ref('');
const file = ref<Blob>();

const dropFile = (e:any) => {
    e.preventDefault();
    console.log(e.target.files[0])
    // On convertit l'image en blob pour pouvoir l'envoyer au back
    file.value = new Blob([e.target.files[0]], {type: 'image/png'});
    console.log(file.value);
}

const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log('submit')
    if(!commentaire.value || !file.value) return console.log('error')
    const draw: IDrawBody = {
        numCompetiteur: 1,
        commentaire: commentaire.value,
        dateRemise: String(new Date()),
        numConcours: 1,
        leDessin: file.value
    }

    await drawStore.actions.submitDraw(draw);
}
</script>

<style lang="scss" scoped>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    .commentaire-group{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        label{
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        textarea{
            width: 100%;
            height: 10rem;
            border-radius: 1rem;
            border: 1px solid var(--black);
            padding: 1rem;
            font-size: 1.5rem;
            font-weight: 700;
        }
    }
    .file-group{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        label{
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        input{
            width: 100%;
            border-radius: 1rem;
            padding: 1rem;
            font-size: 1.5rem;
            font-weight: 700;
        }
    }
}
</style>