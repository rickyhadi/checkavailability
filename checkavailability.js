function checkavailability(){

	var appConfig = require('appconfig');
	var renderer = require('renderer');
	var helper = require('helper');
	var express = require('express');
	var router = express.Router();

	router.get('/', function(req, res, next) {
	  res.send('00|Success');
	});
	
	return router;
}

module.exports = checkavailability;
