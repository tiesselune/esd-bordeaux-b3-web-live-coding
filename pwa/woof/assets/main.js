const url = "https://dog.ceo/api/breeds/image/random";
const img = document.querySelector("#picture");
const button = document.querySelector("#randomizer");

const getPicture = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        if(json.status === "success"){
            img.src = json.message;
        }
        else {
            console.error("API responded with error code.");
        }
    }
    catch(error){
        console.error("Could not fetch dog picture from API",error);
    }
}

const registerSW = async () => {
    if("serviceWorker" in navigator){
        try {
            await navigator.serviceWorker.register("/sw.js",{scope : "/"})
        }
        catch(e){
            console.error(e);
        }
    }
}

getPicture();

button.addEventListener("click", getPicture);

registerSW();