<template>
    <div class="w-full pt-6 bg-stone-50 max-w-screen-xl mx-auto border-l-2 border-r-2 border-black">
        <div class="w-full px-4 border-b-2 border-black">
            <h1 class="text-4xl font-bold font-dm sm:text-8xl sm:text-center">Ecwid</h1>
            <h2 class="text-2xl font-bold font-dm mb-4 sm:text-center">Home page [RETIRED]</h2>
            <ul class="pb-6 sm:flex sm:justify-center sm:space-x-3">
                <li class="flex items-center text-base font-semibold space-x-1 font-archivo"><i
                        class="fa-solid fa-globe text-blue-400"></i><a class="underline" href="">View
                        Live</a></li>
                <li class="flex items-center text-base font-semibold space-x-1 font-archivo"><i
                        class="fa-solid fa-camera"></i><a class="underline" href="">Free
                        Photo Assests</a></li>
                <li class="flex items-center text-base font-semibold space-x-1 font-archivo"><i
                        class="fa-solid fa-star text-yellow-400"></i><a class="underline" href="">Open Source
                        Icons</a></li>
            </ul>
        </div>
        <div class="w-full md:flex">
            <div class="w-full px-4 border-b-2 border-black sm:border-r-2">
                <h3 class="font-dm text-2xl font-bold text-left mt-6 mb-4 lg:text-center">Recreate this to learn:</h3>
                <ul class="ml-6 mb-6 list-outside list-disc">
                    <li class="text-base"><a href="">Fun color palettes</a></li>
                    <li class="text-base"><a href="">Alternating layouts</a></li>
                    <li class="text-base"><a href="">Grid layout</a></li>
                    <li class="text-base"><a href="">Multi-column footer</a></li>
                    <li class="text-base"><a href="">and more!</a></li>
                </ul>
            </div>
            <div class="w-full px-4 border-b-2 border-black sm:border-r-2">
                <h3 class="font-dm text-2xl font-bold text-left mt-6 mb-4 lg:text-center">Color Palette:</h3>
                <div class="flex justify-center flex-wrap w-full mb-6">
                    <div class="flex items-center w-28 my-2 mr-3 space-x-1 sm:w-32 lg:w-24">
                        <div class="w-6 h-6 border-2 border-stone-300 rounded-[50%] bg-emerald-600"></div>
                        <p class="text-base font-normal font-archivo">#06945b</p>
                    </div>
                    <div class="flex items-center w-28 my-2 mr-3 space-x-1 sm:w-32 lg:w-24">
                        <div class="w-6 h-6 border-2 border-stone-300 rounded-[50%] bg-orange-300"></div>
                        <p class="text-base font-normal font-archivo">#f1b280</p>
                    </div>
                    <div class="flex items-center w-28 my-2 mr-3 space-x-1 sm:w-32 lg:w-24">
                        <div class="w-6 h-6 border-2 border-stone-300 rounded-[50%] bg-emerald-300"></div>
                        <p class="text-base font-normal font-archivo">#68e5a2</p>
                    </div>
                    <div class="flex items-center w-28 my-2 mr-3 space-x-1 sm:w-32 lg:w-24">
                        <div class="w-6 h-6 border-2 border-stone-300 rounded-[50%] bg-blue-600"></div>
                        <p class="text-base font-normal font-archivo">#395be0</p>
                    </div>
                    <div class="flex items-center w-28 my-2 mr-3 space-x-1 sm:w-32 lg:w-24">
                        <div class="w-6 h-6 border-2 border-stone-300 rounded-[50%] bg-yellow-300"></div>
                        <p class="text-base font-normal font-archivo">#fae053</p>
                    </div>
                </div>
            </div>
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
                                :class="{ 'invisible': cardShow }"
                                class="text-base font-semibold underline hover:text-blue-600" href="">Frontend Masters</a>
                            offers a variety of programming courses that are perfect for
                            developers looking to improve their skills. From foundational concepts to advanced techniques,
                            these
                            courses cover a wide range of topics and are suitable for developers at all levels.</span>
                    </button>
                </div>
            </div>
            <div class="w-full px-4 border-b-2 border-black pb-6">
                <h3 class="font-dm text-2xl font-bold text-left mt-6 mb-4 lg:text-center">Resources:</h3>
                <ul class="w-full list-none lg:pl-7">
                    <li class="text-base font-bold underline hover:text-blue-600 transition-all duration-200"><a
                            href="">Open Source Illustrations</a></li>
                    <li class="text-base font-bold underline hover:text-blue-600 transition-all duration-200"><a href="">A
                            Complete Guide to Grid</a></li>
                    <li class="text-base font-bold underline hover:text-blue-600 transition-all duration-200"><a
                            href="">Using CSS animations</a>A Complete Guide to Flexbox</li>
                </ul>
            </div>
        </div>
    </div>
    <div
        class="px-4 py-12 md:flex md:flex-wrap md:items-center md:justify-center max-w-screen-xl mx-auto border-b-2 border-l-2 border-r-2 border-black">
        <div class="w-full p-6 bg-black max-w-[350px] sm:mx-auto lg:mx-3 md:mr-3">
            <h2 class="text-3xl font-bold mb-3 text-white font-dm">Up for a challenge?</h2>
            <p class="text-base font-normal mt-3 text-white font-archivo">Make this website mobile-friendly. Notice the
                footer changes to accordions.</p>
        </div>
        <div class="w-full p-6 bg-zinc-700 my-4 max-w-[350px] sm:mx-auto lg:mx-3 md:ml-3">
            <h2 class="text-3xl font-bold mb-3 text-white font-dm">Too easy?</h2>
            <p class="text-base font-normal mt-3 text-white font-archivo">Don't forget to add the slide-out hamburger menu
                on smaller screen sizes.</p>
        </div>
        <div class="p-6 bg-white border-2 border-black md:w-full sm:mx-auto max-w-[350px] lg:mx-3">
            <h2 class="text-3xl font-bold mb-3 text-black font-dm">Too hard?</h2>
            <p class="text-base font-normal mt-3 text-black font-archivo">That's ok! <br> <a
                    class="underline hover:text-blue-600 transition-all duration-200 font-bold" href="">View other
                    projects</a>
            </p>
        </div>
    </div>
    <div class="max-w-screen-xl mx-auto border-b-2 border-l-2 border-r-2 border-black">
        <h1 class="font-dm text-4xl font-bold text-center pt-12">Reference Image</h1>
        <div class="p-8 w-full">
            <img class="max-h-full max-w-full shadow-xl rounded-2xl" src="\public\ecwid-full.webp" alt="">
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
