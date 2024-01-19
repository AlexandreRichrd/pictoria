<template>
    <div id="contest-page">
        <NavBarNoBtn />
        <div class="banner"></div>
        <div  class="title-and-btns">
            <h1>Concours du prout</h1>
            <div class="btns">
                <MainButton size="m">Participer</MainButton> 
                <SecondaryButton size="m">Voir les participations</SecondaryButton>
            </div>
        </div>
        <div class="participants">
            <div class="images">
                <img src="../assets/images/contest/challengers/1.jpeg" alt="">
                <img src="../assets/images/contest/challengers/2.jpeg" alt="">
                <img src="../assets/images/contest/challengers/3.jpeg" alt="">
                <img src="../assets/images/contest/challengers/4.jpeg" alt="">
                <img src="../assets/images/contest/challengers/5.jpeg" alt="">
                <img src="../assets/images/contest/challengers/6.jpeg" alt="">
            </div>
            <p>+13 participants</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import NavBarNoBtn from '../components/navbar/NavBarNoBtn.vue';
import MainButton from '../components/button/MainButton.vue';
import SecondaryButton from '../components/button/SecondaryButton.vue';
</script>

<style scoped lang="scss">
#contest-page {
    .banner {
        width: 100%;
        height: 20rem;
        background-image: url('../assets/images/contest/contest-banner.jpg');
        background-position: center;
        background-size: cover;
    }
    .title-and-btns {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0 6rem;
        height: 7rem;
        h1 {
            font-size: 3em;
        }
        .btns {
            display: flex;
            gap: 2rem;
        }
    }
    .participants {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 6rem;
        .images {
            display: flex;
            img {
                width: 2rem;
                height: 2rem;
                object-fit: cover;
                border-radius: 50%;
                margin-left: -1rem;
                cursor: pointer;
                &:first-child {
                    margin-left: 0;
                }
            }

        }
    }
}
</style>