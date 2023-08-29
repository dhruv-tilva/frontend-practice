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
            title: "Déplacé Maison",
            subTitle: "Home page (Archived Version)",
            recreateLearn: ["Unique layout.", "Cursor animations.", "Draggable slider.", "Hover effects.", "and more!"],
            colorPattern: ["#fcf9ee", "#ddc92a", "#e7d6c4", "#141414"],
            resources: ["Gooey cursor example.", "Draggable slider tutorial.", "A Complete Guide to Flexbox"],
            upChallenge: `Create the animated gooey cursor and have it blend with other colors`,
            tooEasy: `Try building the alternating testimonials at the bottom of the page.`,
            img: "/public/deplace-maison-full.webp"
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
