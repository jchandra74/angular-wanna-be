System.config({
    transpiler: false,
    defaultExtensions: true,
    baseURL: "/",
    packages: {
        "src": {
            main: "main.js",
            defaultExtension: "js",
            format: "cjs"
        }
    },
    map: {
        "angular": "node_modules/angular/angular.js"
    }
});