import axios from 'axios'

const instanceForCitiesDB = axios.create({
    baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
    headers: {
        'x-rapidapi-key': '7653ff45ebmsh20cbf8fe3083e55p1e93e6jsnf72b29966f77',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
})

export const citiesDbAPI = {
    getCitiesByNamePrefix(prefix) {
        return instanceForCitiesDB
            .get(`cities?languageCode=ru&countryIds=Q159&limit=10&sort=-population&namePrefix=${prefix}`)
    }
}