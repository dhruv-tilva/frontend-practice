<template>
    <div class="max-w-[750px] w-full mt-5 border-2 border-black mx-auto">
        <p @click="isSixth = !isSixth"
            class="bg-orange-100 p-3 dm text-2xl font-bold leading-none border-black hover:underline hover:underline-offset-1 cursor-pointer"
            :class="{ 'border-b-2': isSixth }">Can I use these in
            my portfolio?
        </p>
        <p v-show="isSixth" class="text-lg font-normal px-3 py-5 font-archivo">We encourage you to make these
            projects your own by
            incorporating your own colors, content, and images. If you choose to use these projects for your
            portfolio, please clearly state that it is an "unofficial" version.</p>
        <p v-show="isSixth" class="text-lg font-bold px-3 py-5 font-archivo">It is important to note that these are
            practice
            projects and all materials owned by companies and individuals whose websites are featured on Frontend
            Practice are intended for practice purposes only.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSixth: false
        }
    }
}
</script>