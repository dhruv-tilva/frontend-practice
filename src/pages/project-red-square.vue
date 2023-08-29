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
            title: "Red Square",
            subTitle: "Agency home page [RETIRED]",
            recreateLearn: ["Minimal design.", "Scroll animations.", "Hover effects.", "and more!"],
            colorPattern: ["#e31e3c", "#111111", "#fefefe", "#858585"],
            resources: ["Fading with Intersection Observer", "WOW.js animations", "Google Fonts"],
            upChallenge: `Animate the sections and text fading in on scroll.`,
            tooEasy: `Create the effect when hovering "Let's talk" at the bottom of the page.`,
            img: "/public/red-square-full.webp"
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
