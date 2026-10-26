let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " year old "
        + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    // get values from form 
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked
    let honeySelected = document.getElementById("honey").checked

    // give result based on what they selected
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth?"
    }

    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna = yuck!"
    }
    
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", You are correct!"
    }

}



function trivia2() {
    let triviaAnswer = document.getElementById("trivia2-answer");

    // get values from form 
    let yesSelected = document.getElementById("statement1").checked;
    let noSelected = document.getElementById("statement2").checked
    let maybeSelected = document.getElementById("statement3").checked

    // give result based on what they selected
    if (yesSelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!"
    }
    else if (noSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong!"
    }
    else if (maybeSelected) {
        triviaAnswer.innerHTML = fname + ", you are unsure!"
    }
}