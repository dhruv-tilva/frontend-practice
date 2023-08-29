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
            title: "Abstract",
            subTitle: "Help page",
            recreateLearn: ["Minimal layout", "Search inputs", "Buttons", "Multi-column footer", "and more!"],
            colorPattern: ["#4C5FD5", "#dadbf1", "#000000", "#fff"],
            resources: ["HTML search input", "A Complete Guide to Flexbox", "Creating a button", "Multi-Level Sticky Footer"],
            upChallenge: `Make sure pressing "Enter" works with the search field.`,
            tooEasy: `Is it responsive on mobile? Try adding the hamburger menu, also.`,
            img: "/public/C2-abstract full.webp"
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
