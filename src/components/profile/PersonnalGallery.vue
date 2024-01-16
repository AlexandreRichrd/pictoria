<template>
    
    <div class="images">
        <img v-for="img in imgUrls" :src="img" alt="">
    </div>
</template>

<script lang="ts" setup>

const imgUrls: string[] = [
    'https://pm1.aminoapps.com/6375/d68b71f2bd7f652d12ac41449f8b34527251baca_hq.jpg',
    'https://pm1.aminoapps.com/5663/972ef68823fba38370b8322ddf756161b5bedc19_hq.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWoaHBIIpErWaPkvtojg42VjB1Wrj6FdzT2w&usqp=CAU',
    'https://ih0.redbubble.net/image.694328400.7735/raf,360x360,075,t,fafafa:ca443f4786.jpg',
    'https://pbs.twimg.com/media/FTOGSYhXsAITqM6.jpg'
]
</script>

<style lang="scss" scoped>
.images{
    display: flex;
    justify-content: space-between;
    img{
        height: 20rem;
        object-fit: cover;
    }
}
</style>