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
            title: "Lobe",
            subTitle: "Tour page",
            recreateLearn: ["Hover animations", "Video overlay", "Minimal layout", "Multi-column footer", "and more!"],
            colorPattern: ["#04ddb2", "#333", "#fff", "#767676"],
            resources: ["Beginner’s Guide to Web Animation", "Video image overlay (example)", "Multi-Level Sticky Footer"],
            upChallenge: `Add the opaque background to the navigation menu/bar.`,
            tooEasy: `Build the hamburger menu and animation that appears when on smaller screens.`,
            img: "/public/lobe-full.webp"
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
