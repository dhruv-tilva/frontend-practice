<template>
    <div class="w-full max-w-screen-xl mx-auto mb-24">
        <BlogLink />
    </div>
</template>


<script>
import BlogLink from './blog-link.vue';
export default {
    components: { BlogLink },
    data() {
        return {
            blogLinkData: [
                {
                    path: "/blog/where-to-host-your-frontend-projects",
                    title: "Where to host your frontend projects.",
                    subTitles: ["Hoisting", "Projects"]
                },
                {
                    path: "/blog/build-your-portfolio-faster",
                    title: "How to quickly build your developer portfolio.",
                    subTitles: ["Tips", "Portfolio"]
                },
                {
                    path: "/blog/frontend-practice-and-how-it-works",
                    title: "Frontend Practice and how it is works",
                    subTitles: ["Projects", "How-to"]
                }
            ]
        }
    },
    provide() {
        return {
            blogLinkData: this.blogLinkData
        }
    }
}
</script>