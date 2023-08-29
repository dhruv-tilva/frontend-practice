<template>
    <footer class="bg-black py-10 px-5">
        <div class="max-w-[1200px] mx-auto">
            <div>
                <p class="text-white font-archivo font-normal mb-6 lg:text-center">Frontend Practice - © 2023</p>
            </div>
            <ul class="md:flex p-0 max-w-[400px] md:space-x-4 lg:mx-auto">
                <li>
                    <RouterLink
                        class="text-white font-bold text-lg font-archivo focus:outline-dashed focus:outline-offset-2 hover:underline"
                        to="/">
                        Home</RouterLink>
                </li>
                <li>
                    <RouterLink
                        class="text-white font-bold text-lg font-archivo focus:outline-dashed focus:outline-offset-2 hover:underline"
                        to="/projects">Projects</RouterLink>
                </li>
                <li>
                    <RouterLink
                        class="text-white font-bold text-lg font-archivo focus:outline-dashed focus:outline-offset-2 hover:underline"
                        to="/blog">Blog</RouterLink>
                </li>
                <li>
                    <RouterLink
                        class="text-white font-bold text-lg font-archivo focus:outline-dashed focus:outline-offset-2 hover:underline"
                        to="/faq">FAQ</RouterLink>
                </li>
                <li>
                    <RouterLink
                        class="text-white font-bold text-lg font-archivo hover:underline focus:outline-dashed focus:outline-offset-2"
                        to="/contact">Contact</RouterLink>
            </li>
            <li>
                <RouterLink
                    class="text-white font-bold text-lg font-archivo focus:outline-dashed focus:outline-offset-2 hover:underline"
                    to="/newsletter">Newsletter</RouterLink>
            </li>
        </ul>
    </div>
</footer></template>
