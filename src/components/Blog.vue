<template>
    <div class="bg-neutral-100 w-full h-auto sm:min-h-[80vh]">
        <div class="w-full">
            <h1
                class="font-dm text-5xl font-bold pt-12 pb-6 text-center max-w-[500px] mx-auto sm:text-6xl sm:pt-16 lg:text-7xl">
                Frontend
                <br />
                Practice Blog
            </h1>
            <p class="text-base pb-12 text-center max-w-[750px] font-archivo px-6 mx-auto lg:text-xl lg:pb-24">
                Covering a wide range of topics, including project tutorials, responsive
                design, accessibility, testing, helpful tips, and more.
            </p>
        </div>
        <div class="w-full max-w-screen-xl mx-auto mb-24">
            <div
                class="max-w-[900px] w-full px-6 py-3 border-b-2 border-t-2 border-black mx-auto sm:flex sm:justify-between sm:items-center transition-all duration-200 hover:bg-neutral-200">
                <div class="w-full sm:w-[65%]">
                    <RouterLink to="/blog/where-to-host-your-frontend-projects"
                        class="text-2xl font-semibold leading-tight font-dm hover:underline hover:underline-offset-4"
                        href="">Where to host your
                        frontend projects.</RouterLink>
                </div>
                <div class="hidden sm:flex max-w-[250px] text-right items-center space-x-2">
                    <p class="py-1 px-3 font-normal text-sm font-archivo bg-black text-white rounded-[100px]">Hoisting</p>
                    <p class="py-1 px-3 font-normal text-sm font-archivo bg-black text-white rounded-[100px]">Projects</p>
                </div>
            </div>
            <div
                class="max-w-[900px] w-full px-6 py-3 border-b-2 border-black mx-auto sm:flex sm:justify-between sm:items-center transition-all duration-200 hover:bg-neutral-200">
                <div class="w-full sm:w-[65%]">
                    <RouterLink to="/blog/build-your-portfolio-faster"
                        class="text-2xl font-semibold leading-tight hover:underline hover:underline-offset-4 font-dm hover:decoration-black"
                        href="">How to quickly build your developer portfolio.</RouterLink>
                </div>
                <div class="hidden sm:flex max-w-[250px] text-right items-center space-x-2">
                    <p class="py-1 px-3 font-normal text-sm font-archivo bg-black text-white rounded-[100px]">Tips</p>
                    <p class="py-1 px-3 font-normal text-sm font-archivo bg-black text-white rounded-[100px]">Portfolio</p>
                </div>
            </div>
            <div
                class="max-w-[900px] w-full px-6 py-3 border-b-2 border-black mx-auto sm:flex sm:justify-between sm:items-center transition-all duration-200 hover:bg-neutral-200">
                <div class="w-full sm:w-[65%]">
                    <RouterLink to="/blog/frontend-practice-and-how-it-works"
                        class="text-2xl font-semibold leading-tight hover:underline hover:underline-offset-4 font-dm hover:decoration-black"
                        href="">Frontend Practice and how it is works.</RouterLink>
                </div>
                <div class="hidden sm:flex max-w-[250px] text-right items-center space-x-2">
                    <p class="py-1 px-3 font-normal text-sm font-archivo bg-black text-white rounded-[100px]">Projects</p>
                    <p class="py-1 px-3 font-normal text-sm font-archivo bg-black text-white rounded-[100px]">How-to</p>
                </div>
            </div>
        </div>
    </div>
</template>

