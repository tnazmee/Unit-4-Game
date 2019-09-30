$(document).ready(function () {
	var crystalText = [];

	for (var i = 45; i < 95; i++) {
		crystalText.push(i);
	}

	var crystals = [];

	for (var j = 1; j < 11; j++) {
		crystals.push(j);
	}

	var crystalNum;
	var crystalNumbers = [];

	var crystal1;
	var crystal2;
	var crystal3;
	var crystal4;

	var totalScore = 0;
	var wins = 0;
	var losses = 0;

	function pickRandomNumber(arr) {
		var x = arr[Math.floor(Math.random() * arr.length)];
		crystalNum = x;
		$("#randomNumber").html(crystalNum);
	}

	function pickRandomCrystals(arr) {
		for (var k = 0; k < 4; k++) {
			var prc = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(prc);
		}
	}

	function crystalValues(arr) {
		for (l = 0; l < arr.length; l++) {
			$("#button-" + (l + 1)).attr("value", arr[l]);
		}
		crystal1 = arr[0];
		crystal2 = arr[1];
		crystal3 = arr[2];
		crystal4 = arr[3];
	}

	function resetGame(x) {
		crystalNumbers = [];
		pickRandomNumber(crystalText);
		pickRandomCrystals(crystals);
		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	}

	pickRandomNumber(crystalText);
	pickRandomCrystals(crystals);
	crystalValues(crystalNumbers);

	$("#button-1").on("click", function () {
		totalScore += crystal1;
		$("#totalNumber").html(totalScore);
	});

	$("#button-2").on("click", function () {
		totalScore += crystal2;
		$("#totalNumber").html(totalScore);
	});

	$("#button-3").on("click", function () {
		totalScore += crystal3;
		$("#totalNumber").html(totalScore);
	});

	$("#button-4").on("click", function () {
		totalScore += crystal4;
		$("#totalNumber").html(totalScore);
	});

	$(".crystalImg").on("click", function () {
		if (totalScore == crystalNum) {
			wins++;
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);

			setTimeout(function () {
				resetGame("GOOD JOB! YOU WON!!")
			}, 200);
		} else if (totalScore > crystalNum) {
			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function () {
				resetGame("Sorry dude, you lost:(")
			}, 200);
		}
	});

});