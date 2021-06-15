const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

geoCode(location, (error, data) => {

    if(error) {
        return console.log('Geo Error:', error)
    }
    if(!location) {
        return console.log('Please provide a location')
    }
    
    forecast(data.latitude, data.longitude, data.location, (error, forecastData) => {
        if(error) {
            return console.log('Weather Error:', error)
        }
        
        console.log(data.location)
        console.log(forecastData)
})
})

