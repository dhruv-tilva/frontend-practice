<template>
    <Header />
    <div class="px-4 pb-9 max-w-screen-xl mx-auto">
        <BlogPageHeading class="max-w-[700px]">How to quickly build your developer portfolio</BlogPageHeading>
        <BlogSubPara>Building a new developer portfolio can seem daunting and it's easy to continuously
            delay
            going live.
            I've been there and know how frustrating it can be. But not to worry, I have some tips to help you cross the
            finish line and publish your portfolio.</BlogSubPara>
        <BlogPortfolioMain />
        <BlogSubscribe />
    </div>
    <Footer />
</template>

<script>
import Header from '../components/header.vue';
import BlogPageHeading from '../components/blog-page-heading.vue';
import BlogSubPara from '../components/blog-sub-para.vue';
import BlogPortfolioMain from '../components/blog-portfolio-main.vue';
import BlogSubscribe from '../components/host-subscribe.vue'
import Footer from '../components/footer.vue'
export default {
    components: { Header, BlogPageHeading, BlogSubPara, BlogPortfolioMain, BlogSubscribe, Footer }
}
</script>