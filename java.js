function operators() {

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

// document.getElementById("res").onclick = function() {
//         var num1 = document.getElementById("x").value;
//         var num2 = document.getElementById("y").value;
//         var result = 0;
//         num1 = parseInt(num1);
//         num2 = parseInt(num2);
//         console.log(num1);
//         console.log(num2);
//         if (document.getElementById("select").value == "-") {
//             result = (num1 - num2);
//             console.log(result);
//             document.getElementById("result").innerHTML = "result is : " + result;
//         } else if (document.getElementById("select").value == "+") {
//             result = (num1 + num2);
//             console.log(result);
//             document.getElementById("result").innerHTML = result;
//         } else if (document.getElementById("select").value == "*") {
//             result = (num1 * num2);
//             console.log(result);
//             document.getElementById("result").innerHTML = result;
//         } else {
//             console.log(result);
//             document.getElementById("result").innerHTML = " num1 /num2 =" + (num1 / num2) + " and num2 /num1 = " + (num2 / num1);
//         }
//     }
// task2
var users = [];
document.getElementById("add").onclick = function() {
        var theText = document.getElementById("name").value;
        users.push(theText);
        console.log(users);
        document.getElementById("count-is").innerHTML = "array length: " + users.length;
        document.getElementById("name").value = "";

    }
    // 



function tax() {
    var earn = document.getElementById("earn").value;
    if (earn <= 1000 && earn >= 0) {
        document.getElementById("show-it").innerText = "  الضرائب" + (0.1 * earn);
    } else if (earn > 1000 && earn <= 10000) {
        document.getElementById("show-it").innerText = ": الضرائب" + (0.2 * earn);
    } else if (earn > 10000) {
        document.getElementById("show-it").innerText = " :الضرائب" + (0.3 * earn);
    } else {
        document.getElementById("show-it").innerText = "مفيش بالسالب يستا";
    }
}




//task3
function grade() {
    var grade = document.getElementById("grade").value;
    var total = document.getElementById("total").value;
    var percent = (grade / total) * 100;
    document.getElementById("percent").value = percent + "%";
    if (percent >= 0 && percent <= 50) {
        document.getElementById("ranking").value = "مقبول";

    } else if (percent > 50 && percent <= 65) { document.getElementById("ranking").value = "جيد"; } else if (percent > 65 && percent <= 75) { document.getElementById("ranking").value = "  جيد جدا"; } else if (percent > 75 && percent <= 85) { document.getElementById("ranking").value = "جيد جدا"; } else if (percent > 85 && percent <= 100) { document.getElementById("ranking").value = "امتياز"; } else { document.getElementById("ranking").value = "error"; }
}