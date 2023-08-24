<template>
    <div class="px-4 pb-9 max-w-screen-xl mx-auto">
        <h1
            class="font-dm max-w-2xl text-[2rem] md:text-4xl lg:text-6xl sm:px-3 font-bold text-center mt-16 pb-16 mx-auto border-b-[1px] border-zinc-400 leading-none">
            How to quickly build your developer portfolio</h1>
        <p class="mt-16 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Building a new developer
            portfolio can seem daunting and it's easy to continuously delay going live. I've been there and know how
            frustrating it can be. But not to worry, I have some tips to help you cross the finish line and publish your
            portfolio.</p>
        <div v-for="(detail, index) in details1" class="w-full">
            <h2 class="max-w-2xl text-3xl font-bold font-dm mx-auto my-5 lg:my-6">{{
                detail.title }}</h2>
            <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">{{ detail.decs }}</p>
        </div>
        <h2 class="max-w-2xl text-3xl font-bold font-dm mx-auto my-5 lg:my-6">When in doubt, look for inspiration.
        </h2>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Looking at websites other
            developers and designers have created can be an invaluable source of both inspiration and knowledge. However,
            I'm not suggesting that you copy someone else's work. Instead, let their designs spark your creativity and teach
            you new design techniques and trends.</p>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">One of my favorite
            inspirational resources is <a
                class="underline font-semibold focus:outline-dashed focus:outline-1 focus:outline-offset-2" target="_blank"
                href="https://www.siteinspire.com">Siteinspire</a></p>
        <h2 class="max-w-2xl text-3xl font-bold font-dm mx-auto my-5 lg:my-6">Write your content before building a new page.
        </h2>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Before you start on a new
            page, try writing down your content or most of it. This allows you to focus solely on
            the content of your page without worrying about the coding or design. Plus it will also speed up the building
            process as you'll have real content to work with.</p>

        <h2 class="max-w-2xl text-3xl font-bold font-dm mx-auto my-5 lg:my-6">Before you start coding, pick a theme.</h2>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Avoid making constant
            changes to the same section. This might be great for exploring new designs and ideas but not for finishing your
            portfolio in a timely manner.</p>
        <p class="mt-4 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Get your basic layout,
            colors, and content setup, and then move on to the next section. Once you've built out your page, then go back
            through and make any necessary changes.</p>

        <h2 class="max-w-2xl text-3xl font-bold font-dm mx-auto my-5 lg:my-6">Projects: If your're proud of it, include it.
        </h2>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">This is one is pretty
            self-explanatory. There is no need to include every project you have ever built since you started programming.
        </p>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Ask yourself two questions:
        </p>
        <ol class="max-w-2xl mx-automb-6 mx-auto pl-6 w-full list-decimal leading-normal text-lg font-normal">
            <li>"Am I proud of this project?"</li>
            <li>"Would I be willing to show this to a potential employer or client?"</li>
        </ol>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">If the answers are yes, then
            add it to your portfolio.
        </p>
        <h2 class="max-w-2xl text-3xl font-bold font-dm mx-auto my-5 lg:my-6">Set a [soft] deadline.</h2>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Even if it's two weeks or
            two months, set a soft deadline and try your best to stick to it but also be realistic in regards to your own
            life and how much time you have to work on it.
        </p>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Two months is a reasonable
            deadline to set for yourself. This is long enough to spend quite a few hours working on your portfolio.
            Remember, the goal is to finish your portfolio, it does not have to be absolutely perfect. You can always come
            back and make changes later.
        </p>
        <h2 class="max-w-2xl text-3xl font-bold font-dm mx-auto my-5 lg:my-6">Share your progress.</h2>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Sharing with friends and
            family, or on social media is a great motivator to finish your portfolio. It provides accountability, feedback,
            and support when you need it most.
        </p>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Accountability to help us
            with our deadlines, feedback to fine-tune and fix areas we might have overlooked, and support for those days
            when we need a reminder that we're doing a great job.
        </p>
        <h2 class="max-w-2xl text-3xl font-bold font-dm mx-auto my-5 lg:my-6">And finally, go live!</h2>
        <p class="mt-8 font-archivo text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-5">Take a deep breath, pat
            yourself on the back, and hit that publish button! There are plenty of options out there for hosting, so do your
            research. We share a handful of recommendations in our <RouterLink
                class="underline font-semibold focus:outline-dashed focus:outline-1 focus:outline-offset-2"
                to="/blog/where-to-host-your-frontend-projects">where to Host your Frontend Projects</RouterLink> article.
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

<script>
export default {
    data() {
        return {
            details1: [{
                title: "First and foremost, start.",
                decs: "It may sound simple, but this is the most important piece of advice I can give you. No one but you is going to create your portfolio. So, get started!"
            },
            {
                title: "Before you start coding, pick a theme.",
                decs: `Having a theme in mind while building can significantly speed up the creation of your portfolio. By "theme", I mean the overall look and feel you want for your website, such as minimal, a black-and-white palette, a grid-focused approach, etc. Once you have decided on your theme, stick to it!`
            }
            ],
            details2: [{
                title: "Write your content before building a new page.",
                decs: "Before you start on a new page, try writing down your content or most of it. This allows you to focus solely on the content of your page without worrying about the coding or design. Plus it will also speed up the building process as you'll have real content to work with."
            },
            {
                title: "Before you start coding, pick a theme.",
                decs: [`Avoid making constant changes to the same section. This might be great for exploring new designs and ideas but not for finishing your portfolio in a timely manner.`, `Get your basic layout, colors, and content setup, and then move on to the next section. Once you've built out your page, then go back through and make any necessary changes.`]
            }
            ]
        }
    }
}
</script>
