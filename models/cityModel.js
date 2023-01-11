const { readFileSync } = require('fs');
const dataCity = readFileSync('./data/city.json');

// console.log("abcd")

const getCity = JSON.parse(dataCity);

module.exports = 
    {
        getCity
    }
