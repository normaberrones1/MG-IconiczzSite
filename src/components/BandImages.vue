<template>
    <div class="band-images" @mouseover="stopAutoSlide" @mouseleave="startAutoSlide">
        
        <div class="img">
            
            <div v-for="(image, index) in images" :key="index" class="slides" :class="{active: currentSlide === index}">
                <img :src="image"/>
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




</style>