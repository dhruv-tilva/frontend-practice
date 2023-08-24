<template>
    <div class="w-full">
        <h1
            class="font-dm text-5xl font-bold pt-12 pb-6 text-center max-w-[500px] mx-auto sm:text-6xl sm:pt-16 lg:text-6xl">
            Frequently Asked Questions</h1>
        <div class="w-full max-w-screen-xl px-4 mb-24 mx-auto">
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
            <div class="max-w-[750px] w-full mt-5 border-2 border-black mx-auto">
                <p @click="isThird = !isThird"
                    class="bg-orange-100 p-3 dm text-2xl font-bold leading-none border-black hover:underline hover:underline-offset-1 cursor-pointer"
                    :class="{ 'border-b-2': isThird }">Which languages do
                    I
                    use for these projects?
                </p>
                <p v-show="isThird" class="text-lg font-normal px-3 py-5 font-archivo">In short, you can use any programming
                    language you
                    desire for these practice projects.</p>
                <p v-show="isThird" class="text-lg font-normal px-3 py-5 font-archivo">The beauty of recreating websites for
                    practice is that
                    you can utilize any tech stack, such as HTML, CSS, JavaScript, React, Vue, Angular, Svelte, or any other
                    language, framework, or library.</p>
            </div>
            <div class="max-w-[750px] w-full mt-5 border-2 border-black mx-auto">
                <p @click="isForth = !isForth"
                    class="bg-orange-100 p-3 dm text-2xl font-bold leading-none border-black hover:underline hover:underline-offset-1 cursor-pointer"
                    :class="{ 'border-b-2': isForth }">Where can I find
                    images and icons?
                </p>
                <p v-show="isForth" class="text-lg font-normal px-3 py-5 font-archivo"><a
                        class="font-bold text-black hover:text-blue-700 transition-all duration-200 underline"
                        @cllick.prevent href="">Pexels</a> and <a href="">Pixabay</a> are
                    excellent sources for free stock photos, while <a
                        class="font-bold text-black hover:text-blue-700 transition-all duration-200 underline"
                        @cllick.prevent href="">Boxicons</a> and <a
                        class="font-bold text-black hover:text-blue-700 transition-all duration-200 underline"
                        @cllick.prevent href="">Font Awesome</a>
                    offer a variety of free icons. Links to these resources can be found at the top of every project page on
                    Frontend Practice.
                </p>
            </div>
            <div class="max-w-[750px] w-full mt-5 border-2 border-black mx-auto">
                <p @click="isFifth = !isFifth"
                    class="bg-orange-100 p-3 dm text-2xl font-bold leading-none border-black hover:underline hover:underline-offset-1 cursor-pointer"
                    :class="{ 'border-b-2': isFifth }">Why did you pick
                    these websites?
                </p>
                <p v-show="isFifth" class="text-lg font-normal px-3 py-5 font-archivo">The selection of websites featured on
                    Frontend
                    Practice is based on personal preference and takes into consideration various factors, including design
                    and style, difficulty to recreate, and elements and features that offer a learning opportunity through
                    recreation.</p>
                <p v-show="isFifth" class="text-lg font-normal px-3 py-5 font-archivo italic">It is important to note that
                    some projects may
                    be more challenging to recreate than others.</p>
            </div>
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isFirst: true,
            isSecond: true,
            isThird: false,
            isForth: false,
            isFifth: false,
            isSixth: false,
            isSeven: false,
            isEight: false,
        }
    }
}
</script>
