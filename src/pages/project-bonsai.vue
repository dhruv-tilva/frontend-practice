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
            title: "Bonsai",
            subTitle: "Pricing page (previous design)",
            recreateLearn: ["Pricing layout", "Toggle switches", "Dropdowns", "Accordions", "and more!"],
            colorPattern: ["#00b289", "#4c4d5f", "#fff", "#f8db62"],
            resources: ["Creating a dropdown menu", "Accessible accordions", "How To Create a Toggle Switch", "Multi-Level Sticky Footer"],
            upChallenge: `Add the toggle functionality between monthly and yearly pricing.`,
            tooEasy: `Recreate the dropdowns in the main menu and their internal hover actions.`,
            img: "/public/bonsai-full.webp"
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
