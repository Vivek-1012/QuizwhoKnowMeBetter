var readlinesync = require("readline-sync")


console.log("Welcome to the quiz who knows Vivek best!!!... kindly send me screenshot of your score")
score = 0
console.log("_________")

 var userName = readlinesync.question("May I know your sweet name ? ")
console.log("-------------")
console.log("Welcome " + userName + " ,thank you for participating in the quiz .. DO VISITE ALL THE QUESTION ... all the very best :) ")
console.log("-----")

console.log("Instruction please use lowerletter or else your answer may be wrong!!!!!!!!!!")

console.log("----------")
function play(question, answer) {
  var userAnswer = readlinesync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("great u a right!!")
    score = score + 1

  }
  else {
    console.log("oops u r wrong ")

  }
  console.log(score)

}

play("what is my favourite food ? ", "chole bhature");
play("what is my favourite colour? ", "blue");
play("what is my favourite game? ", "football");
play("what is my favourite hooby? ", "gym")
play("where do I live? ", "gurugram")






console.log("-----------")
var answer1 = readlinesync.question("Who is my favourite person? ")
console.log("----YOU " + userName + " WILL ALWAYS BE MY FAVOURITE <3-----")


console.log("---------")
console.log("your score final score is " + score)
console.log("thank u for playing :)")
