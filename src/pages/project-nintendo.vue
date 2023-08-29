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
            title: "Nintendo",
            subTitle: "Game info page",
            recreateLearn: ["Dropdown menus.", "Hover animations.", "Image lightboxes.", "Content carousels.", "and more!"],
            colorPattern: ["#e60012", "#0b2b6b", "#d6f0fa", "#efefef", "#ffffff", "#434242"],
            resources: ["Create A Lightbox", "Beginner’s Guide to Web Animation", "Create a Clickable Dropdown"],
            upChallenge: `Try creating the image lightbox gallery & the search bar's dropdown panel.`,
            tooEasy: `If animations are your jam, recreate the effect when hovering the hearts on this page.`,
            img: "/public/nintendo-full.webp"
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
