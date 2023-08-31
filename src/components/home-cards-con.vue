<template>
    <div
        class="flex flex-col space-y-5 px-3 max-w-[1000px] mx-auto lg:flex-row lg:justify-center lg:flex-wrap lg:space-y-0 gap-6">
        <HomeCards v-for="(card, index) in cards" :key="index" :url="card.url" :desc="card.desc" />
    </div>
</template>

<script>
import HomeCards from './home-cards.vue'
export default {
    components: {
        HomeCards
    },
    data() {
        return {
            cards: [{
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
}
</script>
