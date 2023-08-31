<template>
    <BlogHost />
</template>


<script>
import BlogHost from './blog-host.vue';
export default {
    components: { BlogHost },
    data() {
        return {
            blogHost: [
                {
                    title: "Netlify",
                    desc: `“The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.”`,
                    paragraph: `Netlify is a hosting platform that provides a range of features for web development, including continuous deployment, custom domain support, and HTTPS encryption. Netlify is an all-in-one platform that makes it easy to build, deploy, and manage your frontend projects. Also, their drag-and-drop interface makes it unbelievably easy to deploy new projects.`,
                    pros: ["Continuous deployment with Git integration", "Custom domains and HTTPS support", "Automatic builds and deploy previews", "Serverless functions and form handling"],
                    details: ["Pricing: Free, with paid plans available", "SSL encryption: Yes", "URL", "Documentation"],
                    links: [["https://netlify.com"], ["https://docs.netlify.com"]]
                },
                {
                    title: "Vercel",
                    desc: `“Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.”`,
                    paragraph: `Vercel is a hosting platform that specializes in hosting frontend projects built with frameworks like React, Next.js, and Vue.js. Vercel is designed to optimize performance and provide a seamless developer experience. With Vercel, you can deploy your projects with one click, and you can take advantage of features like automatic scaling, instant cache invalidation, and global CDN.`,
                    pros: ["Automatic scaling and global CDN", "Automatic build optimizations", "Serverless functions and API routes", "Easy integrations with popular frontend frameworks"],
                    details: ["Pricing: Free, with paid plans available", "SSL encryption: Yes", "URL", "Documentation"],
                    links: [["https://vercel.com"], ["https://vercel.com/docs"]]
                },
                {
                    title: "GitHub Pages",
                    desc: `“Hosted directly from your GitHub repository. Just edit, push, and your changes are live.”`,
                    paragraph: `GitHub Pages is a free service provided by GitHub that allows you to host static websites. It is an excellent option for developers who are already using GitHub. With GitHub Pages, you can easily deploy your static websites directly from your repositories, and you can use custom domains to create a personalized URL for your site.`,
                    pros: ["Free hosting for static websites", "Straightforward deployment with Git", "Custom domains and HTTPS support", "Supports Jekyll, a popular static site generator"],
                    details: ["Pricing: Free", "SSL encryption: Yes", "URL", "Documentation"],
                    links: [["https://pages.github.com"], ["https://docs.github.com/en/pages"]]
                },
                {
                    title: "Surge",
                    desc: `“Simple, single-command web publishing. Publish HTML, CSS, and JS for free, without leaving the command line.”`,
                    paragraph: `Surge.sh is a simple static web publishing service that allows you to quickly and easily host static websites. Surge is ideal for developers who need a quick and simple hosting solution. With Surge, you can deploy your static websites with just a few commands in the terminal, and you can use custom domains to create a personalized URL for your site..`,
                    pros: ["Free hosting for static websites", "Easy to deploy with terminal commands", "Custom domains and HTTPS support", "Supports single-page applications and static assets"],
                    details: ["Pricing: Free, with paid plans available", "GitHub integration: No", "SSL encryption: Yes", "URL", "Documentation"],
                    links: [["https://surge.sh"], ["https://surge.sh/help"]]
                },
            ]
        }
    },
    provide() {
        return {
            blogHost: this.blogHost
        }
    }
}
</script>