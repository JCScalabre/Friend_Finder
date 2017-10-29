var path = require("path");
var userData = require("../data/friends.js");

var htmlRoutes = function(app) {

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("/result", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/result.html"));
	});

	// app.get("*", function(req, res) {
	// 	res.sendFile(path.join(__dirname, "../public/home.html"));
	// });

	app.get("/api/:users?", function(req, res) {
		var chosen = req.params.users;
		for (var i = 0; i < userData.length; i++) {
			if (chosen === userData[i].name) {
				res.sendFile(path.join(__dirname, "../public/profile.html"));
			}
		}
	})
}

module.exports = htmlRoutes;