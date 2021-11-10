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
    document.getElementById("input-task").value = "";
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




// To do list 2
var listTwo = [];

function viewList() {
    var count = listTwo.length;
    var text = "";
    for (var i = 0; i < count; i++) {
        text += ` <div>
        <div class="list-item" style="
    width: fit-content;
    margin: 10px 10px 20px 10px;
    text-align: center;
">
            <img src="img/img1.webp" alt="" style="
    width: 100%;
    object-fit: cover;
">
            <p style="
    font-size: 20px;
    font-family: cursive;
">` + listTwo[i].Name + `</p>
            <span style="
    background: green;
    font-size: 20px;
    padding: 10px;
    font-weight: bold;
    color: #fff;
">` + listTwo[i].salary + `</span>

            
 <p contenteditable="true" style="font-family: cursive;">` + listTwo[i].info + `</p>

            <p >` + listTwo[i].des + `</p>
        </div>

        <button style="
        margin: unset;
        background: greenyellow; "  onclick="Update(` + i + `)">UPDATE</button>
    <button style="
    margin: 0 0 0 186px;
    background: tomato; "
"  onclick="deleteElement(` + i + `)">DELETE</button>
    </div>`

    }
    document.getElementById("show-items").innerHTML = text;

}


function addlist2() {
    var nameItem = document.getElementById("txt-name").value;
    var desItem = document.getElementById("txt-des").value;
    var salaryItem = document.getElementById("txt-salary").value;
    var infoItem = document.getElementById("txt-info").value;

    var product = {
        Name: nameItem,
        des: desItem,
        salary: salaryItem,
        info: infoItem,
    }
    listTwo.push(product);
    console.log(product);
    console.log(listTwo);

    viewList();
    document.getElementById("txt-name").value = "";
    document.getElementById("txt-des").value = "";
    document.getElementById("txt-salary").value = "";
    document.getElementById("txt-info").value = "";
}

function deleteElement(index) {
    listTwo.splice(index, 1);
    viewList();
}

function Update(index) {
    document.getElementById("txt-name").value = listTwo[index].Name;
    document.getElementById("txt-des").value = listTwo[index].des;
    document.getElementById("txt-salary").value = listTwo[index].salary;
    document.getElementById("txt-info").value = listTwo[index].info + "my index is :" + index;
    document.getElementById("toSaveIndex").value = index;

    document.getElementById("txt-add").style.display = "none";
    document.getElementById("txt-update").style.display = "block";

}

function editinfo() {

    var index = document.getElementById("toSaveIndex").value;
    // index
    var nameItem = document.getElementById("txt-name").value;
    listTwo[index].Name = nameItem;
    var desItem = document.getElementById("txt-des").value;
    listTwo[index].des = desItem;

    var salaryItem = document.getElementById("txt-salary").value;
    listTwo[index].salary = salaryItem;
    var infoItem = document.getElementById("txt-info").value;
    listTwo[index].info = infoItem;


    viewList();
    document.getElementById("txt-name").value = "";
    document.getElementById("txt-des").value = "";
    document.getElementById("txt-salary").value = "";
    document.getElementById("txt-info").value = "";
}
// 4 Nov
var accord = document.getElementsByClassName("accord");
console.log(accord);
for (var i = 0; i < accord.length; i++) {
    accord[i].addEventListener("click", function() {
        var element = this.nextElementSibling;
        element.classList.toggle("info");

    });
    // accord[i].addEventListener("click", alert("www"));
}
// fixed and scroll
window.onscroll = function scrollFixed() {
        if (window.scrollY > 20) {
            document.getElementById("fixedNav").style.backgroundColor = "gold";
        }
        if (window.scrollY > 100) {
            document.getElementById("fixed").classList.add("fixed");

        } else {
            document.getElementById("fixed").classList.remove("fixed");
            document.getElementById("fixedNav").style.backgroundColor = "#000";
        }
    }
    // window.onscroll = function() {

//
function filterSelection(str) {
    var arrayOfimgfilter = document.getElementsByClassName("imgForFilter");
    console.log(arrayOfimgfilter);

    if (str == "all") {
        document.getElementById("txt-all").classList.add("Active");
        document.getElementById("txt-assaf").classList.remove("Active");
        document.getElementById("txt-catroon").classList.remove("Active");
        document.getElementById("txt-emoji").classList.remove("Active");
        for (var i = 0; i < arrayOfimgfilter.length; i++) {
            arrayOfimgfilter[i].classList.remove("filter-hidden");

        }

    } else if (str == "Assaf") {
        document.getElementById("txt-assaf").classList.add("Active");
        document.getElementById("txt-all").classList.remove("Active");
        document.getElementById("txt-catroon").classList.remove("Active");
        document.getElementById("txt-emoji").classList.remove("Active");
        for (var i = 0; i < arrayOfimgfilter.length; i++) {
            if (arrayOfimgfilter[i].name != "assaf") {
                arrayOfimgfilter[i].classList.add("filter-hidden");
            } else {
                arrayOfimgfilter[i].classList.remove("filter-hidden");
            }
        }
        console.log(arrayOfimgfilter);

    } else if (str == "Cartoon") {
        document.getElementById("txt-catroon").classList.add("Active");
        document.getElementById("txt-assaf").classList.remove("Active");
        document.getElementById("txt-all").classList.remove("Active");
        document.getElementById("txt-emoji").classList.remove("Active");
        for (var i = 0; i < arrayOfimgfilter.length; i++) {
            if (arrayOfimgfilter[i].name != "Cartoon") {
                arrayOfimgfilter[i].classList.add("filter-hidden");
            } else {
                arrayOfimgfilter[i].classList.remove("filter-hidden");

            }
        }
    } else if (str == "Emoji") {
        document.getElementById("txt-emoji").classList.add("Active");
        document.getElementById("txt-assaf").classList.remove("Active");
        document.getElementById("txt-catroon").classList.remove("Active");
        document.getElementById("txt-all").classList.remove("Active");
        for (var i = 0; i < arrayOfimgfilter.length; i++) {
            if (arrayOfimgfilter[i].name != "Emoji") {
                arrayOfimgfilter[i].classList.add("filter-hidden");
            } else {
                arrayOfimgfilter[i].classList.remove("filter-hidden");

            }
        }
    }

}