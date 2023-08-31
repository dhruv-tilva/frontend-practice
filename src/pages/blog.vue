<template>
    <Header />
    <div class="bg-neutral-100 w-full h-auto sm:min-h-[80vh]">
        <Title class="pt-12 md:pt-16 max-w-lg mx-auto">Frontend Practice Blog</Title>
        <BlogParagraph />
        <BlogLinkCon />
    </div>
    <Footer />
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import Title from '../components/title.vue';
import BlogParagraph from '../components/blog-paragraph.vue';
import BlogLinkCon from '../components/blog-link-con.vue';
export default {
    components: { Title, BlogLinkCon, BlogParagraph, Header, Footer }
}
</script>