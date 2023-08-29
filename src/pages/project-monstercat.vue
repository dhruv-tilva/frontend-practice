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
            title: "Monstercat",
            subTitle: "Album release page",
            recreateLearn: ["Dropdown Menus", "Alternating styles", "Layout practice", "Hover states", "and more!"],
            colorPattern: ["#fdfdfd", "#1e90ff", "#383838", "#000000"],
            resources: ["A Complete Guide to Flexbox HTML Tables", "The HTML <audio> Element", "Let’s Create a Custom Audio Player"],
            upChallenge: `Add the sticky audio controls menu in the top right as you scroll down.`,
            tooEasy: `Create a working play & pause button with your song of choice.`,
            img: "/public/monstercat-full.webp"
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
