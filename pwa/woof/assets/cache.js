const url = "https://dog.ceo/api/breeds/image/random";

export const saveImages = async (n) => {
    const dogCache = await caches.open("dog-cache");
    for(let i = 0; i < n; i++){
        const response = await fetch(url);
        let dogUrl = (await response.json()).message;
        console.log(dogUrl);
        await dogCache.add(dogUrl);
    }
}