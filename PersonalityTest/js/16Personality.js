var scoreTypeP = 0;
var scoreTypeS = 0;
var scoreTypeI = 0;
var scoreTypeT = 0;

function calcscoreP() {
    var score = 0;
    $(".TypeP:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score / 4;

}

function calcscoreS() {
    var score = 0;
    $(".TypeS:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score / 4;

}

function calcscoreI() {
    var score = 0;
    $(".TypeI:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score / 4;

}

function calcscoreT() {
    var score = 0;
    $(".TypeT:checked").each(function () {
        score += parseInt($(this).val(), 10);
    });
    return score / 4;

}

function show16Results() {
    //alert("show16Results");

    document.getElementById("Type16").innerHTML=show16Explanation();
}

function show4cType() {
    //alert("show4cType");

    var cType="";
    if (calcscoreI() < 50) {
        cType = cType + "E";
    }
    else {
        cType = cType + "I";
    }

    if (calcscoreS() < 50) {
        cType = cType + "N";
    }
    else {
        cType = cType + "S";
    }
    if (calcscoreT() < 50) {
        cType = cType + "F";
    }
    else {
        cType = cType + "T";
    }
    if (calcscoreP() < 50) {
        cType = cType + "J";
    }
    else {
        cType = cType + "P";
    }
    return (cType);
}

//function to show description for each type

function show16Explanation() {
    //alert("show16Explanation");
    var type = show4cType();
    //alert(type);
    var description = "";
    switch (type)
    {
        case "INTJ":
            description = "Introvert, Intuitive, Thinker, Judging<br> You are imaginative and a strategic thinker. You have a plan for everything! You have a high self confidence. You tend to work alone. You enjoy sharing what you know as well, confident in your mastery of your chosen subjects, but you prefer to design and execute a brilliant plan within your field rather than share opinions on “uninteresting” distractions like gossip.<br> You could be excellent as: Architect, Analyst or Inspector"
            break;

        case "INTP":
            description = "Introvert, Intuitive, Thinker, Perceiving<br> You are an inovative inventor with an unquenchable thirst for knowledge! Your personality type is fairly rare, making up only three percent of the population, which is definitely a good thing for you, as there’s nothing you’d be more unhappy about than being “common”! You pride yourself on your inventiveness and creativity, your unique perspective and vigorous intellect. People with your type  have been responsible for many scientific discoveries throughout history. <br>You could be excellent as:  Philosopher, Architect or a dreamy Professor";
            break;

        case "ENTJ":
            description = "Extrovert, Intuitive, Thinker, Judging<br> You are a natural born leader! You tembody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. However, you are also characterized by an often ruthless level of rationality, using your drive, determination and sharp mind to achieve whatever end you’ve set for yourself. Perhaps it is best that people with your personality type make up only three percent of the population, lest you overwhelm the more timid and sensitive personality types that make up much of the rest of the world! But we have your type to thank for many of the businesses and institutions we take for granted every day. <br>You are excellent as:Commander, CPO or highly leveled Manager";
            break;
        case "ENTP":
            description = "Extrovert, Intuitive, Thinker, Perceiving<br> Your personality type is the ultimate devil’s advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see! You don’t do this because you are trying to achieve some deeper purpose or strategic goal, but for the simple reason that it’s fun! No one loves the process of mental sparring more than you, as it gives you a chance to exercise your effortlessly quick wit, broad accumulated knowledge base, and capacity for connecting disparate ideas to prove your points.<br> You would be ecxellent as:Debater, Advocate or Salesperson";
            break;
        case "INFJ":
            description = "Inrovert, Intuitive, Feeler, Judging<br> Your personality type is very rare, making up less than one percent of the population, but you nonetheless leave your mark on the world! You have an inborn sense of idealism and morality, but what sets you apart is that you are not an idle dreamer, but pcapable of taking concrete steps to realize your goals and make a lasting positive impact. <br>You would be ecxellent as: Diplomat, Psychologist or Doctor";
            break;
        case "INFP":
            escription = "Inrovert, Intuitive, Feeler, Perceiving<br> People with your personality type are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better. While you may be perceived as calm, reserved, or even shy, you have an inner flame and passion that can truly shine. Comprising just 4% of the population, the risk of feeling misunderstood is unfortunately high for you, but when you find like-minded people to spend your time with, the harmony you feel will be a fountain of joy and inspiration. <br>You would be ecxellent as: Social worker, Councelor, Rehabilitator";
            break;
        case "ENFJ":
            description = "Extrovert, Intuitive, Feeler, Judging<br> You are a natural-born leader, full of passion and charisma! Forming around two percent of the population, eople with your type of personality are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world. With a natural confidence that begets influence, you take a great deal of pride and joy in guiding others to work together to improve themselves and their community!<br> You would be ecxellent as: Teacher, Politician ";
            break;

        case "ENFP":
            description = "Extrovert, Intuitive, Feeler, Perceiving<br> You are a true free spirit! You are often the life of the party, but unlike some other extroverts, you are less interested in the sheer excitement and pleasure of the moment than you are in enjoying the social and emotional connections you make with others. Charming, independent, energetic and compassionate, the 7% of the population have your personality type and their comprise can certainly be felt in any crowd. <br> You would be ecxellent as:Writer, Journalist, TV Reporter";
            break;

        case "ISTJ":
            description = "Introvert, Sensing, Thinker, Judging<br> Your personality type is thought to be the most abundant, making up around 13% of the population. Your defining characteristic of integrity, practical logic and tireless dedication to duty make you a vital core to your family, as well as organization that uphold traditions, rules and standards, such as law offices, regulatory bodies and military. You enjoy taking responsibility for your actions, and take pride in the work you do, when working towards a goal, Logisticians hold back none of their time and energy completing each relevant task with accuracy and patience. <br>You would be ecxellent as: Psychologist, Teacher";
            break;

        case "ISFJ":
            description = "Introvert, Sensing, Feeler, Judging<br> Your personality type is quite unique, as many of your qualities defy the definition of your individual traits. Though sensitive, you have excellent analytical abilities; though reserved, you have well-developed people skills and robust social relationships; and though you are generally a conservative type, you are often receptive to change and new ideas! As with so many things, people with your personality type are more than the sum of your parts, and it is the way you use these strengths that defines who you are. <br> You would be ecxellent as:Nurse, Social or Religious Worker";
            break;
        case "ESTJ":
            description = "Extrovert, Sensing, Thinker, Judging<br> You are representative of tradition and order, utilizing your understanding of what is right, wrong and socially acceptable to bring family and community together! Embracing the values of honesty, dedication and dignity, pyou are valued for your clear advice and guidance, and you happily lead the way on difficult paths. Taking pride in bringing people together, you often take on roles as community organizer, working hard to bring everyone together in celebration of cherished local events, or in defense of the traditional values that hold family and community together. <br>You would be ecxellent as: Financial Officer, Business Administrator";
            break;
        case "ESFJ":
            description = description = "Extrovert, Sensing, Feeler, Judging<br> You are, for lack of a better word, popular! And that makes sense, given that you have also a very common personality type, making up twelve percent of the population. In high school, Consuls are the cheerleaders and the quarterbacks, setting the tone, taking the spotlight and leading their teams forward to victory and fame; they have youtr personality type. Later in life, Consuls continue to enjoy supporting their friends and loved ones, organizing social gatherings and doing their best to make sure everyone is happy. You are the exact type!<br> You would be ecxellent as: Teacher, Nurse, Counselor";
            break;
        case "ISTP":
            description = "Introvert, Sensing, Thinker, Perceiving<br> Virtuosos love to explore with your hands and your eyes, touching and examining the world around tyou with cool rationalism and spirited curiosity. You are a natural Maker! moving from project to project, building the useful and the superfluous for the fun of it, and learning from your environment as you go. You find no greater joy than in getting your hands dirty pulling things apart and putting them back together, just a little bit better than they were before! <br>You would be ecxellent as: Mechanic, Engineer, Craftsman";
            break;

        case "ISFP":
            description = "Introvert, Sensing, Feeler, Perceiving<br> You are a true artist, but not necessarily in the typical sense where you’re out painting happy little trees! Often enough though, tyou are perfectly capable of this. Rather, it’s that you use aesthetics, design and even your choices and actions to push the limits of social convention. You enjoy upsetting traditional expectations with experiments in beauty and behavior! Chances are, You’ve expressed more than once the phrase “Don’t box me in!”<br> You would be ecxellent as: Artist, Freelancer";
            break;

        case "ESTP":
            description = "Extrovert, Sensing, Thinker, Perceiving<br> You always have an impact on your immediate surroundings. Laughing and entertaining with a blunt and earthy humor, you love to be the center of attention. If an audience member is asked to come on stage, you volunteer – or volunteer a shy friend! Theory, abstract concepts and plodding discussions about global issues and their implications don’t keep you interested for long. You keep your conversation energetic, with a good dose of intelligence, but you like to talk about what is – or better yet, to just go out and do it. You leap before you look, fixing your mistakes as you go, rather than sitting idle, preparing contingencies and escape clauses. <br>You would be ecxellent as:<br> Entrepreneur, Athlete, Couch";
            break;
        case "ESFP":
            description = description = "Extrovert, Sensing, Feeler, Perceiving<br> If anyone is to be found spontaneously breaking into song and dance, it is going to be probably you! You get caught up in the excitement of the moment, and want everyone else to feel that way too. No other personality type is as generous with their time and energy as you are when it comes to encouraging others, and no other personality type does it with such irresistible style as you do.<br> You would be ecxellent as: Teacher, Counselor, Costumer Satisfaction";
            break;

        default:
            description = "Error!";
    }
    return description;


}
function show16ResultType()
{
    document.getElementById("4cType").innerHTML = show4cType().bold().fontsize(10);
}


