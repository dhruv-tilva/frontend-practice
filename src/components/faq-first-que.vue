<template>
    <div class="max-w-[750px] w-full mt-5 border-2 border-black mx-auto">
        <p @click="isFirst = !isFirst"
            class="bg-orange-100 p-3 dm text-2xl font-bold leading-none border-black hover:underline hover:underline-offset-1 cursor-pointer"
            :class="{ 'border-b-2': isFirst }">What
            is Frontend Practice?
        </p>
        <p v-show="isFirst" class="text-lg font-normal px-3 py-5 font-archivo">Frontend
            Practice offers developers
            the opportunity to
            practice and
            improve their skills
            in design, interactions, animations, responsiveness, troubleshooting, and more by providing a selection
            of real websites for them to recreate from scratch. This hands-on approach allows developers to gain a
            diverse set of valuable skills that will make them more employable in the industry.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isFirst: true
        }
    }
}
</script>