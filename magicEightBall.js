// Create variables for username, a question to ask, a random number, and an empty bariable for the eight ball
var userName = "Chang";
userName ? console.log("Hello, ${userName}!") : console.log("Hello!");
const userQuestion = "Will it be sunny in Seattle today?"
console.log('${userName} asked: ${userQuestion}');
randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

// Assign values to eightBall based on randomNumber
if (randomNumber === 0) {
    eightBall = "It is certain";
} else if (randomNumber === 1) {
    eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
    eightBall = "Reply hazy try again";
} else if (randomNumber === 3) {
    eightBall = "Cannot predict now";
} else if (randomNumber === 4) {
    eightBall = "Do not count on it";
} else if (randomNumber === 5) {
    eightBall = "My sources say no";
} else if (randomNumber === 6) {
    eightBall = "Outlook not so good";
} else if (randomNumber === 7) {
    eightBall = "Signs point to yes";
}

// Print the eight ball answer to the console
console.log(eightBall);
