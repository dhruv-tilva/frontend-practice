<template>
    <div
        class="px-4 py-12 md:flex md:flex-wrap md:items-center md:justify-center max-w-screen-xl mx-auto border-b-2 border-l-2 border-r-2 border-black">
        <ProjChallenge />
        <ProjTooEasy />
        <ProjTooHard />
    </div>
</template>


<script>
import ProjChallenge from "./proj-challenge.vue"
import ProjTooEasy from './proj-too-easy.vue';
import ProjTooHard from './proj-too-hard.vue';
export default {
    components: { ProjChallenge, ProjTooEasy, ProjTooHard }
}
</script>