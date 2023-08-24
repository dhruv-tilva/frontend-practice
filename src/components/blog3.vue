<template>
    <div class="px-4 pb-9 max-w-screen-xl mx-auto">
        <h1
            class="font-dm max-w-2xl text-3xl md:text-4xl lg:text-6xl sm:px-3 font-bold text-center mt-16 pb-16 mx-auto border-b-[1px] border-zinc-400">
            Frontend Practice and how it works.</h1>
        <p class="mt-16 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">At Frontend Practice, we
            believe there is great value in recreating real websites as a form of coding practice. With our large collection
            of hand-picked projects to choose from, there's something for everyone, no matter your skill level.
        </p>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">One advantage of this
            particular type of coding practice is that you can use any technology you prefer, including HTML, CSS,
            JavaScript, or your favorite framework or library.
        </p>
        <h2 class="max-w-2xl text-3xl font-bold font-dm mx-auto my-5 lg:my-6">To get started:</h2>
        <p class="mt-16 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Create a new HTML, CSS, and
            JavaScript file and begin recreating the web pages that are featured in our projects. If you prefer to work with
            a specific framework or library, you can install the package of your choice with the command line and start
            building.
        </p>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Each project on Frontend
            Practice comes with a recommended course and helpful resources, including color palettes, reference images, and
            links to free photo assets and icons.
        </p>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">We also provide a list of
            what you can learn from each project and unique challenges specific to each project, making it easy for you to
            focus on the skills you want to improve.
        </p>
        <div class="w-full max-w-3xl mx-auto">
            <img class="min-w-full min-h-full max-w-full max-h-full" src="\public\ableton-3rd.webp" alt="">
        </div>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">If you're just starting with
            frontend development, we recommend starting with the Level 1 projects, which focus on basic layouts, color
            choices, and simple animations. As you progress, you can move on to Level 2 projects, which offer a wider
            variety of designs, interactive elements, and more advanced animations.
        </p>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">And if you're feeling
            confident and ready to push your skills to the next level, you can tackle the Level 3 projects, which are some
            of the most complex and challenging projects on the site.
        </p>
        <div class="w-full max-w-3xl mx-auto">
            <img class="min-w-full min-h-full max-w-full max-h-full" src="\public\project-3rd.webp" alt="">
        </div>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">No matter your skill level,
            Frontend Practice has something to offer. So don't hesitate to dive in and start practicing – the only way to
            improve is through hands-on experience and hard work. So, start your journey today and become an even better
            frontend developer!
        </p>
        <h2 class="max-w-2xl text-3xl font-bold font-dm mx-auto my-5 lg:my-6">Last but not least:</h2>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">After building a project or
            two, showcase your skills and projects by creating your own portfolio website. Check out our article,
            <RouterLink to="/blog/build-your-portfolio-faster"
                class="underline font-semibold focus:outline-dashed focus:outline-offset-2 focus:outline-1">How to quickly
                build your developer portfolio</RouterLink>for helpful tips.
        </p>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Until next time, happy
            coding!
        </p>
        <div class="w-full flex flex-col justify-center">
            <div class="w-full max-w-xl mx-auto bg-orange-100 text-center border-2 border-black p-6">
                <p class="font-archivo text-lg font-semibold  max-w-xl mx-auto mb-6">Join our newsletter and get the latest
                    Frontend Practice
                    updates and
                    recommendations for websites,
                    articles, and videos worth checking out.</p>
                <RouterLink
                    class="bg-black text-white py-3 px-6 font-archivo font-semibold block border-2 border-black no-underline w-32 mx-auto mt-6 focus:outline-dashed focus:outline-offset-2 focus:outline-1 hover:bg-white hover:text-black transition-all duration-200"
                    to="/newsletter">
                    Subscribe</RouterLink>
            </div>
        </div>
    </div>
</template>
