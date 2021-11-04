console.log("js!");

const router = async () => {
    const routes = [
        {path: "/", view: () => console.log("jcndjhjchj")},
        {path: "/home", view: () => console.log("llllllllllll")},
    ];

    const potentialMatches = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path
        };
    });

    console.log(potentialMatches)
};

document.addEventListener("DOMContentLoaded", () => {
    router();
})