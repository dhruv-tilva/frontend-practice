<template>
    <Header />
    <div class="px-4 pb-9 max-w-screen-xl mx-auto">
        <BlogPageHeading class="max-w-[700px]">Frontend Practice and how it works.</BlogPageHeading>
        <BlogSubPara>At Frontend Practice, we believe there is great value in recreating real websites as a form of coding
            practice. With our large collection of hand-picked projects to choose from, there's something for everyone, no
            matter your skill level. <br> <br> One advantage of this particular type of coding practice is that you can use
            any technology you prefer, including HTML, CSS, JavaScript, or your favorite framework or library.</BlogSubPara>
        <BlogFrontendMain />
    </div>
    <Footer />
</template>

<script>
import Header from '../components/header.vue';
import BlogPageHeading from '../components/blog-page-heading.vue'
import BlogSubPara from '../components/blog-sub-para.vue'
import BlogFrontendMain from '../components/blog-frontend-main.vue';
import Footer from "../components/footer.vue"
export default {
    components: {
        Header,
        BlogPageHeading,
        BlogSubPara,
        BlogFrontendMain,
        Footer
    }
}
</script>
