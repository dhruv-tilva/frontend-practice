<template>
    <Header />
    <Title class="max-w-xl mx-auto mt-16 mb-16">Frequently Asked Questions</Title>
    <FaqQueCon class="mt-16" />
    <Footer />
</template>

<script>
import Header from '../components/header.vue';
import Title from '../components/title.vue';
import FaqQueCon from '../components/faq-que-con.vue'
import Footer from '../components/footer.vue';
export default {
    components: { Title, Header, FaqQueCon, Footer }
}
</script>