/*
So I want to welcome the  user and ask them if they are travelling with children

If yes > What ages are the children?

If ages are 1-8 suggest taking them to the zoo
if ages are 9-13 take them to lake Jesup
if they are 14-18 take them zip lining


If No > What kind food would you like to eat?

Would you like seafood?
If Yes : Try St. Johns River Steak and Seafood!
If No:
Would you like pizza and pasta?
If Yes: Try Chianti's Pizza
If No:
Would you like a beer with dinner?
If Yes: Try Sanford Brewing Company
If No: Try The Corner Cafe!

 */
// setting up the arrays for the answers
let ages = ["Take them to the Zoo!", "Take them to Lake Jesup!", "Take them Zip Lining!" ];
let eating = ["Try St. Johns River Steak & Seafood!", "Try Chianti's Pizza & Pasta!" , "Try Sanford Brewing Company" , "Try The Corner Cafe!"];

let answer;
let userPrompt;
let agePrompt;
let currQuestion;


// creating a function to make sure that there are answers.
function yesOrNo (let){while (userPrompt === "Yes or No") {
    alert("Please enter Yes or No")
    userPrompt = prompt(currQuestion, "Yes or No")
    return userPrompt;
}}

// welcoming the user
console.log("Welcome to Sanford! To begin with, are you traveling with a child?")

// I'm setting the current question to a variable so I can use it in the function below it.
currQuestion = "Are you traveling with a child?";
userPrompt = prompt(currQuestion, "Yes or No")
yesOrNo (userPrompt);

// this is where it gets tricky this is where the two main tracks split off of each other.
// CHILDREN TRACK
if (userPrompt.toUpperCase() === "YES" ) {

    agePrompt = prompt("What age is the child? Please enter an age between 1 and 18", "10")

    // first I need to make sure that the input is acceptable.

    while (agePrompt <1 || agePrompt >18) {
        alert("Please enter a number between 1 and 18")
        agePrompt = prompt("What age is the child? Please enter an age between 1 and 18", "10")

    }

if (agePrompt >= 1 && agePrompt <= 8 ) {
// send the first array
    alert(ages[0]);
}
else if (agePrompt >= 9 && agePrompt <= 13) {
    // send the seconnd array
    alert (ages[1])

    }
else if (agePrompt >= 14 && agePrompt <= 18)
    {
        // send the third array
        alert(ages[2])

    }



}
// NO CHILDREN TRACK
else if (userPrompt.toUpperCase()==="NO") {
    // since they don't have kids I couldn't think of a good option of things to do, so I'm just helping them find something to eat.

    currQuestion = "Would you like some seafood?";
    userPrompt = prompt(currQuestion, "Yes or No")
    yesOrNo (userPrompt);
    // asking if they like seafood
    if (userPrompt.toUpperCase() === "YES") {
        alert(eating[0])

    }

    // if they don't, then we'll ask them the next question
    else {

        currQuestion = "Would you like pizza & pasta?";
        userPrompt = prompt(currQuestion, "Yes or No")
        yesOrNo (userPrompt);

        if (userPrompt.toUpperCase() === "YES") {
            alert(eating[1])

        }

        // the third and final tier!
        else    {

            currQuestion = "Would you like a beer with dinner?";
            userPrompt = prompt(currQuestion, "Yes or No")
            yesOrNo (userPrompt);

            if (userPrompt.toUpperCase() === "YES") {
                alert(eating[2])

            }

            else{
                if (userPrompt.toUpperCase() === "NO") {
                    alert(eating[3])

                }

            }

        }



    }




}
;


