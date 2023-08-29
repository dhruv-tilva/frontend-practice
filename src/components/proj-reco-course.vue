<template>
    <div class="w-full px-4 border-b-2 border-black pb-6 sm:border-r-2">
        <h3 class="font-dm text-2xl font-bold text-left mt-6 mb-4 lg:text-center">Recommended Course:</h3>
        <div>
            <p class="text-base font-semibold text-left max-w-sm font-archivo lg:pl-6">Frontend Masters
                offers a 100% free
                <a class="text-base font-archivo font-semibold underline hover:text-blue-600 transition-all duration-200"
                    href="">"Complete Intro to Web Development"</a> course.
            </p>
            <button @click="cardShow = !cardShow"
                class="font-archivo flex relative py-1 px-2 bg-transparent text-black border-2 border-black mt-3 lg:mx-auto hover:bg-black hover:text-white focus:outline-dashed focus:outline-black focus:outline-offset-2">Learn
                More
                <span :class="{ 'invisible': cardShow }"
                    class="w-[270px] absolute text-sm font-normal p-6 z-2 shadow-2xl opacity-100 left-[10%] top-8 text-center bg-white text-black m-3 transition-opacity duration-500 lg:-left-[150%] lg:w-96 2xl:-left-[160%]"><a
                        :class="{ 'invisible': cardShow }" class="text-base font-semibold underline hover:text-blue-600"
                        href="">Frontend Masters</a>
                    offers a variety of programming courses that are perfect for
                    developers looking to improve their skills. From foundational concepts to advanced techniques,
                    these
                    courses cover a wide range of topics and are suitable for developers at all levels.</span>
            </button>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            cardShow: true
        }
    }
}
</script>