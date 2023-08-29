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
            title: "Backstage Talks",
            subTitle: "Magazine archive",
            recreateLearn: ["Scroll transitions.", "Color choices.", "Fixed content.", "Minimal layout.", "and more!"],
            colorPattern: ["#00c1b5", "#ff651a", "#ffbe00", "#1d3fbb", "#e30512"],
            resources: ["Create a anchor link", "Fixed Positioning", "Practical CSS Scroll Snapping"],
            upChallenge: `Create the full-page scroll background transitions & anchor link.`,
            tooEasy: `Make it mobile responsive. You'll notice there is no full-page scroll on smaller screens.`,
            img: "/public/C1-Backstage-Talks full.webp"
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
