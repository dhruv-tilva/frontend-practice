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
            title: "Shopify Dev",
            subTitle: "Home page [RETIRED]",
            recreateLearn: ["Hover effects", "Responsive layout", "Dark mode", "Multi-column footer", "and more!"],
            colorPattern: ["#eafaf3", "#fafbfb", "#f4f6ff", "#ffffff", "#202223"],
            resources: ["Dark Mode in CSS", "A Complete Guide to Flexbox", "Multi-Level Sticky Footer"],
            upChallenge: `Is it responsive on mobile? Notice the layout changes on smaller screen sizes.`,
            tooEasy: `Add the ability to toggle between dark and light modes.`,
            img: "/public/shopify-full.webp"
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
