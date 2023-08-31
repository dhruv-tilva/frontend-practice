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
            title: "Figma Merch",
            subTitle: "Shop page",
            recreateLearn: ["Draggable slider", "Hover effects", "Content filtering", "and more!"],
            colorPattern: ["#ffc700", "#10a958", "#000000", "#fff"],
            resources: ["Change image on hover", "How to Create a Draggable Slider", "A Complete Guide to Flexbox"],
            upChallenge: `Build the dropdown search bar when the icon is clicked.`,
            tooEasy: `Recreate the circle with rotating text and hover animation.`,
            img: "/public/figma-full.webp"
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
