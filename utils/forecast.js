const request = require('request')

const forecast = (long, lat, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=13c4028ef37218c05e7bb2a59cb1f74d&query=${long},${lat}`

    request({url: url, json: true}, (error, response) => {

        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(response.body.error) {
            callback('Unable to sourch forecast', undefined)
        } else {
            callback(undefined,`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature}C outside. It feels like ${response.body.current.feelslike}C `)
        }
    })
}

module.exports = forecast