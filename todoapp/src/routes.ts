import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        lazy: async () => {
            const module = await import("./pages/HomePage");
            return {Component: module.default};
        },
        children: [
            {
                path: "/todov1",
                lazy: async () => {
                    const module = await import("./pages/TodoVersion1");
                    return {Component: module.default};
                },
            },
            // {
            //     path: "/todov2",
            //     lazy: async () => {
            //         const module = await import("./pages/TodoVersion2");
            //         return {Component: module.default};
            //     },
            // },
            {
                path: "*",
                lazy: async () => {
                    const module = await import("./pages/NotFound");
                    return {Component: module.default};
                },
            },
        ],
    },
]);

export default router;