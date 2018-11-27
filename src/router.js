import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

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
    console.info(`Navigating from ${from.name} to ${to.name}`);
    if (typeof to.meta.ad_units !== "undefined") {
        console.info(`Defining ${to.meta.ad_units.length} Ad Slots.`);
        defineSlots(to.meta.ad_units);
    }
});

router.beforeEach((to, from, next) => {
    if (typeof window.googletag.destroySlots === "function") {
        console.info("Destroying slots...");
        window.googletag.destroySlots();
    }
    next();
});

export default router;
