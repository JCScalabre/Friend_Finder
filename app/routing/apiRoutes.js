var userData = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/users", function(req, res) {
		res.json(userData);
	});

	app.post("/api/add", function(req, res) {

		// Push user input object into userData array:
		userData.push(req.body);

		// Empty array:
		var differences = [];

		// For loop that compares user to database:
		for (var j = 0; j < userData.length; j++) {

			var userAnswers = req.body.answers
			var dataAnswers = userData[j].answers

		// Loop that calculates difference between user answers and database user answers:
		var totalDiff = 0;
		for (var i = 0; i < req.body.answers.length; i++) {
			var difference = parseInt(userAnswers[i]) - parseInt(dataAnswers[i])
			totalDiff += Math.abs(difference);
		}

		// Push this list of differences into differences array:
		differences.push(totalDiff);
		console.log("Total Diff between " + req.body.name + " and " + userData[j].name + "'s answers: " + totalDiff);
		};

		console.log("Array of differences: " + differences);

		// Finding lowest number in differences array: 
		var lowestNum = differences[0];
		for (var i = 1; i < differences.length-1; i++) {
			if (differences[i] < lowestNum) {
				lowestNum = differences[i]
			}
		}

		// Finding user aka index of lowest difference in differences array:
		console.log("Smallest number from array excluding last number: " + lowestNum);
		var match = userData[differences.indexOf(lowestNum)].name
		console.log("Your match is: " + match)

		res.json({
			matchName: match,
			diff: lowestNum
		});
	});

};