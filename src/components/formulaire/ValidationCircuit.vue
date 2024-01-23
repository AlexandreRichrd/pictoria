<template>
    <section id="validation-circuit">
        <section v-for="bubble in bubbleTab" class="circuit-item">
            <div class="bubble" :class="props.activeTab >= bubble ? 'active' : ''">{{ bubble }}</div>
        </section>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps({
    activeTab: {
        type: Number,
        required: false,
        default: 1
    }
})

const bubbleTab = [
    1,
    2,
    3
]
</script>

<style lang="scss" scoped>
#validation-circuit{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    .circuit-item{
        display: flex;
        flex-direction: row;
        align-items: center;
        .bubble{
            width: 6rem;
            aspect-ratio: 1/1;
            border-radius: 50%;
            background-color: var(--grey);
            color: #FFF;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.5rem;
        }
        .active{
            background-color: var(--primary);
        }
        hr{
            width: 60%;
            height: 0.1rem;
            background-color: var(--grey);
            &:last-child(1){
                display: none;
            }
        }
        
    }
}
</style>