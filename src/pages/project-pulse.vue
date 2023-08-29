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
            title: "Pulse",
            subTitle: "Pricing page",
            recreateLearn: ["Pricing layout", "Hover effects", "Multi-column footer", "and more!"],
            colorPattern: ["#00ad6a", "#eafaf1", "#1fe374", "#080c16", "#d6dae5", "#fcfcfc"],
            resources: ["A Complete Guide to Flexbox", "Multi-Level Sticky Footer", "Transitions on Hover"],
            upChallenge: `Make sure the page is mobile-friendly. Include the hamburger menu.`,
            tooEasy: `Create the "Contact Us" pop-up and form.`,
            img: "/public/pulse-full.webp"
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
