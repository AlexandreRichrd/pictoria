<template>
    <div id="home-page">
        <NavBar />
        <div class="main-container">
            <div class="main-text">
                <h1>Dessinez, Participez, Brillez</h1>
                <h1>Votre Créativité en Compétition</h1>
            </div>
            <p class="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <MainButton size="l">Rejoindre la compétition</MainButton>
        </div>
        <RouterView />
    </div>
</template>

<script lang="ts" setup>
import NavBar from '../components/navbar/NavBar.vue';
import MainButton from '../components/button/MainButton.vue';
</script>

<style lang="scss" scoped>
#home-page{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .main-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        .main-text{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            h1{
                font-size: 3em;
                font-weight: 700;
                color: var(--black);
                &:nth-child(2){
                    margin-top: 1rem;
                }
            }
        }
        .slogan{
            width: 75%;
            font-size: 1.5em;
            font-weight: 700;
            color: var(--black);
            margin-top: 2rem;
            text-align: center;
        }
    }
}
</style>