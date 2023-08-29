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
            title: "Ecwid",
            subTitle: "Home page [RETIRED]",
            recreateLearn: ["Fun color palettes", "Alternating layouts", "Grid layout", "Multi-column footer", "and more!"],
            colorPattern: ["#06945b", "#f1b280", "#68e5a2", "#395be0", "#fae053"],
            resources: ["Open Source Illustrations", "A Complete Guide to Grid", "A Complete Guide to Flexbox"],
            upChallenge: `Make this website mobile-friendly. Notice the footer changes to accordions.`,
            tooEasy: `Don't forget to add the slide-out hamburger menu on smaller screen sizes.`,
            img: "/public/ecwid-full.webp"
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
