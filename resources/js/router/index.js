import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../../views/Dashboard.vue';
import Categories from '../../views/Categories.vue';
import Products from '../../views/Products.vue';
import Parameters from '../../views/Parameters.vue';

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/categories', component: Categories },
    { path: '/products', component: Products },
    { path: '/parameters', component: Parameters },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
