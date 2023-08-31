<template>
    <BlogPortfolioHaeding>To get started:</BlogPortfolioHaeding>
    <BlogPortfolioParagraph>Create a new HTML, CSS, and JavaScript file and begin recreating the web pages that are
        featured in our projects. If you prefer to work with a specific framework or library, you can install the
        package of your choice with the command line and start building.</BlogPortfolioParagraph>
    <BlogPortfolioParagraph>Each project on Frontend Practice comes with a recommended course and helpful resources,
        including color palettes, reference images, and links to free photo assets and icons.</BlogPortfolioParagraph>
    <BlogPortfolioParagraph>We also provide a list of what you can learn from each project and unique challenges
        specific to each project, making it easy for you to focus on the skills you want to improve.
    </BlogPortfolioParagraph>
    <div class="w-full max-w-3xl mx-auto">
        <img class="min-w-full min-h-full max-w-full max-h-full" src="\public\ableton-3rd.webp" alt="">
    </div>
    <BlogPortfolioParagraph>If you're just starting with frontend development, we recommend starting with the Level 1
        projects, which focus on basic layouts, color choices, and simple animations. As you progress, you can move on to
        Level 2 projects, which offer a wider variety of designs, interactive elements, and more advanced animations.
    </BlogPortfolioParagraph>
    <BlogPortfolioParagraph>And if you're feeling confident and ready to push your skills to the next level, you can tackle
        the Level 3 projects, which are some of the most complex and challenging projects on the site.
    </BlogPortfolioParagraph>
    <div class="w-full max-w-3xl mx-auto">
        <img class="min-w-full min-h-full max-w-full max-h-full" src="\public\project-3rd.webp" alt="">
    </div>
    <BlogPortfolioParagraph>No matter your skill level, Frontend Practice has something to offer. So don't hesitate to dive
        in and start practicing – the only way to improve is through hands-on experience and hard work. So, start your
        journey today and become an even better frontend developer!</BlogPortfolioParagraph>

    <BlogPortfolioHaeding>Last but not least:</BlogPortfolioHaeding>
    <BlogPortfolioParagraph>After building a project or two, showcase your skills and projects by creating your own
        portfolio website. Check out our article, <a href=""
            class="underline font-semibold focus:outline-dashed focus:outline-1 focus:outline-offset-2">"How to quickly
            build your developer portfolio"</a> for helpful tips.</BlogPortfolioParagraph>
    <BlogPortfolioParagraph>Until next time, happy coding!</BlogPortfolioParagraph>
    <HostSubscribe />
</template>

<script>
import BlogPortfolioParagraph from './blog-portfolio-paragraph.vue'
import BlogPortfolioHaeding from './blog-portfolio-haeding.vue'
import HostSubscribe from './host-subscribe.vue';
export default {
    components: { BlogPortfolioParagraph, BlogPortfolioHaeding, HostSubscribe }
}
</script>