const APP_CACHE_NAME = "APP_SHELL";
const DOG_CACHE_NAME = "DOGS";
const URL = "https://dog.ceo/api/breeds/image/random";

const FILES = [
    "/",
    "/index.html",
    "/manifest.json",
    "/assets/icon_maskable.png",
    "/assets/logo.svg",
    "/assets/main.js",
    "/assets/style.css"
];


const saveShell = async () => {
    const shellCache = await self.caches.open(APP_CACHE_NAME);
    await shellCache.addAll(FILES);
};

const saveDogs = async (numberOfDogs) => {
    const dogCache = await self.caches.open(DOG_CACHE_NAME);
    for(let i = 0; i< numberOfDogs; i++){
        const resp = await fetch(URL);
        const dog_url = (await resp.json()).message;
        await dogCache.put(`/dog/${i}`, await fetch(dog_url));
    }
};

const getFile = async (req) => {
    if(req.url.includes("dog.ceo/api/breeds/image/random")){
        if(!navigator.onLine){
            const randomDog = `/dog/${Math.floor(Math.random() * 10)}`;
            const fakeResponse = new Response(JSON.stringify({status : "success", message : randomDog}));
            return fakeResponse;
        }
        else{
            return fetch(req);
        }
        
    }
    if(req.url.includes("dog.ceo")){
        return fetch(req);
    }
    if(req.url.includes("/dog/")){
        const dogCache = await self.caches.open(DOG_CACHE_NAME);
        return dogCache.match(req.url);
    }
    const shellCache = await self.caches.open(APP_CACHE_NAME);
    return shellCache.match(req.url);
};


self.addEventListener("install", (e) => {
    e.waitUntil(Promise.all([saveShell(),saveDogs(10)]));
});

self.addEventListener("fetch", (e) => {
    e.respondWith(getFile(e.request))
});