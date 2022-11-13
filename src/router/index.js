import { createWebHistory, createRouter } from "vue-router";
import HomeTree from "@/views/HomeTreeView.vue";

const routes = [
    {
        path: "/",
        name: "hometree",
        component: HomeTree,
    },
    {
        path: "/manager",
        name: "manager",
        component: () => import("@/views/ManagerView.vue"),
        props: true        
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    { 
        path: "/trees/:id", 
        name: "tree.edit", 
        component: () => import("@/views/TreeEdit.vue"), 
        props: true // Truyền các biến trong $route.params vào làm props 
    },
    {
        path: "/",
        name: "tree.add",
        component: () => import("@/views/TreeAdd.vue"),
        // props: true // Truyền các biến trong $route.params vào làm props
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

