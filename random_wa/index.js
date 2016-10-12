/*	Before you run this app, you need ES6 your node engine should be ^6.*.* 
	to check your node engine version 
	run $ node -v
*/

const request = require('request');

//This will automatically run a check your location weather once you run this app.
check();

function check(){ 
	const ROOT_URL = `http://ipinfo.io`;
	request({
		url: ROOT_URL,
		json: true
	}, function(err, res, body){
		if(err){
			console.error('location not founded')
		}
		console.log(`We detected your location to be ${body.city}`);
		return weather(body.city)
	})
}


function weather(location = ''){
	const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=f962dceecbf8f2c3a14c48c7aeb9af10`
	request({
		url: ROOT_URL,
		json: true
	}, function(err, res, body){
	if(err){
	console.error('error occurred');
	}
	const details = JSON.stringify(body, null, 4);
	console.log(`The country weather details are as per below: ${details}`)
	})
}


//input your country here, rmb to make it into string
// weather();

