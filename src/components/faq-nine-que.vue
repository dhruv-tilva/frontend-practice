<template>
    <div class="max-w-[750px] w-full mt-5 border-2 border-black mx-auto">
        <p @click="isEight = !isEight"
            class="bg-orange-100 p-3 dm text-2xl font-bold leading-none border-black hover:underline hover:underline-offset-1 cursor-pointer"
            :class="{ 'border-b-2': isEight }">Where did some of
            the projects go?
        </p>
        <p v-show="isEight" class="text-lg font-normal px-3 py-5 font-archivo">Occasionally we will retire projects
            from the main
            collection if the design is no longer up to date or an archived version is not available.</p>
        <p v-show="isEight" class="text-lg font-bold px-3 py-5 font-archivo">You can still find the retired projects
            at the
            bottom of our <a class="font-bold text-black hover:text-blue-700 transition-all duration-200 underline"
                @cllick.prevent href="">Projects</a> page.</p>
    </div>
</template>


<script>
export default {
    data() {
        return {
            isEight: false
        }
    }
}
</script>