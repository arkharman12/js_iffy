/**********
TITLE: Iffy Programming
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Iffy Programming Lab
ORIGINALLY CREATED ON: 6 Feb 2019
LAST MODIFIED ON: 6 Feb 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function(){
    var elResponse = document.getElementById("name"); //grabbing the HTML id element so I can work with it
    var strQuestion = "Did you arrived to port on time?"; //default prompt question
    var strDefaultAns = "Type Yes/No"; //default prompt answer
    var strAnswer = ""; //user's answer will be stored here but empty for now
    var strMessageOne = "You have earned extra doubloons!"; //a useful string for the final answer
    var strMessageTwo = "Argh, walk the plank!"; // a useful string for the final answer
    strAnswer = prompt(strQuestion, strDefaultAns); // finally storing the user's answer
    var strFinalAnswer = strAnswer.toUpperCase(); // make the user answer uppercase

    // use an if else statements to decide if they earn doubloons or walk the plank ;)
    if (strFinalAnswer == "YES") {
        elResponse.textContent = strMessageOne;
    }
    else if (strFinalAnswer == "NO") {
        elResponse.textContent = strMessageTwo;
    }
    else {
        elResponse.textContent = "I don't understand you. Please try again!";
    }   
}); 