<template>
    <div class="formulaire">
        <form @submit="handleSubmit">
            <div class="champ">
                <label for="username">Nom d'utilisateur</label>
                <input type="text" name="username" id="username" v-model="credentials.username" />
            </div>
            <div class="champ">
                <label for="password">Mot de passe</label>
                <input type="password" name="password" id="password" v-model="credentials.password" />
            </div>
            
            <button type="submit">Inscription</button>
        </form>
        <router-link to="/connection" class="inscription">Déjà inscrit ?</router-link>
    </div>
</template>
  
<script lang="ts" setup>
    import { reactive } from 'vue';

    const emit = defineEmits(['sendData']);
  
    const credentials:any  = reactive({
        username: '',
        password: ''
    });
  
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        emit('sendData', credentials);
    };
</script>
  

<style lang="scss" scoped>
    .formulaire{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        form{
            height: 80%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
            .champs{
                width: 80%;
                display: flex;
                justify-content: space-between;
                gap: 2rem;
                .champ{
                    width: 100%;
                }
            }
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
</style>