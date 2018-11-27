import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import SearchResults from "./views/SearchResults.vue";

import { inventory, defineSlots } from "@/common/ads";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                ad_units: [inventory.Example_728x90, inventory.Example_300x250]
            }
        },
        {
            path: "/search/:query",
            name: "results",
            // component: SearchResults,
            component: () =>
                import(/* webpackChunkName: "results" */ "./views/SearchResults.vue"),
            meta: {
                ad_units: [
                    inventory.Example_728x90,
                    inventory.Example_300x600,
                    inventory.Example_300x250_Flex
                ]
            }
        },
        {
            path: "/search/",
            redirect: "/"
        }
    ]
});

router.afterEach((to, from) => {
    if (typeof to.meta.ad_units !== "undefined") {
        defineSlots(to.meta.ad_units);
    }
});

router.beforeEach((to, from, next) => {
    if (typeof window.googletag.destroySlots === "function") {
        window.googletag.destroySlots();
    }
    next();
});

export default router;
