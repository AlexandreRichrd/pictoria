<template>
    <div id="modale-bg" @click.self="closeModale">
        <div class="modale">
            <div>
                <div class="croix">
                    <router-link to="/">X</router-link>
                </div>
                <h1>Inscription</h1>
                <validation-circuit :active-tab="currentForm"/>
            </div>
            <registration-form-one v-if="currentForm == 1" @send-data="getFormOneData"/>
            <registration-form-two v-if="currentForm == 2" @send-data="getAddress"/>
            <registration-form-three v-if="currentForm == 3" @send-data="getFormThreeData"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import router from '../../router';
import RegistrationFormOne from './RegistrationFormOne.vue';
import RegistrationFormTwo from './RegistrationFormTwo.vue';
import RegistrationFormThree from './RegistrationFormThree.vue';
import ValidationCircuit from '../formulaire/ValidationCircuit.vue';
import { useUserStore } from '../../store/user.store';
import { ref } from 'vue';

const closeModale = () => {
    router.push('/')
}

const currentForm = ref(1)

const formData = ref(
    {
    name: '',
    firstname: '',
    birthDate: '',
    nationality: '',
    address: '',
    username: '',
    password: ''
})

const getFormOneData = (credential: any) => {
    console.log(credential)
    formData.value.name = credential.name
    formData.value.firstname = credential.firstname
    formData.value.birthDate = credential.birthDate
    formData.value.nationality = credential.nationality
    console.log(formData.value)
    currentForm.value++
}

const getAddress = (address: string) => {
    formData.value.address = address
    console.log(formData.value)
    currentForm.value++
}

const getFormThreeData = (credential: any) => {
    formData.value.username = credential.username
    formData.value.password = credential.password
    console.log(formData.value)
    useUserStore().actions.tryRegister(formData.value)
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
        height:90%;
        width: 40%;
        border-radius: 1rem;
        background-color: #FFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
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
        
    }
}
</style>