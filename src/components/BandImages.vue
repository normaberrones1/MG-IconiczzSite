<template>
    <div class="band-images" @mouseover="stopAutoSlide" @mouseleave="startAutoSlide">
        
        <div class="img">
            
            <div v-for="(image, index) in images" :key="index" class="slides" :class="{active: currentSlide === index}">
                <img :src="image" :alt="`slide${index}`" />
            </div>

            <div class="img-carousel">
                <button @click="previous"></button>
                <button @click="next"></button>
            </div>

        
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                `public/MG.jpg`,
                `public/MG.jpg`,
                `public/MG.jpg`,
                `public/MG.jpg`,

            ],
            currentImageIndex: 0,
            autoSlideInterval: null,
        };
    },
    mounted() {
        this.startAutoSlide();
    },
    methods: {
        startAutoSlide() {
            this.autoSlideInterval = setInterval(() => {
                this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
            }, 3000);
        },
        stopAutoSlide() {
            clearInterval(this.autoSlideInterval);
        },
    },
};
</script>

<style>

@media (min-width: 1024px) {
    .band-images {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}




</style>