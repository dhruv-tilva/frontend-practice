<template>
    <div class="w-full bg-[#faebd7]">
        <div class="py-12 px-4 max-w-[1200px] mx-auto md:flex items-center md:py-24 lg:px-9 xl:px-0">
            <div class="w-full md:max-w-[600px]">
                <h2 class="dm text-[32px] leading-none font-bold text-black md:text-5xl lg:text-6xl">Become a better
                    frontend developer.
                </h2>
                <p class="archivo text-lg my-4 md:text-2xl font-normal">Take your frontend skills to the next level by
                    recreating <strong>real websites</strong> from <strong>real companies.</strong>
                </p>
                <p class="archivo text-lg my-4 md:text-2xl font-normal">The perfect type of practice for developers of all
                    skill levels. Are you up for the challenge?</p>
                <div class="flex items-center space-x-4">
                    <RouterLink
                        class="archivo py-3 px-4 bg-white no-underline border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 font-semibold"
                        to="/projects">View
                        Projects</RouterLink>
                    <RouterLink
                        class="archivo py-3 px-4 bg-[#faebd7] no-underline border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 font-semibold"
                        to="/">Learn More
                    </RouterLink>
                </div>
            </div>
            <div class="hidden md:block">
                <img class="w-full" src="\public\project-collage.webp" alt="">
            </div>
        </div>
    </div>

    <div class="w-full px-4 py-12">
        <div class="w-full">
            <h2 class="dm text-[27px] leading-none mb-10 font-bold text-center max-w-[650px] mx-auto md:text-4xl">Frontend
                Practice provides you with the inspiration and resources to create beautiful websites.
            </h2>
            <p class="archivo text-2xl text-center mb-10 max-w-[450px] mx-auto md:text-[27px]">Here are some ways you can
                benefit from using our platform:</p>
        </div>
        <div
            class="flex flex-col space-y-5 px-3 max-w-[1000px] mx-auto lg:flex-row lg:justify-center lg:flex-wrap lg:space-y-0 gap-6">
            <div class="flex flex-col items-center border-2 border-black p-4 mx-auto max-w-[450px] md:flex-row lg:mx-0"
                v-for="(card, index) in cards" :key="index">
                <img class="max-w-[90px] mb-3 md:mr-6 lg:mr-8" :src="card.url">
                <p class="text-lg text-center">{{ card.desc }}</p>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <h2 class="text-3xl text-center dm font-bold my-8 leading-none max-w-[450px] mx-auto md:mt-20">Ready to become a
                better frontend developer?
            </h2>
            <RouterLink
                class="inline-block archivo py-3 px-4 bg-white no-underline border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 font-semibold"
                to="/projects">Get Started</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.dm {
    font-family: "DM Serif Display", serif;
}

.archivo {
    font-family: 'Archivo', sans-serif;
}
</style>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            cards: [
                {
                    url: "/public/f990db40-ba07-479c-b52c-3b2c6caabc89_domain.avif",
                    desc: "Enhance your skills by building real websites selected for their educational value."
                },
                {
                    url: "/public/eee214-bbfe-4f9e-ad0f-70f7785679be_layout.avif",
                    desc: "Test and improve your frontend knowledge through various challenges."
                },
                {
                    url: "/public/d3c1f70-6ff3-41f0-b9d6-3b46f2899359_pantone.avif",
                    desc: "Use the provided color palettes for each project to save time."
                },
                {
                    url: "/public/d6e88860-7347-4d32-acf8-aa1f01db8685_idea.avif",
                    desc: "Find helpful, curated resources to tackle challenging elements."
                },
            ]
        };
    },
    components: { RouterLink }
}
</script>