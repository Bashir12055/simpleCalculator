// display finction
function display(value){
    document.getElementById("result").value += value;
}


// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = " ";
}

// calculato function
function calculate() {
    var expression = document.getElementById("result").value;
    var results = eval(expression);
    document.getElementById("result").value = results;
}