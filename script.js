
function cl(operation) {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    
    if (operation == "add") {
        document.getElementById("results").innerHTML = 
            "The sum of " + n1 + " and " + n2 + 
            " is " + add(n1, n2) + ".";
    } else if (operation == "sub") {
        document.getElementById("results").innerHTML = 
            "The difference of " + n1 + " and " + n2 + 
            " is " + sub(n1, n2) + ".";
    } else if (operation == "mul") {
        document.getElementById("results").innerHTML = 
            "The product of " + n1 + " and " + n2 + 
            " is " + mul(n1, n2) + ".";
    } else if (operation == "div") {
        document.getElementById("results").innerHTML = 
            "The quotient of " + n1 + " and " + n2 + 
            " is " + div(n1, n2) + ".";
    } else if (operation == "mod") {
        document.getElementById("results").innerHTML = 
            "The remainder of " + n1 + " divided by " + n2 + 
            " is " + mod(n1, n2) + ".";
    }
}

function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

function mul(n1, n2) {
    return n1 * n2;
}

function div(n1, n2) {
    return n1 / n2;
}

function mod(n1, n2) {
    return n1 % n2;
}

