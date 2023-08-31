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
            title: "Podia",
            subTitle: "Digital products page",
            recreateLearn: ["Hero section", "Minimal color palette", "Dropdown menus", "Hover effects", "and more!"],
            colorPattern: ["#fdfbf9", "#ffffff", "#4b2aad", "#9484c6", "#201445", "#f5efeb"],
            resources: ["Creating a dropdown menu", "A Complete Guide to Flexbox", "Accessible accordions"],
            upChallenge: `Implement the dropdown sections in the footer on mobile view.`,
            tooEasy: `Recreate the main navigation menu dropdown on mobile view.`,
            img: "/public/podia-full.webp"
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
