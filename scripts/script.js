const API_URL = "https://workspace-methed.vercel.app/";
const LOCATION_URL =  "api/locations";




const getData = async (url, cbSuccess, cbError) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        cbSuccess(data);
    } catch (err) {
        cbError;
    }
};

const init = () => {
    const citySelect = document.querySelector('#city');
    const cityChoices = new Choices(citySelect, {
        searchEnabled: false,
        itemSelectText: '',
    });

    getData(`${API_URL}${LOCATION_URL}`, (locationData) => {
            const locations = locationData.map(location => ({
               value: location,
            }));
            cityChoices.setChoices(locations, 'value', 'label', true,);
        }, (err) => {
            console.log(err);
        },
    );
};

init()




