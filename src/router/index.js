import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import UnitySafetyPage from '../pages/UnitySafetyPage.vue';
import VRMineralProcessor from '../pages/VRMineralProcessor.vue';
import UnityTrainingPage from '../pages/UnityTrainingPage.vue';

import DiscourseResearchPage from '../pages/DiscourseResearchPage.vue';
import LexiConcordiaPage from '../pages/LexiConcordiaPage.vue';
import ImminentPage from '../pages/ImminentPage.vue';
import StatsbergerPage from '../pages/StatsbergerPage.vue';

import AboutPage from '../pages/AboutPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },

    {
        path: '/virtual-bioengineering-lab-safety',
        name: 'virtual-bioengineering-lab-safety',
        component: UnitySafetyPage
    },

    {
        path: '/mineral-processor-simulation',
        name: 'mineral-processor-simulation',
        component: VRMineralProcessor
    },

    {
        path: '/unity-training',
        name: 'unity-training',
        component: UnityTrainingPage
    },

    {
        path: '/discourse-research',
        name: 'discourse-research',
        component: DiscourseResearchPage
    },

    {
        path: '/lexiconcordia',
        name: 'lexiconcordia',
        component: LexiConcordiaPage
    },

    {
        path: '/imminent',
        name: 'imminent',
        component: ImminentPage
    },

    {
        path: '/statsberger',
        name: 'statsberger',
        component: StatsbergerPage
    },

    {
        path: '/about',
        name: 'about',
        component: AboutPage
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;