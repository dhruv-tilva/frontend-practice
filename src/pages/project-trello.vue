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
            title: "Trello",
            subTitle: "About page. [RETIRED]",
            recreateLearn: ["Fixed menu", "Accordions", "Testimonial slider", "Alternating sections", "and more!"],
            colorPattern: ["#eae6ff", "#0065ff", "#ffffff", "#091e42", "#e6fcff", "#8993A4"],
            resources: ["A Complete Guide to Flexbox", "Accessible accordions", "Testimonial slider (similar)"],
            upChallenge: `Animate the accordion content & make sure they are accessible.`,
            tooEasy: `Build out the testimonial slider near the bottom of the page.`,
            img: "/public/trello-full.webp"
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
