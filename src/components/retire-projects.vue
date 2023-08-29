<template>
    <div>
        <h3 class="text-4xl font-bold mt-8 font-dm text-center lg:mt-12">Retired Projects</h3>
        <div class="max-w-[650px] my-4 px-8 mx-auto lg:my-10">
            <p class="text-lg font-bold text-center font-archivo">Projects with updates designs and no archived versions
                available. The projects and reference images are still viewable, should you wish to learn from them.</p>
        </div>
    </div>

    <div class="w-full max-w-screen-2xl flex justify-center flex-wrap mx-auto">
        <div v-for="(project, index) in retiredProjects"
            class="w-full m-8 border-2 border-black relative sm:w-[45%] sm:m-4 lg:w-[30%] xl:w-[22.5%] hover:-translate-y-3 transition-transform duration-200 focus:outline-dashed focus:outline-offset-2 cursor-pointer">
            <div class="border-b-2 border-black">
                <RouterLink :to="project.path">
                    <img class="w-full" :src="project.url" alt="">
                </RouterLink>
            </div>
            <div class="flex items-center bg-orange-100 py-2 px-4">
                <div class="absolute py-1 px-3  font-archivo border-2 border-black top-[-7px] right-[-10px] font-bold"
                    :class="{ 'bg-lime-200': project.level === 1, 'bg-yellow-200': project.level === 2, 'bg-amber-400': project.level === 3 }">
                    <p>Level {{ project.level }}</p>
                </div>
                <p class="bg-orange-100 text-[22px] underline font-bold">{{ project.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            retiredProjects: [{
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
            ]
        }
    }
}
</script>
