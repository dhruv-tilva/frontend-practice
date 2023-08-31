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
            title: "Starbucks",
            subTitle: "Rewards page.",
            recreateLearn: ["Sticky/fixed header", "Tabbed sections", "Color choices", "Layout practice", "and more!"],
            colorPattern: ["#1e3932", "#008248", "#d4e9e2", "#f1f8f6", "#f3f1e7", "#000000"],
            resources: ["How To Create a Hero Image", "Create a Fixed Header on Scroll", "Create Toggleable Tabs", "Create a Skip to Content link"],
            upChallenge: `Add the "Skip to Main Content" button when pressing the tab key after the page loads.`,
            tooEasy: `Animate the bottom border moving left/right when selecting a new tab.`,
            img: "/public/starbucks-full.webp"
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
