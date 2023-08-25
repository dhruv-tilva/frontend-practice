//hello
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/home.vue';
import Projects from './components/projects.vue';
import Contact from './components/contact.vue';
import Faq from "./components/faq.vue"
import Blog from "./components/blog.vue"
import Newsletter from "./components/newsletter.vue"
import NotFound from './components/not-found.vue'
import Ableton from "./components/ableton.vue"
import Abstract from './components/abstract.vue';
import BackstageTalks from './components/bakstage-talks.vue';
import Basic from './components/basic.vue';
import Bonsai from "./components/bonsai.vue"
import CanalStreetMarket from "./components/canal-street-market.vue"
import DeplaceMaison from "./components/deplace-maison.vue"
import FigmaMerch from './components/figma-merch.vue'
import GoDaddy from "./components/go-daddy.vue"
import Lobe from './components/lobe.vue';
import Monogram from './components/monogram.vue';
import Monstercat from './components/monstercat.vue';
import Nintendo from "./components/nintendo.vue"
import OhStudio from "./components/oh-studio.vue"
import Podia from "./components/podia.vue"
import Pulse from './components/pulse.vue'
import Qrates from "./components/qrates.vue"
import Starbuks from "./components/star-buks.vue"
import Stark from './components/starc.vue'

import Ecwid from "./components/ecwid.vue"
import Grasshopper from "./components/grass-hopper.vue"
import Instrument from "./components/instrument.vue"
import RedSquare from './components/red-square.vue'
import ShopifyDev from "./components/shopify-dev.vue"
import Sketch from "./components/sketch.vue"
import Trello from './components/trello.vue'

import Blog1 from "./components/blog1.vue"
import Blog2 from "./components/blog2.vue"
import Blog3 from "./components/blog3.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/blog', component: Blog },
        { path: '/contact', component: Contact },
        { path: '/projects', component: Projects },
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
        { path: '/blog/where-to-host-your-frontend-projects', component: Blog1 },
        { path: '/blog/build-your-portfolio-faster', component: Blog2 },
        { path: '/blog/frontend-practice-and-how-it-works', component: Blog3 },
    ]
})
import App from './App.vue'
const app = createApp(App)

app.use(router);

app.mount('#app')



