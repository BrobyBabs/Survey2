
const answers = new URLSearchParams(window.location.search);

function updateSliderValue(sliderID, valueID){
    //store slider value in the variable called sliedrValue
    let sliderValue = document.getElementById(sliderID).value;
    //change the DOM based on the sliderValue
    document.getElementById(valueID).innerHTML = sliderValue;
}

function evaluateResult(){
    // TODO: write some code to calculate the user input
    var total;
    var creeps = answers.get('csm');
    total += creeps;
    var kpp = answers.get('kpp');
    total += kpp;
    var wardScore = answers.get('wards');
    total += wardScore;
    var goldPer = answers.get('goldearned');
    total += goldPer;
    var kda = answers.get('kda');
    total += kda;
    var objControl = answers.get('objectives');
    total += objControl;
    var teamFightDurability = answers.get('tfd');
    total += teamFightDurability;
    var cons = answers.get('consistency');
    total += cons;
    console.log(total)
    return total;
}

function storeData(){
    let score = evaluateResult();
    window.localStorage.setItem('score', score);
}

function readData(){
    //get the score from localstorage
    let result = window.localStorage.getItem('score');
    //pass the data to DOM
    document.getElementById('score').innerHTML = result;
}

// var slider = document.getElementById("cs");
// var output = document.getElementById("creepscore");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }

// var slider = document.getElementById("kp");
// var output = document.getElementById("kps");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }



// var slider = document.getElementById("ward");
// var output = document.getElementById("ws");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }

// var slider = document.getElementById("gold");
// var output = document.getElementById("gpm");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }

// var slider = document.getElementById("akda");
// var output = document.getElementById("k");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }

// var slider = document.getElementById("obj");
// var output = document.getElementById("objc");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }

// var slider = document.getElementById("tf");
// var output = document.getElementById("atfd");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }

// var slider = document.getElementById("c");
// var output = document.getElementById("con");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }