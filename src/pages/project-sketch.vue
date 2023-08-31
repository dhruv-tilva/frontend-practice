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
            title: "Sketch",
            subTitle: "App download page. [RETIRED]",
            recreateLearn: ["Text animations", "Dropdowns", "Hover effects", "Multi-column footer", "and more!"],
            colorPattern: ["#ffffff", "#fa6400", "#575aff", "#5f636a", "#f8f8fb", "#242424"],
            resources: ["Creating a dropdown menu", "A Complete Guide to Flexbox", "Using CSS animations"],
            upChallenge: `Create the navigation dropdown that also blurs out the page content.`,
            tooEasy: `Animate the heading and subheading text on the page load.`,
            img: "/public/sketch-full.webp"
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
