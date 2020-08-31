import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

// asynchronous api call for Covid-19 
export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data : { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);
        return { confirmed,recovered,deaths,lastUpdate };
    } catch (error) {
        
    }
}

// asynchronous api call
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedDailyData = data.map((dailyData) => ({
            confirmed:  dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            data: dailyData.reportDate
        }))
        return modifiedDailyData;
    } catch (error) {
        
    }
}

// asynchronous api call
export const fetchCountries = async () => {
    try {
        const { data : { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}

// asynchronous api call
// export const fetchCountryData = async (country) => {
//     try {
//         const { data : { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${url}/countries/${country}`);
//         console.log({ confirmed, recovered, deaths, lastUpdate });
//         return { confirmed, recovered, deaths, lastUpdate };
//     } catch (error) {
//         console.log(error);
//     }
//}