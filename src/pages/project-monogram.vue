<template>
    <Header />
    <ProjTopCon />
    <ProjSubCard />
    <ProjImgCon />
    <Footer />
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import ProjTopCon from '../components/proj-top-con.vue';
import ProjSubCard from '../components/proj-sub-card.vue';
import ProjImgCon from '../components/proj-img-con.vue';
export default {
    data() {
        return {
            cardShow: true,
            title: "Monogram",
            subTitle: "Shop page",
            recreateLearn: ["Hero image.", "Image hover transitions", "Dropdown menu", "Sticky menu on scroll", "and more!"],
            colorPattern: ["#1a2456", "#ff8b68", "#f0efed", "#080b1b"],
            resources: ["Change image on hover", "A Complete Guide to Grid", "A Complete Guide to Flexbox"],
            upChallenge: `Build the slide-out panel when clicking the shopping cart in the menu.`,
            tooEasy: `Make it mobile friendly and create the hamburger menu.`,
            img: "/public/monogram-full.webp"
        }
    },
    components: { ProjTopCon, ProjSubCard, ProjImgCon, Header, Footer },
    provide() {
        return {
            abletontitle: this.title,
            abletonsubTitle: this.subTitle,
            abletonrecreateLearn: this.recreateLearn,
            abletoncolorPattern: this.colorPattern,
            abletonresources: this.resources,
            abletonupChallenge: this.upChallenge,
            abletontooEasy: this.tooEasy,
            abletonimg: this.img
        }
    }
}
</script>
