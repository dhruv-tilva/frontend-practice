<template>
    <div class="px-4 mb-12">
        <input type="text" v-model="projInput"
            class="block w-full max-w-[450px] outline-none px-4 py-3 border-2 border-black text-xl placeholder:text-gray-400 mx-auto focus:outline-dashed focus:outline-2 focus:outline-black focus:outline-offset-2"
            placeholder="Search">
        <div class="px-4 my-4 max-w-[650px] mx-auto md:px-1">
            <p class="archivo font-semibold text-lg text-center bg-yellow-200 max-w-[530px] p-1 mx-auto mb-4 mt-8">A
                wonderful variety of projects with well designed layouts, interactive elements, hover effects and
                animations.</p>
        </div>
    </div>
    <div class="w-full mb-10 border-b-2 border-black md:pb-10">
        <div class="w-full max-w-screen-2xl flex justify-center flex-wrap mx-auto">
            <div v-for="(project, index) in filteredProjects"
                class="w-full m-8 border-2 border-black relative sm:w-[45%] sm:m-4 lg:w-[30%] xl:w-[22.5%] hover:-translate-y-3 transition-transform duration-200 focus:outline-dashed focus:outline-offset-2 cursor-pointer">
                <div class="border-b-2 border-black">
                    <img class="w-full" :src="project.url" alt="">
                </div>
                <div class="flex items-center bg-[#faebd7] py-2 px-4">
                    <div class="absolute py-1 px-3  archivo border-2 border-black top-[-7px] right-[-10px] font-bold"
                        :class="{ 'bg-[#bcff93]': project.level === 1, 'bg-yellow-200': project.level === 2, 'bg-amber-400': project.level === 3 }">
                        <p>Level {{ project.level }}</p>
                    </div>
                    <p class="bg-[#faebd7] text-[22px] underline font-bold">{{ project.title }}</p>
                </div>
            </div>
        </div>
    </div>

    <div>
        <h3 class="text-4xl font-bold mt-8 dm text-center lg:mt-12">Retired Projects</h3>
        <div class="max-w-[650px] my-4 px-8 mx-auto lg:my-10">
            <p class="text-lg font-semibold text-center archivo">Projects with updates designs and no archived versions
                available. The projects and reference images are still viewable, should you wish to learn from them.</p>
        </div>
    </div>

    <div class="w-full max-w-screen-2xl flex justify-center flex-wrap mx-auto">
        <div v-for="(project, index) in retiredProjects"
            class="w-full m-8 border-2 border-black relative sm:w-[45%] sm:m-4 lg:w-[30%] xl:w-[22.5%] hover:-translate-y-3 transition-transform duration-200 focus:outline-dashed focus:outline-offset-2 cursor-pointer">
            <div class="border-b-2 border-black">
                <img class="w-full" :src="project.url" alt="">
            </div>
            <div class="flex items-center bg-[#faebd7] py-2 px-4">
                <div class="absolute py-1 px-3  archivo border-2 border-black top-[-7px] right-[-10px] font-bold"
                    :class="{ 'bg-[#bcff93]': project.level === 1, 'bg-yellow-200': project.level === 2, 'bg-amber-400': project.level === 3 }">
                    <p>Level {{ project.level }}</p>
                </div>
                <p class="bg-[#faebd7] text-[22px] underline font-bold">{{ project.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projInput: ""
        }
    },
    props: ['projects', 'retiredProjects'],
    computed: {
        level2Projects() {
            return this.projects.filter((project) => project.level === 2)
        },
        filteredProjects() {
            return this.level2Projects.filter((project) => project.title.toLowerCase().includes(this.projInput.toLowerCase()))
        }
    }
}
</script>


<style scoped>
.dm {
    font-family: "DM Serif Display", serif;
}

.archivo {
    font-family: 'Archivo', sans-serif;
}
</style>