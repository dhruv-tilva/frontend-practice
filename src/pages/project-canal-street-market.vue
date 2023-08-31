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
            title: "Canal Street Market",
            subTitle: "Home page",
            recreateLearn: ["Unique layout.", "Hover animations.", "Typography choices.", "and more!"],
            colorPattern: ["#5ea3ec", "#f64444", "#ffb400", "#fff", "#000"],
            resources: ["Vertical Panels Example", "On Scroll Sticky Header", "Google Fonts"],
            upChallenge: `Animate the dashed border as seen on the live website.`,
            tooEasy: `Create the sliding vertical panels, each with unique content.`,
            img: "/public/canal-street-full.webp"
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
