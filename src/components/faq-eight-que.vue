<template>
    <div class="max-w-[750px] w-full mt-5 border-2 border-black mx-auto">
        <p @click="isSeven = !isSeven"
            class="bg-orange-100 p-3 dm text-2xl font-bold leading-none border-black hover:underline hover:underline-offset-1 cursor-pointer"
            :class="{ 'border-b-2': isSeven }">Why does the live
            website not look like the project anymore?
        </p>
        <p v-show="isSeven" class="text-lg font-normal px-3 py-5 font-archivo">How dare they update the website! We
            will talk with
            their manager right away. If they don't respond, we'll periodically check the websites we feature and
            make the necessary updates.</p>
        <p v-show="isSeven" class="text-lg font-normal px-3 py-5 font-archivo">In some cases, if we really love the
            previous
            design, we may keep it and link to an archived page if possible. If not, please see the reference image
            on the project page.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSeven: false
        }
    }
}
</script>