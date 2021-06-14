const request = require('request')
const geoCode = require('./utils/geocode')



const url = 'http://api.weatherstack.com/current?access_key=13c4028ef37218c05e7bb2a59cb1f74d&query=51.497593,-0.211816'

// request({ url: url, json: true }, (error, response) => {
//     const weather = response.body.current

//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`${weather.weather_descriptions[0]}. It is currently ${weather.temperature}C outside. It feels like ${weather.feelslike}C `)
//     }
// })

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?access_token=pk.eyJ1Ijoia3lsZXZmIiwiYSI6ImNra3htOHBzNzAyM2kzMG1zbXplbWMxaGkifQ.xptkDoeqaGkSbGcVk3eEAA&limit=1'

// request({ url: geoUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to GeoCode service')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find GeoCode')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log('Geo', latitude, longitude)
//     }
// })



geoCode('rome', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})