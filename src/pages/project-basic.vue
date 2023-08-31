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
            title: "Basic",
            subTitle: "Home page",
            recreateLearn: ["Hover effects", "Unique design", "Scroll events", "Draggable elements", "and more!"],
            colorPattern: ["#f9cdcd", "#252422", "#f4f4f4"],
            resources: ["Locomotive Scroll", "Change cursor on hover", "A Complete Guide to Grid", "Google Fonts"],
            upChallenge: `Build the draggable slider under "Featured Engagements".`,
            tooEasy: `Try recreating the initial page load animations.`,
            img: "/public/basic-full.webp"
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
