<template>
    <div class="w-full mb-4">
        <div
            class="max-w-[300px] flex flex-wrap justify-center gap-4 mx-auto mb-4 md:block md:max-w-[500px] md:space-x-4 md:text-center">
            <ProjLevelBtn @click="$emit('clikedBtn', projectButton.btnText)" :button-text="projectButton.btnText"
                v-for="(projectButton, index) in projectButtons" :btn-text="projectButton.btnText"
                :bg="projectButton.background" :color="projectButton.color" :hover-bg="projectButton.hoverBg"
                :focus-bg="projectButton.focusBg" :click-bg="projectButton.clickBg" />
        </div>
    </div>
</template>

<script>
import ProjLevelBtn from "./proj-level-btn.vue"
export default {
    components: { ProjLevelBtn },
    data() {
        return {
            projectButtons: [
                {
                    btnText: "View All",
                    background: "bg-black",
                    color: "text-white",
                    clickBg: "bg-black",
                    hoverBg: "hover:bg-black",
                    focusBg: "focus:bg-black"
                },
                {
                    btnText: "Level 1",
                    background: "bg-white",
                    color: "text-black",
                    clickBg: "bg-lime-200",
                    hoverBg: "hover:bg-lime-200",
                    focusBg: "focus:bg-lime-200"
                },
                {
                    btnText: "Level 2",
                    background: "bg-white",
                    color: "text-black",
                    clickBg: "bg-yellow-200",
                    hoverBg: "hover:bg-yellow-200",
                    focusBg: "focus:bg-yellow-200"
                },
                {
                    btnText: "Level 3",
                    background: "bg-white",
                    color: "text-black",
                    clickBg: "bg-amber-400",
                    hoverBg: "hover:bg-amber-400",
                    focusBg: "focus:bg-amber-400"
                }
            ]
        }
    }
}
</script>