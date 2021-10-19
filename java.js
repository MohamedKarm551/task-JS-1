document.getElementById("res").onclick = function() {
    var num1 = document.getElementById("x").value;
    var num2 = document.getElementById("y").value;
    var result = 0;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1);
    console.log(num2);
    if (document.getElementById("select").value == "-") {
        result = (num1 - num2);
        console.log(result);
        document.getElementById("result").innerHTML = "result is : " + result;
    } else if (document.getElementById("select").value == "+") {
        result = (num1 + num2);
        console.log(result);
        document.getElementById("result").innerHTML = result;
    } else if (document.getElementById("select").value == "*") {
        result = (num1 * num2);
        console.log(result);
        document.getElementById("result").innerHTML = result;
    } else {
        console.log(result);
        document.getElementById("result").innerHTML = " num1 /num2 =" + (num1 / num2) + " and num2 /num1 = " + (num2 / num1);
    }
}