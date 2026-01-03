 //Pseudocode - before you start coding, do your pseudocoding 

//Global scope
 //Create and assign variables for name, subject, and score using window.prompt() function
 let firstName = window.prompt("Enter your name");
let subject = window.prompt("Enter your subject");
let score = window.prompt("Enter your score");

 //Convert the score to a number
let scoreToNumber = Number.parseInt(score)

//Create an array to hold them
let personalDetails = [firstName, subject, score];

let grade = '';


function validateLength(){
    //Use a for statement to go over the 1st and 2nd elements in the array(firstName and subject) and check that they are not less than 2 characters
     for (let index = 0; index < personalDetails.length; index++) {//Start from the 1st element of the array, end at the last, and move till the last element is reached
        if (personalDetails[index].length < 2) { //At the current element, check if the length is less than or equal to 3
            window.alert("firstName or subject are less than 2 characters");
            window.location.reload();
        }
    }
    //If any of those elements is less than 2 characters, reload this program using window.location.reload(). This will clear all the variables

   
}

function calculateGrade(){
    //Check if the 3rd element is not above 100 and below 0. If it is, reload this program using window.location.reload(). This will clear all the variables
    if(personalDetails[2]>100) {
        window.location.reload();
    }
    if(personalDetails[2]<0) {
        window.location.reload();
    }

    //If it is not, then create a variable called grade and let it be empty
    

    //Depending on the score, assign a grade to it using if-else
    /*
        Here are the grades:
        Score between 70 and 100 - A
        Score between 60 and 69 - B
        Score betwwen 50 and 59 - C
        Score between 0 and 49 - D
    */
   if(personalDetails[2]>=70 && personalDetails[2]<=100) {
    grade = 'A';
   }
   if(personalDetails[2]>=60 && personalDetails[2]<=69) {
    grade = 'B';
   }
    if(personalDetails[2]>=50 && personalDetails[2]<=59) {
    grade = 'C';
   }
   if(personalDetails[2]>=0 && personalDetails[2]<=49) {
    grade = 'D';
   }

   window.alert("Your grade is " + grade);
   
}

function displaySummary(){
        //Display the name, subject, and grade using windows.alert(). Feel free to add some other text using the concatenate operator
    window.alert("Your name, subject and grade is " + firstName + " " + subject + " " + grade);

}











