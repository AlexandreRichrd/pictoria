<template>
    <NavBarNoBtn />
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
        <div id="tabs">
            <nav>
                <ul>
                    <li>
                        <router-link to="/profile/gallery">Galerie personnelle</router-link>
                    </li>
                    <li>
                        <router-link to="/profile/concours">Concours</router-link>
                    </li>
                </ul>
            </nav>
            <RouterView />
        </div>
    </div>
</template>

<script lang="ts" setup>
import NavBarNoBtn from '../components/navbar/NavBarNoBtn.vue'
</script>

<style lang="scss" scoped>
#profile-page{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    #main-container{
        .banner{
            position:absolute;
            width: 100%;
            height: 35vh;
            background-image: url("../assets/images/pp/banner.jpg");
            background-size: cover;
            background-position: center;
            z-index: 1;
        }
        .profile-container{
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
            padding: calc(35vh - 6rem) 0 0 2rem;
            img{
                z-index: 3;
                border-radius:50%;
                height: 12rem;
            }
            .profile-info{
                z-index: 3;
                margin-left: 1rem;
                h1{
                    font-size: 2rem;
                    font-weight: 700;
                    margin: 0;
                }
                p{
                    font-size: 1.5rem;
                    margin: 0;
                    color: var(--grey);
                }
            }
        }
    }
    #tabs{
        display: flex;
        flex-direction: column;
        padding: 0 4rem;
        gap: 1.5rem;
        nav{
            ul{
                display: flex;
                gap: 2rem;
                list-style: none;
                padding: 0;
                margin: 0;
                li{
                    a{
                        text-decoration: none;
                        color: var(--black);
                        font-size: 1.3rem;
                        &:active, &:hover{
                            color: var(--primary);
                            text-decoration: underline;
                        }

                    }
                }
            }
        }
    }
}
</style>