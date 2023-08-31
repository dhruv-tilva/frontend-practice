<template>
    <Header />
    <div class="px-4 pb-9 max-w-screen-xl mx-auto">
        <BlogPageHeading class="max-w-2xl">Where to host your frontend projects</BlogPageHeading>
        <BlogSubPara>As a frontend developer, you usually need an easy-to-use and reliable hosting platform to start
            deploying and showcasing your projects. With so many hosting options available, it can be challenging to choose
            the right platform for your needs. So let's compare four of our favorite options: Netlify, Vercel, GitHub
            Pages,and Surge.sh.</BlogSubPara>
        <BlogHostCon />
        <HostConclusion />
        <HostSubscribe />
    </div>
</template>

<script>
import Header from '../components/header.vue';
import BlogPageHeading from '../components/blog-page-heading.vue';
import BlogSubPara from '../components/blog-sub-para.vue';
import BlogHostCon from '../components/blog-host-con.vue';
import HostConclusion from '../components/host-concusion.vue'
import HostSubscribe from '../components/host-subscribe.vue'
export default {
    components: { Header, BlogSubPara, BlogPageHeading, BlogHostCon, HostConclusion, HostSubscribe }
}
</script>