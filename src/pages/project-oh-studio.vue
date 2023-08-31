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
            title: "Oh.studio",
            subTitle: "Design studio",
            recreateLearn: ["Minimal design.", "Scroll animations.", "Hover effects.", "and more!"],
            colorPattern: ["#ffffff", "#000000", "#7f7f7f", "#e8e5e4"],
            resources: ["Fading with Intersection Observer", "WOW.js animations", "Google Fonts"],
            upChallenge: `Animate the text fading in on both page load and while scrolling.`,
            tooEasy: `Create the blurred glass effect on the fixed navigation menu.`,
            img: "/public/oh-full.webp"
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
