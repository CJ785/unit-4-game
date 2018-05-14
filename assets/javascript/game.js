$(document).ready(function () {

    //variables to track count
    var wins = 0;
    var losses = 0;
    var total = 0;
    var totalScore = 0;
    var btn1value;
    var currentScore = [];
    function random() {
        randomNumber = Math.floor(Math.random() * 12) + 1
    }
    //Sets the target for the player
    var targetScore = Math.floor(Math.random() * 101) + 19;
    $("#scoreToMatch").append(targetScore);

    if (wins === 10) {
        alert("You Won!!")
        wins = 0;
        losses = 0;
        total = 0;
        currentScore = 0;
        var targetScore = Math.floor(Math.random() * 101) + 19;
        $("#scoreToMatch").append(targetScore);
    }
    else if (targetScore === total) {
        wins++;
    } else if (total > targetScore) {
        losses++;
    }

    //Sets the value of each button and pushes to an array

    $("#btn1").click(function () {
        random();
        currentScore.push(randomNumber);
        total = (currentScore.reduce((a,b) => a + b));
        $("#totalScore").append(total);
    });


    var btn2value = Math.floor(Math.random() * 12) + 1;
    $("#btn2").click(function () {
        var btn2value = Math.floor(Math.random() * 12) + 1;
        total = currentScore.join() + btn2value;
        $("#totalScore").append(total);
    });

    var btn3value = Math.floor(Math.random() * 12) + 1;
    $("#btn3").click(function () {
        var btn3value = Math.floor(Math.random() * 12) + 1;
        $("#totalScore").append(btn3value);
    });

    var btn4value = Math.floor(Math.random() * 12) + 1;
    $("#btn4").click(function () {
        var btn4value = Math.floor(Math.random() * 12) + 1;
        $("#totalScore").append(btn4value);
    });

});




