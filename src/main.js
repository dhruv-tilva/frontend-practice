
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Faq from "./components/Faq.vue"
import Blog from "./components/Blog.vue"
import Newsletter from "./components/Newsletter.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/blog', component: Blog },
        { path: '/contact', component: Contact },
        { path: '/projects', component: Projects },
        { path: '/faq', component: Faq },
        { path: '/newsletter', component: Newsletter },
    ]
})
import App from './App.vue'
const app = createApp(App)

app.use(router);

app.mount('#app')

