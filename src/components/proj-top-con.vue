<template>
    <div class="w-full pt-6 bg-stone-50 max-w-screen-xl mx-auto border-l-2 border-r-2 border-black">
        <div class="w-full px-4 border-b-2 border-black">
            <ProjTitle />
            <ProjSource />
        </div>
        <div class="w-full md:flex">
            <ProjRecreateLearn />
            <ProjColorPattern />
            <ProjRecoCourse />
            <ProjResources />
        </div>
    </div>
</template>

<script>
import ProjTitle from './proj-title.vue';
import ProjSource from './proj-source.vue'
import ProjRecreateLearn from './proj-recreate-learn.vue'
import ProjColorPattern from './proj-color-pattern.vue'
import ProjRecoCourse from './proj-reco-course.vue'
import ProjResources from './proj-resources.vue'
export default {
    components: {
        ProjTitle,
        ProjSource,
        ProjRecreateLearn,
        ProjColorPattern,
        ProjRecoCourse,
        ProjResources
    }
}
</script>
