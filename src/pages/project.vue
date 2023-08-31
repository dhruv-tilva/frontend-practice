<template>
    <div>
        <Header />
        <Title class="my-7 md:mt-16">Project Library</Title>
        <ProjectHowToGet />
        <ViewAll />
        <RetireProjects />
        <Footer />
    </div>
</template>

<script>
import Title from "../components/title.vue"
import ProjectHowToGet from "../components/project-how-to-get.vue"
import ViewAll from "../components/view-all.vue";
import RetireProjects from "../components/retire-projects.vue";
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
export default {
    components: {
        Title,
        ProjectHowToGet,
        ViewAll,
        RetireProjects,
        Header,
        Footer
    }
}
</script>
