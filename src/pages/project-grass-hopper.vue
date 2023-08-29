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
            title: "Grasshopper",
            subTitle: "Home page [RETIRED]",
            recreateLearn: ["Testimonial sliders", "Text & hover animations", "Menu hide/appear on scroll", "and more!"],
            colorPattern: ["#45c14e", "#dff8eb", "#4ee8e2", "#00324b", "#002c43", "#fcfcfc"],
            resources: ["Beginner’s Guide to Web Animation", "How To - Slideshow", "A Complete Guide to Flexbox"],
            upChallenge: `Animate the page content to appear as you scroll down.`,
            tooEasy: `Recreate the marquee animation near the bottom of the page.`,
            img: "/public/grasshopper-full.webp"
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
