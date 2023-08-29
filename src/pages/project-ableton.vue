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
            title: "Ableton",
            subTitle: "Home page",
            recreateLearn: ["Typography choices", "Spacing", "Unique grid layout", "Multi-column footer", "and more!"],
            colorPattern: ["#fbffa7", "#ff764d", "#b1c5ff", "#d5b3ff", "#b6ffc0", "#0000ff"],
            resources: ["A Complete Guide to Grid", "A Complete Guide to Flexbox", "CSS Box Model", "Multi-Level Sticky Footer"],
            upChallenge: `Try building the mega-menu that appears when you click "More +" in the main menu.`,
            tooEasy: `Is it responsive on mobile? Make the 2nd menu bar sticky on scroll.`,
            img: "/public/C1-Ableton full.webp"
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
