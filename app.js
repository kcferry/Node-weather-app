const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=13c4028ef37218c05e7bb2a59cb1f74d&query=37.8267,-122.4233'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})