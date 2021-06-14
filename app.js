const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geoCode('rome', (error, data) => {
    console.log('Geo Error:', error)
    console.log('Geo Data:', data)
})

forecast(41.89306, 12.48278, (error, data) => {
    console.log('Weather Error:', error)
    console.log('Weather Data:', data)
})