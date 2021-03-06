/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        // directory name: 'build directory'
        public: "/public",
        src: "/src",
    },
    plugins: ["@snowpack/plugin-typescript"],
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
};
