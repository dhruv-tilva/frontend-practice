<template>
    <Header />
    <div class="bg-orange-100 px-3 py-9">
        <ContactHead />
        <ContactForm />
    </div>
    <Footer />
</template>


<script>
import Header from '../components/header.vue';
import ContactHead from '../components/contact-head.vue';
import ContactForm from '../components/contact-form.vue'
import Footer from '../components/footer.vue';
export default {
    components: { ContactHead, ContactForm, Header, Footer }
}
</script>