import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos" , {
        headers: {
            Authorization: "Client-ID 99LTS30Lf7HMtTfOnhubNVwknrR_PgED8S4423qTgJI"

        },
        params : {
            query: term

        }
    });
    return response.data.results
};


export default searchImages