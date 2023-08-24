<template>
    <div>
        <h1 class="font-dm text-center text-4xl font-bold my-7 md:text-7xl md:mt-16 md:mb-6">
            Project Library
        </h1>

        <div class="mb-6 max-w-[350px] mx-auto md:max-w-[400px]">
            <h2 class="font-dm text-center text-3xl underline font-bold my-4">
                how to get started:
            </h2>
            <p class="font-archivo text-lg md:text-[22px] my-3">
                <em>→</em> Choose one of our projects below.
            </p>
            <p class="font-archivo text- md:text-[22px] lg my-3">
                <em>→</em> Recreate all <u>or</u> parts of the page.
            </p>
            <p class="font-archivo text-lg md:text-[22px] my-3">
                <em>→</em> Improve and test your skill.
            </p>
            <p class="font-archivo text-lg md:text-[22px] my-3 font-bold">
                ✔ Become a better frontend developer.
            </p>
        </div>
        <div class="w-full mb-4">
            <div
                class="max-w-[300px] flex flex-wrap justify-center gap-4 mx-auto mb-4 md:block md:max-w-[500px] md:space-x-4 md:text-center">
                <button @click="isComponents = 'ViewAll'"
                    class="bg-black text-white py-3 px-4 font-bold w-[100px] border-2 border-black">
                    View All
                </button>
                <button @click="isComponents = 'Level1'"
                    class="bg-white text-black py-3 px-4 border-2 border-black font-bold w-[100px] focus:outline-dashed hover:bg-[#bcff93] focus:bg-[#bcff93]"
                    :class="{
                        'bg-[#bcff93]': isComponents === 'Level1',
                        outline: isComponents === 'Level1',
                    }">
                    Level 1
                </button>
                <button @click="isComponents = 'Level2'"
                    class="bg-white text-black py-3 px-4 border-2 border-black font-bold w-[100px] focus:outline-dashed hover:bg-[#fcff74] focus:bg-[#fcff74]"
                    :class="{
                        'bg-yellow-200': isComponents === 'Level2',
                        outline: isComponents === 'Level2',
                    }">
                    Level 2
                </button>
                <button @click="isComponents = 'Level3'"
                    class="bg-white text-black py-3 px-4 border-2 border-black font-bold w-[100px] focus:outline-dashed hover:bg-[#ffd430] focus:bg-[#ffd430]"
                    :class="{
                        'bg-amber-400': isComponents === 'Level3',
                        outline: isComponents === 'Level3',
                    }">
                    Level 3
                </button>
            </div>
        </div>

        <component :projects="projects" :retiredProjects="retiredProjects" :is="isComponents"></component>
    </div>
</template>

<script>
import ViewAll from "./ViewAll.vue";
import Level1 from "./Level1.vue";
import Level2 from "./Level2.vue";
import Level3 from "./Level3.vue";
export default {
    components: {
        ViewAll,
        Level1,
        Level2,
        Level3,
    },
    data() {
        return {
            isComponents: "ViewAll",
            projects: [
                {
                    url: "/public/C1-Ableton.webp",
                    level: 1,
                    title: "Ableton",
                    path: "/projects/ableton"
                },
                {
                    url: "/public/C2-abstract.webp",
                    level: 1,
                    title: "Abstract",
                    path: "/projects/abstract"
                },
                {
                    url: "/public/C1-Backstage-Talks.webp",
                    level: 1,
                    title: "Bakstage Talks",
                    path: "projects/backstage-talks"
                },
                {
                    url: "/public/C2-basic.webp",
                    level: 3,
                    title: "Basic",
                    path: "/projects/basic"
                },
                {
                    url: "/public/C2-bonsai.webp",
                    level: 1,
                    title: "Bonsai",
                    path: "/projects/bonsai"
                },
                {
                    url: "/public/C1-Canal-Street.webp",
                    level: 3,
                    title: "Canal Street Market",
                    path: "/projects/canal-street-market"
                },
                {
                    url: "/public/C1-deplace-maison.webp",
                    level: 3,
                    title: "Deplace Maison",
                    path: "/projects/deplace-moison"
                },
                {
                    url: "/public/C2-figma.webp",
                    level: 3,
                    title: "Figma Merch",
                    path: "/projects/figma-merch"
                },
                {
                    url: "/public/C3-go-daddy.webp",
                    level: 2,
                    title: "GoDaddy",
                    path: "/projects/godaddy"
                },
                {
                    url: "/public/C2-lobe.webp",
                    level: 1,
                    title: "Lobe",
                    path: "/projects/lobe"
                },
                {
                    url: "/public/C3-Monogram.webp",
                    level: 2,
                    title: "Monogram",
                    path: "/projects/monogram"
                },
                {
                    url: "/public/C2-Monstercat.webp",
                    level: 2,
                    title: "Monstercat",
                    path: "/projects/monstercat"
                },
                {
                    url: "/public/C1-Nintendo.webp",
                    level: 3,
                    title: "Nintendo",
                    path: "/projects/nintendo"
                },
                {
                    url: "/public/C3-oh.webp",
                    level: 1,
                    title: "Oh.studio",
                    path: "/projects/oh-studio"
                },
                {
                    url: "/public/C3-podia.webp",
                    level: 2,
                    title: "Podia",
                    path: "/projects/podia"
                },
                {
                    url: "/public/C2-pulse.webp",
                    level: 1,
                    title: "Pulse",
                    path: "/projects/pulse"
                },
                {
                    url: "/public/C1-Qrates.webp",
                    level: 3,
                    title: "Qrates",
                    path: "/projects/qrates"
                },
                {
                    url: "/public/C1-Starbucks.webp",
                    level: 2,
                    title: "Starbucks",
                    path: "/projects/starbucks"
                },
                {
                    url: "/public/C3-Stark.webp",
                    level: 2,
                    title: "Stark",
                    path: "/projects/stark"
                },
            ],
            retiredProjects: [
                {
                    url: "/public/C2-ecwid.webp",
                    level: 2,
                    title: "Ecwid",
                    path: "/projects/retire/ecwid"
                },
                {
                    url: "/public/C2-grasshopper.webp",
                    level: 3,
                    title: "Grasshopper",
                    path: "/projects/retire/grasshopper"
                },
                {
                    url: "/public/C2-instrument.webp",
                    level: 1,
                    title: "Instrument",
                    path: "/projects/retire/instrument"
                },
                {
                    url: "/public/C1-Red-Square.webp",
                    level: 1,
                    title: "Red Square",
                    path: "/projects/retire/red-square"
                },
                {
                    url: "/public/C2-shopify-dev.webp",
                    level: 2,
                    title: "Shopify Dev",
                    path: "/projects/retire/shopify-dev"
                },
                {
                    url: "/public/C2-sketch.webp",
                    level: 2,
                    title: "Sketch",
                    path: "/projects/retire/sketch"
                },
                {
                    url: "/public/C2-trello.webp",
                    level: 2,
                    title: "Trello",
                    path: "/projects/retire/trello"
                },
            ],
        };
    },
};
</script>

<style scoped>
.outline {
    outline: 2px dashed black;
    outline-offset: 2px;
}
</style>
