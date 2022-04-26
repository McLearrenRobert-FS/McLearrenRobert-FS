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

// I'm wrapping the previous code in a function so I can call it with a button. I'll modify from there.
function loadQuest() {
// welcoming the user
    console.log("Welcome to Sanford! To begin with, are you traveling with a child?")

// I'm setting the current question to a variable so I can use it in the function below it.
    currQuestion = "Are you traveling with a child?";
    userPrompt = prompt(currQuestion, "Yes or No")
    yesOrNo (userPrompt);



// this is where it gets tricky this is where the two main tracks split off of each other.
// CHILDREN TRACK
if (userPrompt.toUpperCase() === "YES" ) {

    const element = document.getElementById("choice_1");
    element.innerHTML = "You're travelling with a child.";




    agePrompt = prompt("What age is the child? Please enter an age between 1 and 18", "10")

    // first I need to make sure that the input is acceptable.

    while (agePrompt <1 || agePrompt >18) {
        alert("Please enter a number between 1 and 18")
        agePrompt = prompt("What age is the child? Please enter an age between 1 and 18", "10")

    }

if (agePrompt >= 1 && agePrompt <= 8 ) {
// send the first array
    const element = document.getElementById("choice_2");
    element.innerHTML = ages[0];

    // adding the child's age
    const choice_3 = document.getElementById("choice_3");
    element.innerHTML = "Their age is " + agePrompt + ".";

    // adding the description
    const choice_description = document.getElementById("choice_description");
    choice_description.innerHTML = "Description: Show your support for the Zoo. Making learning a hands-on, wildly fun experience. With education programs for all ages, the Central Florida Zoo makes growing your knowledge of local, endangered and exotic species feel like an adventure you will never want to end.";


    // updating the image
    const image_edit = document.getElementById("choice_image");
    image_edit.src = "images/zoo.jpg";

    alert(ages[0]);
}
else if (agePrompt >= 9 && agePrompt <= 13) {
    // send the second array
    const element = document.getElementById("choice_2");
    element.innerHTML = ages[1];

    // adding the child's age
    const choice_3 = document.getElementById("choice_3");
    element.innerHTML = "Their age is " + agePrompt + ".";

    // adding the description
    const choice_description = document.getElementById("choice_description");
    choice_description.innerHTML = "Description: Lake Jesup is one of the largest lakes in Central Florida, one of many that make up the St. Johns River. Located in the heart of Seminole County along the middle basin of the St. Johns, the lake encompasses an area of approximately 16,000 acres, including open water and floodplain";

    // updating the image
    const image_edit = document.getElementById("choice_image");
    image_edit.src = "images/lake_jesup.jpg";

    alert (ages[1])

    }
else if (agePrompt >= 14 && agePrompt <= 18)
    {
        // send the third array
        const element = document.getElementById("choice_2");
        element.innerHTML = ages[2];

        // adding the child's age
        const choice_3 = document.getElementById("choice_3");
        element.innerHTML = "Their age is " + agePrompt + ".";

        // adding the description
        const choice_description = document.getElementById("choice_description");
        choice_description.innerHTML = "Description: JOIN US FOR AN ADVENTURE UP IN THE TREES! Navigate your way from tree to tree using rope bridges, zips, suspended disks, and a variety of unique elements for this exciting challenge for your body and mind.";

        // updating the image
        const image_edit = document.getElementById("choice_image");
        image_edit.src = "images/zip_lining.jpg";


        alert(ages[2])

    }



}
// NO CHILDREN TRACK
else if (userPrompt.toUpperCase()==="NO") {
    // since they don't have kids I couldn't think of a good option of things to do, so I'm just helping them find something to eat.

        const element = document.getElementById("choice_1");
        element.innerHTML = "You're not travelling with a child";

    currQuestion = "Would you like some seafood?";
    userPrompt = prompt(currQuestion, "Yes or No")
    yesOrNo (userPrompt);
    // asking if they like seafood
    if (userPrompt.toUpperCase() === "YES") {

        const element = document.getElementById("choice_2");
        element.innerHTML = eating[0];

        // adding the food preference
        const choice_3 = document.getElementById("choice_3");
        element.innerHTML = "You prefer seafood!";

        // adding the description
        const choice_description = document.getElementById("choice_description");
        choice_description.innerHTML = "Description: Waterside eatery with a light-filled dining room, outdoor tables & a hearty menu  of chops & seafood.";

        // updating the image
        const image_edit = document.getElementById("choice_image");
        image_edit.src = "images/st_johns.jpg";

        alert(eating[0])

    }

    // if they don't, then we'll ask them the next question
    else {

        currQuestion = "Would you like pizza & pasta?";
        userPrompt = prompt(currQuestion, "Yes or No")
        yesOrNo (userPrompt);

        if (userPrompt.toUpperCase() === "YES") {
            const element = document.getElementById("choice_2");
            element.innerHTML = eating[1];

            // adding the food preference
            const choice_3 = document.getElementById("choice_3");
            element.innerHTML = "You prefer pizza and pasta!";

            // adding the description
            const choice_description = document.getElementById("choice_description");
            choice_description.innerHTML = "Description: Chianti has graced the tables of many family dinners and first dates, and brings back memories of a simpler time, when the family met every evening to discuss family events, world news and celebrate milestones. . We have built Chianti's Pizza and Pasta in Seminole County.";

            // updating the image
            const image_edit = document.getElementById("choice_image");
            image_edit.src = "images/chianti.jpg";


            alert(eating[1])

        }

        // the third and final tier!
        else    {

            currQuestion = "Would you like a beer with dinner?";
            userPrompt = prompt(currQuestion, "Yes or No")
            yesOrNo (userPrompt);

            if (userPrompt.toUpperCase() === "YES") {
                const element = document.getElementById("choice_2");
                element.innerHTML = eating[2];

                // adding the food preference
                const choice_3 = document.getElementById("choice_3");
                element.innerHTML = "You'd prefer to have a beer with dinner.'";


                // adding the description
                const choice_description = document.getElementById("choice_description");
                choice_description.innerHTML = "Description: Enjoy a 100+ seat taproom with a 15bbl brewhouse and a 3bbl pilot system. Part eatery, part pub, part brewery - Sanford Brewing Company is your community meeting place. Savor handcrafted beer, meads, ciders and specialty sodas. Taste the freshness of locally sourced ingredients. Relish the company of local musicians. Soak in the quintessential southern hospitality.  ";

                // updating the image
                const image_edit = document.getElementById("choice_image");
                image_edit.src = "images/sanford_brewing.jpg";



                alert(eating[2])

            }

            else{
                if (userPrompt.toUpperCase() === "NO") {
                    const element = document.getElementById("choice_2");
                    element.innerHTML = eating[3];

                    // adding the food preference
                    const choice_3 = document.getElementById("choice_3");
                    element.innerHTML = "You'd prefer not to have a beer with dinner.";

                    // adding the description
                    const choice_description = document.getElementById("choice_description");
                    choice_description.innerHTML = "Description: The Corner Cafe in Beautiful Historic Downtown Sanford. If you are looking for an incredible place to find delicious, healthy, Chef-prepared food, you've come to the right place. Open for breakfast, lunch and dinner for groups of 16 or more, The Corner Cafe has been rated among the best restaurants in central Fl! ";

                    // updating the image
                    const image_edit = document.getElementById("choice_image");
                    image_edit.src = "images/corner_cafe.jpg";


                    alert(eating[3])

                }

            }

        }



    }

    }


}
;


