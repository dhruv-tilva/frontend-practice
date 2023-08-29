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
            title: "Stark",
            subTitle: "Library page.",
            recreateLearn: ["Hover effects", "Keyboard navigation", "Grid layout", "Multi-column footer", "and more!"],
            colorPattern: ["#f6f6eb", "#11284b", "#381fd1", "#4b4b4e", "#ffffff", "#f3f2fc"],
            resources: ["Tab animation (example)", "A Complete Guide to Flexbox Using CSS animations", "Multi-Level, Sticky Footer"],
            upChallenge: `Recreate all of the hover effects found on the example website.`,
            tooEasy: `Make sure all the interactive elements can be navigated to using your keyboard.`,
            img: "/public/stark-full.webp"
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
