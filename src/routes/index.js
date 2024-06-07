import { createRouter, createWebHistory } from "vue-router";


const scrollBehavior = () => {
    return {top:0}
};

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../pages/Home.vue"),    },
    {
        path: "/about",
        name: "about",
        component: () => import("../pages/About.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("../pages/Contact.vue"),
    },
    {
        path: "/pricing",
        name: "pricing",
        component: () => import("../pages/Pricing.vue"),
    },
    {
        path: "/work",
        name: "work",
        component: () => import("../pages/Work.vue"),
    },
    {
        path: "/blog",
        name: "blog",
        component: () => import("../pages/Blog.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("../pages/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
});

export default router;
