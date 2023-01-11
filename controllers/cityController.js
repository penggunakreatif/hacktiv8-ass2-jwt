const { getCity } = require('../models/cityModel.js');

class CityController{
    static async getAllCity(req, res) {
        try {
          const query = await getCity;
          res.status(200).json(query);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    
}

module.exports = CityController;
