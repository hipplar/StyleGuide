
/*

1) variable declarations
 1.1) single var declaration at top of function (scope)
 1.2) alphabetize variable declarations
 1.3) use full names, not abbreviations
 1.4) tab indent declarations for alignment
	1.4.1) convert tabs to spaces in your editor
 1.5) multiple property assignments should break across lines 

*/
var Event 				= mongoose.model('Event'),
	FB 					= require('../libs/fb-node')(require('fb')),
	Like 				= mongoose.model('Like'),
	moment    			= require('moment'),
	mongoose 			= require('mongoose'),
	ObjectId 			= mongoose.Types.ObjectId,
	Photo 				= mongoose.model('Photo'),
	qs          		= require('querystring'),
	RayRay				= mongoose.model('RayRay'),
	request     		= require('request'),
	restler 			= require('restler'),	
	Score 				= mongoose.model('Score'),
	Step 				= require('step'),
	TwitterAuthToken 	= mongoose.model('TwitterAuthToken'),
	User 				= mongoose.model('User');

module.exports = function(app) {

    app.get('/', function (req, res, next) {
        
        var facebookLogin = new {
            username:   "larry.hipp", 
            firstName:  "Larry", 
            lastName:   "Hipp"
        };

    }
}