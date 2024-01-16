<template>
    <div id="modale-bg">
        <div class="modale">
            <div>
                <div class="croix">
                    <router-link to="/">X</router-link>
                </div>
                <h1>Connexion</h1>
            </div>
            <form @submit="handleSubmit">
                <div class="champ">
                    <label for="username">Nom d'utilisateur</label>
                    <input type="text" name="username" id="username" placeholder="Nom d'utilisateur" v-model="username">
                </div>
                <div class="champ">
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" id="password" placeholder="Mot de passe" v-model="password">
                </div>
                <button>Connexion</button>
            </form>
            <router-link to="/inscription" class="inscription">Pas encore inscrit ?</router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost/picock/', {
        username: username.value,
        password: password.value
    }).then((response) => {
        alert(response.data.message)
    }).catch((error) => {
        alert(error)
    })
}


</script>

<style lang="scss" scoped>
#modale-bg{
    position:absolute;
    height: 100vh;
    width: 100vw;
    background-color: #0000006e;
    display: flex;
    justify-content: center;
    align-items: center;
    .modale{
        height:80%;
        width: 65%;
        border-radius: 1rem;
        background-color: #FFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            .croix{
                a{
                    cursor: pointer;
                    text-decoration: none;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--black);
                    display: flex;
                    justify-content: flex-end;
                    padding: 1rem;
                }
            }
            h1{
                text-align: center;
                font-size: 2.5rem;
            }
        }
        form{
            height: 80%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
            .champ{
                width: 80%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                input{
                    width: 100%;
                    height: 3rem;
                    background-color: #FFF;
                    border-radius: 3rem;
                    border: 1px solid var(--grey);
                    padding: 0 1rem;
                    font-size: 1.2rem;
                    &:focus{
                        outline: none;
                        border: 1px solid var(--grey);
                    }
                }
            }
            button{
                width: 80%;
                height: 3.5rem;
                background-color: var(--primary);
                border-radius: 3rem;
                border: none;
                color: #FFF;
                font-size: 1.2rem;
                cursor: pointer;
                &:hover{
                    background-color: var(--primary-hover);
                }
            }
        }
        .inscription{
            color: var(--primary);
            text-align: center;
        }
    }
}
</style>