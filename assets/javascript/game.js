$(document).ready(function () {

    //variables to track count
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var randomNumber = 0;
    var gem1 = Math.floor(Math.random() * 12) + 1;
    var gem2 = Math.floor(Math.random() * 12) + 1;
    var gem3 = Math.floor(Math.random() * 12) + 1;
    var gem4 = Math.floor(Math.random() * 12) + 1;

    function random() {
        randomNumber = Math.floor(Math.random() * 12) + 1;
    }
    //Sets the target for the player between 19 & 120
    var targetScore = Math.floor(Math.random() * 101) + 19;
    $('#scoreToMatch').text(targetScore);


    function startOver() {
        var targetScore = Math.floor(Math.random() * 101) + 19;
        $('#scoreToMatch').text(targetScore);
        totalScore = 0;
        $('#totalScore').text(totalScore);
        var gem1 = Math.floor(Math.random() * 12) + 1;
        var gem2 = Math.floor(Math.random() * 12) + 1;
        var gem3 = Math.floor(Math.random() * 12) + 1;
        var gem4 = Math.floor(Math.random() * 12) + 1;
    }
    //Sets the value of each button 

    $("#btn1").click(function () {
        totalScore = totalScore + gem1;
        $("#totalScore").text(totalScore);

        if (totalScore == targetScore) {
            startOver();
            wins++;
            $("#w-stat").text("Wins: " + wins);
           
        } else if (totalScore > targetScore) {
            startOver();
            losses++;
            $("#l-stat").text("Losses: " + losses);
        }
    });

    $("#btn2").click(function () {
        totalScore = totalScore + gem2;
        $("#totalScore").text(totalScore);
        if (totalScore == targetScore) {
            startOver();
            wins++;
            $("#w-stat").text(wins);
        } else if (totalScore > targetScore) {
            startOver();
            losses++;
            $("#l-stat").text(losses);
        }
    });

    $("#btn3").click(function () {
        totalScore = totalScore + gem3;
        $("#totalScore").text(totalScore);
        if (totalScore == targetScore) {
            startOver();
            wins++;
            $("#w-stat").text(wins);
        } else if (totalScore > targetScore) {
            startOver();
            losses++;
            $("#l-stat").text(losses);
        }
    });

    $("#btn4").click(function () {
        totalScore = totalScore + gem4;
        $("#totalScore").text(totalScore);
        if (totalScore == targetScore) {
            startOver();
            wins++;
            $("#w-stat").text(wins);
        } else if (totalScore > targetScore) {
            startOver();
            losses++;
            $("#l-stat").text(losses);
        }
    });

});
