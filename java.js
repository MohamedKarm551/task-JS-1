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

// in lecture

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
//task 4
var listImg = [
    "img/img1.webp",
    "img/img2.webp",
    "img/img3.webp",
    "img/img4.webp",
    "img/img5.webp",
    "img/img6.webp",
    "img/img7.webp",
    "img/img8.webp",
    "img/img9.webp"
]

function displayProduct() {
    var temp = "";
    for (var i = 0; i < listImg.length; i++) {
        temp += `     
        <div class="product">
        <div class="product-img">
            <img src="` + listImg[i] + `" alt=""></div>
        <div class="product-info">
            <h3>any Title</h3>
            <p>any pharagraph</p>
        </div>
    </div>`
    }
    document.getElementById("productRow").innerHTML = temp;
}
displayProduct();

// in lecture 26 Oct 2021
// To Do List

var arrayList = [];


// view the list
function view() {
    var count = arrayList.length;
    var text = "";
    for (var i = 0; i < count; i++) {
        text += `<li ondblclick=destroy(` + i + `) >` + arrayList[i] + `</li> 
        <span onclick="destroy(` + i + `) " style="
        display: inline;
        background: #ddd;
        width: fit-content;
        padding: 3px 8px;
        border-radius: 1em;
        font-size: small;
        filter: drop-shadow(2px
     4px
     2px #000);
    ">remove element</span>   <span style='color:green;display: block;margin: 12px;' onclick='update(` + i + `)'>update</span>`;
    }

    document.getElementById("list-items").innerHTML = text;
}

function addInlist() {
    var task = document.getElementById("input-task").value;
    arrayList.push(task);
    task = document.getElementById("input-task").value = "";
    console.log(arrayList);
    document.getElementById("Add").style.boxShadow = "0px 0px 20px red";
    view();
}
// delete element
function destroy(index) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // parameters:
    //     splice(start)
    // splice(start, deleteCount) 
    // splice(start, deleteCount, item1)
    // splice(start, deleteCount, item1, item2, itemN)
    arrayList.splice(index, 1);
    // splice(start, deleteCount) 

    // delete "1"number from  list[index]
    view();
}

function update(index) {
    document.getElementById("Add").style.display = "none";

    document.getElementById("input-task").value = arrayList[index];
    document.getElementById("update").style.display = "inline-block";
    document.getElementById("hidden-input").value = index;

}

function edit() {
    var task = document.getElementById("input-task").value;
    var index = document.getElementById("hidden-input").value;
    arrayList[index] = task;
    document.getElementById("input-task").value = "";
    document.getElementById("update").style.display = "none";
    document.getElementById("Add").style.display = "inline-block";

    view();
}
// slide show
var index = 0;
var imgsSlide = ["img/item1.jpg", "img/item2.jpg", "img/item3.jpg", "img/item4.jpg", "img/img4.webp"];

function slideShow() {
    document.getElementById("slide-show").src = imgsSlide[index];
    if (index < imgsSlide.length - 1) {
        index++;
    } else {
        index = 0;

    }

}
setInterval("slideShow()", 1500);