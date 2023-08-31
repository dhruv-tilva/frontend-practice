<template>
    <div class="w-full flex flex-col justify-center">
        <div class="w-full max-w-xl mx-auto bg-orange-100 text-center border-2 border-black p-6">
            <p class="font-archivo text-lg font-semibold  max-w-xl mx-auto mb-6">Join our newsletter and get the latest
                Frontend Practice
                updates and
                recommendations for websites,
                articles, and videos worth checking out.</p>
            <RouterLink
                class="bg-white text-black py-3 px-6 font-archivo font-semibold block border-2 border-black no-underline w-32 mx-auto mt-6 focus:outline-dashed focus:outline-offset-2 focus:outline-1 hover:bg-black hover:text-white transition-all duration-200"
                to="/newsletter">
                Subscribe</RouterLink>
        </div>
    </div>
</template>