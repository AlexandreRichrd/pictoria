<template>
    <div id="modale-bg" @click.self="closeModale">
        <div class="modale">
            <div>
                <div class="croix">
                    <router-link to="/">X</router-link>
                </div>
                <h1>Inscription</h1>
            </div>
            <connection-form />
        </div>
    </div>
</template>

<script lang="ts" setup>
import router from '../../router';
import ConnectionForm from './ConnectionForm.vue';

const closeModale = () => {
    router.push('/')
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
        height:60%;
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