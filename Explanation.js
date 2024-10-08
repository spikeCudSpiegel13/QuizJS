// Importing the 'readline-sync' package to capture user input from the command line
let readlineSync = require("readline-sync");

// Importing the 'kuler' package to add color to console output
const kuler = require("kuler");

// Capturing the user's name through input
let userName  = readlineSync.question("What is Your Name?\n");

// Displaying a welcome message with the user's name and coloring it using 'kuler'
console.log(kuler(`Hi ${userName} Welcome to QuizJS`, "#c084fc"));

// Initializing the user's score to 0
let score = 0;

// Database object containing the quiz questions, options, and correct answers
const database = { 
    data : [
        {
            // First question related to equality comparison of objects in JavaScript
            question : kuler( `let a = {}, b = {}
is c.log(a) === c.log(b)
c.log(a) == c.log(b)`,"#22d3ee"),

            // Options for the first question
            options :{
                a: "false false",
                b: "true false",
                c: "false true",
                d: "true true"
            },

            // Correct answer for the first question
            correctOption: "a"
        },
        {
            // Second question about object.assign and the type of copy it creates
            question: kuler(`object.assign creates which type of copy`, "#a3e635"),

            // Options for the second question
            options :{
                a: "Shallow Copy",
                b: "deep copy",
                c: "Reference Copy",
                d: "nested copy"
            },

            // Correct answer for the second question
            correctOption: "a"
        },
        {
            // Third question about method chaining in JavaScript
            question: kuler(`Is method chaining possible with method chaining`, "#fcd34d"),

            // Options for the third question
            options: {
                a: "true", 
                b: "false",
            },

            // Correct answer for the third question
            correctOption: "b"
        }
    ]
}

// Leaderboard object containing player names and their scores
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

// Function to handle the game logic for each question
// Takes user's answer, correct answer, and question index as input
function playGame(userAnswer, correctOption, i){
    // If user's answer is correct, increment the score and display a success message
    if(userAnswer === correctOption){
        console.log(kuler("Correct Answer", "#4ade80"));
        score++;

    } else {
        // If the answer is incorrect, display an error message and show the correct answer
        console.log(kuler("Incorrect Answer", "#e11d48"))
        console.log(kuler(`The Correct Answer is ${database.data[i].correctOption}`, "#e11d48"));
    }
}

// Function to display each question and its options to the user
// Iterates over all questions in the 'database' object
function showQuestionsAndOptions(database){
    for(let i = 0; i < database.data.length; i++){
        // Displaying the question
        console.log(`Q${i + 1} ${database.data[i].question}`);
        
        // Loop through the options of each question and display them
        for (key in database.data[i].options){
            console.log(`${key} - ${database.data[i].options[key]}`);
        }

        // Asking the user to input their answer (a, b, c, d)
        let userAnswer = readlineSync.question(kuler("Please Enter Your answer? a, b, c, d\n", "#4338ca"));
        
        // Calling playGame function to evaluate the user's answer
        playGame(userAnswer, database.data[i].correctOption, i)
    }
}

// Function to update the leaderboard with the user's name and score
function highScore(leaderBoard){
    // Adding the current user's name and score to the leaderboard
    leaderBoard.data.push({name: userName, score: score});
    
    // Sorting the leaderboard in descending order of scores
    let leaderboardScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
    
    // Displaying the leaderboard
    console.log(kuler(`\n Leaderboard😁🤞🤞`, "#f97316"));
    for (leader of leaderboardScoreList){
        // Showing each player's name and score
        console.log(` Name: ${leader.name} - Score: ${leader.score}`);
    }
}

// Function call to display questions and capture user answers
showQuestionsAndOptions(database);

// Displaying the user's final score
console.log(`Your Final Score is ${score}`);

// Function call to update and display the leaderboard
highScore(leaderBoard);
