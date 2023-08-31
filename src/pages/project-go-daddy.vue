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
            title: "GoDaddy",
            subTitle: "Home page (partial)",
            recreateLearn: ["Feature rich hero section", "Various grids", "Multi-column footer", "and more!"],
            colorPattern: ["#00838C", "#09757A", "#D8EFEF", "#111111", "#FFFFFF"],
            resources: ["A Complete Guide to Grid", "A Complete Guide to Flexbox", "Multi-Level Sticky Footer"],
            upChallenge: `The navigation links open a mega menu when clicked. Try to recreate this effect.`,
            tooEasy: `There are many more sections to this page than pictured below. Try to recreate them as best as you can.`,
            img: "/public/figma-full.webp"
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
