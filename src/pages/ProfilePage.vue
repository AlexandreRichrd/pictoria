<template>
    <div id="profile-page">
        <div id="main-container">
            <div class="banner"></div>
            <div class="profile-container">
                <img src="../assets/images/pp/Lenny.jpeg" alt="">
                <div class="profile-info">
                    <h1>Lenny Barre</h1>
                    <p>Club prout</p>
                </div>
            </div>
        </div>
        <div id="tabs"></div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#profile-page{
    #main-container{
        .banner{
            position:absolute;
            width: 100%;
            height: 30vh;
            background-image: url("../assets/images/pp/banner.jpg");
            background-size: cover;
            background-position: center;
            z-index: 1;
        }
        .profile-container{
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
            padding-top: 18vh;
            img{
                z-index: 3;
                border-radius:50%;
                height: 15rem;
            }
        }
    }
}
</style>