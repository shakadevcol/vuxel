import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "Index" */ "../views/HomeView.vue"),
    },

    {
        path: "/documentation",
        name: "documentation",
        component: () =>
            import(
                /* webpackChunkName: "documentation" */ "../views/DocumentationView.vue"
            ),
        children: [
            {
                path: "",
                name: "welcome",
                component: () =>
                    import(
                        /* webpackChunkName: "welcome" */ "../views/WelcomeView.vue"
                    ),
            },
            {
                path: "installation",
                name: "installation",
                component: () =>
                    import(
                        /* webpackChunkName: "installation" */ "../views/InstallationView.vue"
                    ),
            },
            {
                path: "about",
                name: "about",
                component: () =>
                    import(
                        /* webpackChunkName: "About" */ "../views/AboutView.vue"
                    ),
            },
            {
                path: "alert",
                name: "alert",
                component: () =>
                    import(
                        /* webpackChunkName: "alert" */ "../views/AlertView.vue"
                    ),
            },
            {
                path: "button",
                name: "button",
                component: () =>
                    import(
                        /* webpackChunkName: "button" */ "../views/ButtonView.vue"
                    ),
            },
            {
                path: "carousel",
                name: "carousel",
                component: () =>
                    import(
                        /* webpackChunkName: "carousel" */ "../views/CarouselView.vue"
                    ),
            },
            {
                path: "dialog",
                name: "dialog",
                component: () =>
                    import(
                        /* webpackChunkName: "dialog" */ "../views/DialogView.vue"
                    ),
            },

            {
                path: "multi-image-slide",
                name: "multiImageSlide",
                component: () =>
                    import(
                        /* webpackChunkName: "multiImageSlide" */ "../views/MultiImageSlideView.vue"
                    ),
            },
            {
                path: "notification",
                name: "notification",
                component: () =>
                    import(
                        /* webpackChunkName: "notification" */ "../views/NotificationView.vue"
                    ),
            },
            {
                path: "progress",
                name: "progress",
                component: () =>
                    import(
                        /* webpackChunkName: "progress" */ "../views/ProgressView.vue"
                    ),
            },
        ],
    },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;
