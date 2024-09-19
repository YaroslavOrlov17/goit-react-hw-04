import axios from "axios";

const ACCESS_KEY = "w48nE406QPac_JiHuCS8dinob-zHN1XHUYxPavG31Zs"

export const fetchImage = async (page,query) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`
    },
    params: {
      query: query, 
      per_page: 8,
      page: page
    }
  })
  return response.data.results
}



