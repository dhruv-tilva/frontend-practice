<template>
    <div class="w-full bg-[#faebd7] border-b-2 border-black">
        <div class="py-12 px-4 max-w-screen-xl mx-auto md:flex items-center md:py-24 lg:px-9 xl:px-0">
            <div class="w-full md:max-w-[600px]">
                <h2 class="font-dm text-[32px] leading-none font-bold text-black md:text-5xl lg:text-6xl">Become a better
                    frontend developer.
                </h2>
                <p class="font-archivo text-lg my-4 md:text-2xl font-normal">Take your frontend skills to the next level by
                    recreating <strong>real websites</strong> from <strong>real companies.</strong>
                </p>
                <p class="font-archivo text-lg my-4 md:text-2xl font-normal">The perfect type of practice for developers of
                    all
                    skill levels. Are you up for the challenge?</p>
                <div class="flex items-center space-x-4">
                    <HomeBtn v-for="(button, index) in buttons" :btn-text="button.btnText"
                        :background="button.background" />
                </div>
            </div>
            <div class="hidden md:block">
                <img class="w-full" src="\public\project-collage.webp" alt="">
            </div>
        </div>
    </div>
</template>


<script>
import HomeBtn from './home-btn.vue';

export default {
    components: { HomeBtn },
    data() {
        return {
            buttons: [
                {
                    btnText: "View Project",
                    background: "bg-white",
                },
                {
                    btnText: "Learn More",
                    background: "bg-orange-100",
                },
            ]
        }
    }
}
</script>
