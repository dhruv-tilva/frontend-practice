<template>
    <ProjBtnCon @clikedBtn="receivedClicked" />
    <div class="px-4 mb-12">
        <input type="text" v-model="userInput"
            class="block w-full max-w-[450px] outline-none px-4 py-3 border-2 border-black text-xl placeholder:text-gray-400 mx-auto focus:outline-dashed focus:outline-2 focus:outline-black focus:outline-offset-2"
            placeholder="Search">
        <ProjLevelDesc :click-data="isClick">There are no rules with these projects. Use any
            languages, libraries, or frameworks you want to recreate and learn from them.</ProjLevelDesc>
    </div>
    <div class="w-full mb-10 border-b-2 border-black md:pb-10">
        <div class="w-full max-w-screen-2xl flex justify-center flex-wrap mx-auto">
            <ProjCard v-if="searchedProjects.length > 0" v-for="(project, index) in searchedProjects" :key="index"
                :url="project.url" :level="project.level" :title="project.title" :path="project.path" />
            <p v-else class="text-black font-archivo py-5 px-10 font-bold leading-normal bg-red-200 text-xl">Sorry, no
                results
                found for "{{ userInput }}".</p>
        </div>
    </div>
</template>


<script>
import Title from "../components/title.vue"
import ProjectHowToGet from "../components/project-how-to-get.vue"
import ProjBtnCon from "../components/proj-btn-con.vue";
import ProjLevelDesc from '../components/proj-level-desc.vue';
import ProjCard from '../components/proj-card.vue';


export default {
    components: {
        Title,
        ProjectHowToGet,
        ProjBtnCon,
        ProjLevelDesc,
        ProjCard
    },
    data() {
        return {
            userInput: "",
            isClick: "",
            projects: [{
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
    },
    // provide() {
    //     return {
    //         projects: this.filteroutProjects
    //     }
    // },
    methods: {
        receivedClicked(btnContent) {
            this.isClick = btnContent
            // this.clikedData = btnContent
            // this.isComponent = this.clikedData
            // console.log(this.clikedData)
        }
    },
    mounted() {
        console.log(this.isClick);
    },
    computed: {
        filteroutProjects() {
            if (this.isClick == "View All") {
                return this.projects
            } else if (this.isClick == "Level 1") {
                return this.projects.filter((project) => project.level === 1)
            } else if (this.isClick == "Level 2") {
                return this.projects.filter((project) => project.level === 2)
            } else if (this.isClick == "Level 3") {
                return this.projects.filter((project) => project.level === 3)
            } else if (this.isClick == "") {
                return this.projects
            }
        },
        searchedProjects() {
            return this.filteroutProjects.filter((project) => project.title.toLowerCase().includes(this.userInput.toLowerCase()))
        }
    }
}
</script>
