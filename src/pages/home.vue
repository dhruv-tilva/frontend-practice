<template>
    <Header />
    <BecomeFd />
    <div class="w-full px-4 py-12">
        <OurPlatform />
        <HomeCardsCon />
        <HomeGetStarted />
    </div>
    <Footer />
</template>

<script>
import Header from '../components/header.vue'
import BecomeFd from '../components/become-fd.vue'
import OurPlatform from '../components/our-platform.vue';
import HomeCardsCon from '../components/home-cards-con.vue'
import HomeGetStarted from '../components/home-get-started.vue';
import Footer from '../components/footer.vue';
export default {
    components: { Header, BecomeFd, OurPlatform, HomeCardsCon, HomeGetStarted, Footer }
}
</script>