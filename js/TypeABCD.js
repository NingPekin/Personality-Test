var scoreTypeA = 0;
var scoreTypeB = 0;
var scoreTypeC = 0;
var scoreTypeD = 0;
var typeDic = {};
function calcscoreA() {
    var score = 0; 
    $(".TypeA:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreTypeA()
{
    scoreTypeA = calcscoreA();
    //alert(scoreTypeA);
    return scoreTypeA;
}
function calcscoreB() {
    var score = 0;
    $(".TypeB:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreTypeB() {
    scoreTypeB = calcscoreB();
    //alert(scoreTypeB);
    return scoreTypeB;
}
function calcscoreC() {
    var score = 0;
    $(".TypeC:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreTypeC() {
    scoreTypeC = calcscoreC();
    //alert(scoreTypeC);
    return scoreTypeC;
}
function calcscoreD() {
    var score = 0;
    $(".TypeD:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score;

}
function getScoreTypeD() {
    scoreTypeD = calcscoreD();
    //alert(scoreTypeD);
    return scoreTypeD;
} 
function checkAllQuestions_original() {

    for (var i = 1; i <= 16; i++)
    {
        var radio = "radio" + i;
        var isSelected = false;
        if ($("input[name='" + radio + "']:checked").length)
        {
            isSelected = true;
        }
        else {
            isSelected = false;
            alert('You have to choose one choice!');
            window.location.href = "#" + "slide=" + (i+1);
            break;
        }

    }
    if (isSelected) {
        alert("You have finished the test!");
    }
}
function getHighScore1()
{
    typeDic = { "TypeA": getScoreTypeA(), "TypeB": getScoreTypeB(), "TypeC": getScoreTypeC(), "TypeD": getScoreTypeD() };
    //var arrayScore = [getScoreTypeA(), getScoreTypeB(), getScoreTypeC(), getScoreTypeD()];
    //arrayScore.sort(function (a, b) { return b - a });
    //var score1 = arrayScore[0];
    var result = Object.keys(typeDic).sort(function (a, b) {
        return typeDic[b] - typeDic[a];
    });
    //alert(result[0]);
    return result[0];
}
//function getHighScore2() {
//    typeDic = { "TypeA": getScoreTypeA(), "TypeB": getScoreTypeB(), "TypeC": getScoreTypeC(), "TypeD": getScoreTypeD() };
//    //var arrayScore = [getScoreTypeA(), getScoreTypeB(), getScoreTypeC(), getScoreTypeD()];
//    //arrayScore.sort(function (a, b) { return b - a });
//    //var score1 = arrayScore[0];
//    var result = Object.keys(typeDic).sort(function (a, b) {
//        return typeDic[b] - typeDic[a];
//    });
//    //alert(result);
//    return result[1];
//}
function showTypeResults()
{
    //alert(getHighScore1());
    var textType1 = "Your dominant type is:  ";

    //document.getElementById("Type2").innerHTML = getHighScore2();
    if (getHighScore1() == "TypeA")
    {
        document.getElementById("Type1").innerHTML = textType1 + getHighScore1()+"<br>"+ showTypeAExplaination();
    }
    else if (getHighScore1() == "TypeB") {
        document.getElementById("Type1").innerHTML = textType1 + getHighScore1() + "<br>" + showTypeBExplaination();
    }
    else if (getHighScore1() == "TypeC") {
        document.getElementById("Type1").innerHTML = textType1 + getHighScore1() + "<br>" + showTypeCExplaination();
    }
    else if (getHighScore1() == "TypeD") {
        document.getElementById("Type1").innerHTML = textType1 + getHighScore1() + "<br>" + showTypeDExplaination();
    }

}
function showTypeAExplaination()
{
    var explain_a = "You may not be very good at recognizing co-worker's feelings and needs; not because you don't care, but because you are so focused on achieving their goals. You like to be in charge and be in control of your environment and your lives. You are normally not very detail oriented, choosing to delegate details to others. You are usually very goal oriented and practical in your solutions. However, arriving at you solutions and goals will entail a no-nonsense, 'bottom-line' approach. ";
    return explain_a;

}
function showTypeBExplaination() {
    var explain_b = "You are a very outgoing, energetic and fast paced individual who likes to be around people and enjoys being the center of attention.  You are good relationship builders and most people like you right away.  Your driving need for approval, you try and like everyone in hopes everyone will in turn reciprocate and like you too. Compliments, acknowledgement of your achievements, words of admiration and even applause from groups will be the most important thing you can do for them. ";
    return explain_b;

}
function showTypeCExplaination() {
    var explain_c = "You are a very detail oriented individual that likes to be involved in things that are controlled and stable.  You are interested in accuracy, rationality and logic.  People who can't seem to control their emotions will bother you because you believe being emotional makes objectivity difficult or perhaps impossible.  You will also dislike being around people who are full of 'hype', since you desire facts, accurate and logical, but just the facts.  Other people's emotions may not be a priority for you as you tend to strive for the facts and 'let the chips fall where you may'.";
    return explain_c;
}
function showTypeDExplaination() {
    var explain_d = "You take a slower, easy pace toward your job and life in general.  You seek security and longevity on the job and are very happy doing a repetitive task, day in and day out as the repetition allows you to become very skilled in what you do.  You won't like it, however, if the rules change a lot as that is contrary to your desire to minimize change and stick with what you know works.  Some extreme examples we've all seen or heard of are bookkeepers who refuse to computerize because you can count on the old way and don't want to change.  You will resist change out of concern that, even though the current way may be unpleasant, the unknown may be even more unpleasant. ";
    return explain_d;
}

