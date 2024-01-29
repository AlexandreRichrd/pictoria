<template>
    <nav @mouseenter="toggleMenu" @mouseleave="untoggleMenu">
        <button>
            utilisateur
        </button>
        <ul v-if="menuToggled">
            <li>Profile</li>
            <li>Déconnexion</li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const menuToggled = ref(false)

const toggleMenu  = () => {
    menuToggled.value = true
}

const untoggleMenu = () => {
    menuToggled.value = false
}


</script>

<style lang="scss" scoped>
nav{
    width: 10rem;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        min-width: 10rem;
        padding: 2rem;
        background-color: var(--primary);
        border: none;
        border-radius: 50px;
        color: #FFF;
        transition: border-radius 0.2s ease-in-out;
        &:hover{
            cursor:pointer;
            background-color: var(--primary-hover);
            border-radius: 10px 10px 0 0;
            
        }
    }
    ul{
        position: absolute;
        background-color: var(--primary-hover);
        list-style-type:none;
        width: 10rem;
        height: 6rem;
        border-radius: 0 0 10px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        animation: cascade 0.3s;
        li{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-top: 1px solid var(--black);
            &:last-child{

                border-radius: 0 0 10px 10px;
            }
            &:hover{
                cursor: pointer;
                background-color: var(--primary);
            }
        }
    }
}
</style>