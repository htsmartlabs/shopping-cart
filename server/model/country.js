const mongoose = require('../config/database');

const countrySchema = new mongoose.Schema({
    country:String,
    province:[{_id:false,name:String,city:[String]}]
});

const countryModel = mongoose.model('country',countrySchema);

module.exports = countryModel;

/*
const countrySchema = new mongoose.Schema({
    country:String,
    province:[{name:String},{city:[String]}]
});

const countrySchema = new mongoose.Schema({
    country:String,
    province:[String]
});


{
    province:[{type:String}]
	"country":"Canada",
	"province":[
		{
			"name":"ON",
			"city":["Hamilton","Toronto"]
		},
		{
			"name":"BC",
			"city":["Vancover","Vegas"]
			
		}
	]
}*/
  