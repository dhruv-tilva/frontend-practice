
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/home.vue'
import Project from './pages/project.vue'
import Blog from "./pages/blog.vue"
import BlogWhereHost from "./pages/blog-where-host.vue"
import BlogPortfolio from './pages/blog-portfolio.vue'
import BlogFrontend from './pages/blog-frontend.vue'
import Contact from './pages/contact.vue';
import Faq from "./pages/faq.vue"

import Newsletter from "./components/newsletter.vue"
import NotFound from './components/not-found.vue'
import Ableton from "./pages/project-ableton.vue"
import Abstract from './pages/project-abstract.vue';
import BackstageTalks from './pages/project-bakstage-talks.vue';
import Basic from './pages/project-basic.vue';
import Bonsai from "./pages/project-bonsai.vue"
import CanalStreetMarket from "./pages/project-canal-street-market.vue"
import DeplaceMaison from "./pages/project-deplace-maison.vue"
import FigmaMerch from './pages/project-figma-merch.vue'
import GoDaddy from "./pages/project-go-daddy.vue"
import Lobe from './pages/project-lobe.vue';
import Monogram from './pages/project-monogram.vue';
import Monstercat from './pages/project-monstercat.vue';
import Nintendo from "./pages/project-nintendo.vue"
import OhStudio from "./pages/project-oh-studio.vue"
import Podia from "./pages/project-podia.vue"
import Pulse from './pages/project-pulse.vue'
import Qrates from "./pages/project-qrates.vue"
import Starbuks from "./pages/project-star-buks.vue"
import Stark from './pages/project-starc.vue'

import Ecwid from "./pages/project-ecwid.vue"
import Grasshopper from "./pages/project-grass-hopper.vue"
import Instrument from "./pages/project-instrument.vue"
import RedSquare from './pages/project-red-square.vue'
import ShopifyDev from "./pages/project-shopify-dev.vue"
import Sketch from "./pages/project-sketch.vue"
import Trello from './pages/project-trello.vue'

// import Blog1 from "./pages/project-blog1.vue"
// import Blog2 from "./pages/project-blog2.vue"
// import Blog3 from "./pages/project-blog3.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/blog', component: Blog },
        { path: '/contact', component: Contact },
        { path: '/projects', component: Project },
        { path: '/projects/ableton', component: Ableton },
        { path: '/faq', component: Faq },
        { path: '/newsletter', component: Newsletter },
        { path: '/:notfound', component: NotFound },
        { path: '/projects/abstract', component: Abstract },
        { path: '/projects/backstage-talks', component: BackstageTalks },
        { path: '/projects/basic', component: Basic },
        { path: '/projects/bonsai', component: Bonsai },
        { path: '/projects/canal-street-market', component: CanalStreetMarket },
        { path: '/projects/deplace-moison', component: DeplaceMaison },
        { path: '/projects/figma-merch', component: FigmaMerch },
        { path: '/projects/godaddy', component: GoDaddy },
        { path: '/projects/lobe', component: Lobe },
        { path: '/projects/monogram', component: Monogram },
        { path: '/projects/monstercat', component: Monstercat },
        { path: '/projects/nintendo', component: Nintendo },
        { path: '/projects/oh-studio', component: OhStudio },
        { path: '/projects/podia', component: Podia },
        { path: '/projects/pulse', component: Pulse },
        { path: '/projects/qrates', component: Qrates },
        { path: '/projects/starbucks', component: Starbuks },
        { path: '/projects/stark', component: Stark },
        { path: '/projects/retire/ecwid', component: Ecwid },
        { path: '/projects/retire/grasshopper', component: Grasshopper },
        { path: '/projects/retire/instrument', component: Instrument },
        { path: '/projects/retire/red-square', component: RedSquare },
        { path: '/projects/retire/shopify-dev', component: ShopifyDev },
        { path: '/projects/retire/sketch', component: Sketch },
        { path: '/projects/retire/trello', component: Trello },
        { path: '/blog/where-to-host-your-frontend-projects', component: BlogWhereHost },
        { path: '/blog/build-your-portfolio-faster', component: BlogPortfolio },
        { path: '/blog/frontend-practice-and-how-it-works', component: BlogFrontend },
    ]
})
import App from './App.vue'
const app = createApp(App)

app.use(router);

app.mount('#app')



