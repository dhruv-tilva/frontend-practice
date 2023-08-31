<template>
    <div class="max-w-[750px] w-full mt-5 border-2 border-black mx-auto">
        <p @click="isSecond = !isSecond"
            class="bg-orange-100 p-3 dm text-2xl font-bold leading-none border-black hover:underline hover:underline-offset-1 cursor-pointer"
            :class="{ 'border-b-2': isSecond }">Where is the code?
            || I need help.
        </p>
        <p v-show="isSecond" class="text-lg font-normal px-3 py-5 font-archivo">Frontend Practice does not provide
            any pre-written
            code, but we do offer a few resources to assist with each project. However, there will always be
            unexpected challenges that arise during the learning process, which is where the true learning begins.
        </p>
        <p v-show="isSecond" class="text-lg font-normal px-3 py-5 font-archivo">If you want a more structured
            approach to learning
            coding, consider taking Frontend Masters' <a @click.prevent href=""
                class="font-bold text-black hover:text-blue-700 transition-all duration-200 underline">"Complete
                Intro to Web
                Development"</a> or <a
                class="font-bold text-black hover:text-blue-700 transition-all duration-200 underline" href=""
                @click.prevent>"Getting Started With CSS"</a> courses,
            which are completely free.</p>
        <p v-show="isSecond" class="text-lg font-normal px-3 py-5 font-archivo"><a @click.prevent href=""
                class="font-bold text-black hover:text-blue-700 transition-all duration-200 underline">Frontend
                Masters</a> offers a variety of
            programming courses that are perfect for developers
            looking to improve their skills. From foundational concepts to advanced techniques, these courses cover
            a wide range of topics and are suitable for developers at all levels.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSecond: true
        }
    }
}
</script>