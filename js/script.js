const API_URL = "https://workspace-methed.vercel.app/";
const LOCATION_URL = "api/locations";

const citySelect = document.querySelector('#city');
const cityChoices = new Choices(citySelect, {
    itemSelectText: "",
});

const getData = async (url, cbSuccess, cbError) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        cbSuccess(data);
    } catch(err) {
        cbError;
    }
}

getData(API_URL + LOCATION_URL,
    (data) => {
        console.log(data);
    },
    (err) => {
        console.log(err);
    },
);
