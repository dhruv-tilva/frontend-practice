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
            title: "Qrates",
            subTitle: "Why page",
            recreateLearn: ["Accordions.", "Grid style layout.", "Unique design.", "and more!"],
            colorPattern: ["#FFF804", "#81836C", "#E280FF", "#ffffff", "#000000"],
            resources: ["A Complete Guide to Grid", "Accessible ARIA Accordions", "Multi-Level, Sticky Footer"],
            upChallenge: `Animate the images above the "Try it now" button at the bottom of the page.`,
            tooEasy: `Create the toggles & transition for the "Artists on Qrates" section.`,
            img: "/public/qrates-full.webp"
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
