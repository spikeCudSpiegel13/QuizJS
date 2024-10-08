let readlineSync = require("readline-sync");
const kuler = require("kuler");
let userName  = readlineSync.question("What is Your Name?\n");
console.log(kuler(`Hi ${userName} Welcome to QuizJS`, "#c084fc"));

let score = 0;

const database = { 
    data : [
        {
            question : kuler( `let a = {}, b = {}
is c.log(a) === c.log(b)
c.log(a) == c.log(b)`,"#22d3ee"),

            options :{
                a: "false false",
                b: "true false",
                c: "false true",
                d: "true true"
            },

            correctOption: "a"
        },
        {
            question: kuler(`object.assign creates which type of copy`, "#a3e635"),

            options :{
                a: "Shallow Copy",
                b: "deep copy",
                c: "Reference Copy",
                d: "nested copy"
            },
            correctOption: "a"
        },
        {
            question: kuler(`Is method chaining possible with method chaining`, "#fcd34d"),
            options: {
                a: "true", 
                b: "false",
            },
            correctOption: "b"
        }
    ]
}

const leaderBoard = {
    data : [
        {
            name: "Ashish",
            score: 1
        },
        {
            name: "Rahul",
            score: 2
        },
        {
            name: "Laila",
            score: 3
        }

    ]
}





function playGame(userAnswer, correctOption, i){
    if(userAnswer === correctOption){
        console.log(kuler("Correct Answer", "#4ade80"));
        score++;

    }else{
        console.log(kuler("Incorrect Answer", "#e11d48"))
        console.log(kuler(`The Correct Answer is ${database.data[i].correctOption}`, "#e11d48"));
        
    }
}

function showQuestionsAndOptions(database){
    for(let i = 0; i < database.data.length; i++){
        console.log(`Q${i + 1} ${database.data[i].question}`);
        for (key in database.data[i].options){
            console.log(`${key} - ${database.data[i].options[key]}`);
        }
        let userAnswer = readlineSync.question(kuler("Please Enter Your answer? a, b, c, d\n", "#4338ca"));
        playGame(userAnswer, database.data[i].correctOption, i)
    }
}

function highScore(leaderBoard){
    leaderBoard.data.push({name: userName, score: score})
    let leaderboardScoreList = leaderBoard.data.sort((a, b) => b.score - a.score)
    console.log(kuler(`\n Leaderboard😁🤞🤞`, "#f97316"));
    for (leader of leaderboardScoreList){
        console.log(` Name: ${leader.name} - Score: ${leader.score}`)
    }
}

showQuestionsAndOptions(database);
console.log(`Your Final Score is ${score}`)
highScore(leaderBoard);