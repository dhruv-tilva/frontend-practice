<!-- <template>
    <div class="w-full mb-10 border-b-2 border-black md:pb-10">
        <div class="w-full max-w-screen-2xl flex justify-center flex-wrap mx-auto">
            <ProjCard v-if="filterProject.length > 0" v-for="(project, index) in filterProject" :key="index"
                :url="project.url" :level="project.level" :title="project.title" />
            <!-- <p v-else class="text-black font-archivo py-5 px-10 font-bold leading-normal bg-red-200 text-xl">Sorry, no
                results
                found for "{{ userInput }}".</p> -->
        </div>
    </div>
</template>

<script>
import ProjCard from './proj-card.vue';
export default {
    // inject: ['projects'],
    props: ['userInput', 'filterProject', 'retiredProject'],
    data() {
        return {
            dataReceived: "",
            receivedProjects: []
        }
    },
    components: {
        ProjCard
    },
    computed: {
        filteredProjects() {
            return this.projects.filter((project) => project.title.toLowerCase().includes(this.userInput.toLowerCase()))
        }
    },
    mounted() {
        console.log(this.filterProject);
    }
}
</script> -->
