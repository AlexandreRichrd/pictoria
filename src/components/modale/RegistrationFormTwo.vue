<template>
    <div class="formulaire">
        <form @submit="handleSubmit">
            <div class="champs">
                <div class="champ">
                    <label for="name">Nom</label>
                    <input type="number" name="name" id="name" placeholder="Nom" v-model="credentials.street" />
                </div>
                <div class="champ">
                    <label for="firstname">Prénom</label>
                    <input type="text" name="firstname" id="firstname" placeholder="Prénom" v-model="credentials.address" />
                </div>
            </div>
            <div class="champ">
                <label for="birthDate">Date de naissance</label>
                <input type="date" name="birthDate" id="birthDate" v-model="credentials.city" />
            </div>
            <div class="champ">
                <label for="nationality">Nationalité</label>
                <input type="text" name="nationality" id="nationality" placeholder="Nationalité" v-model="credentials.country" />
            </div>
            
            <button type="submit">Inscription</button>
        </form>
        <router-link to="/connection" class="inscription">Déjà inscrit ?</router-link>
    </div>
</template>
  
<script lang="ts" setup>
    import { reactive } from 'vue';
    import { IInscriptionBodyTwo } from '../../interfaces/user.interface';

    const emit = defineEmits(['sendData']);
  
  
    const credentials: IInscriptionBodyTwo = reactive({
        street: 0,
        address: '',
        city: '',
        country: ''
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