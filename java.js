// import
// import { isEmpty } from "./validation.js";
// import { testThefunctionFromMoudule } from "./calc.js";
// testThefunctionFromMoudule(2, 5);
// let btn = document.getElementById("btnvalidation");
// btn.addEventListener("click",
//     function() {
//         let txtValidation = document.getElementById("validation").value;

//         isEmpty(txtValidation);
//     });
//
// loading

let load = document.querySelector(".loading");

function hiddenLoader() {
  load.style.display = "none";
}

function wait() {
  setInterval("hiddenLoader()", 4000);
}

window.onload = wait();

// setInterval("load()",1500);

function operators() {
  var num1 = document.getElementById("x").value;
  var num2 = document.getElementById("y").value;
  var result = 0;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  console.log(num1);
  console.log(num2);
  if (document.getElementById("select").value == "-") {
    result = num1 - num2;
    console.log(result);
    document.getElementById("result").innerHTML = "result is : " + result;
  } else if (document.getElementById("select").value == "+") {
    result = num1 + num2;
    console.log(result);
    document.getElementById("result").innerHTML = result;
  } else if (document.getElementById("select").value == "*") {
    result = num1 * num2;
    console.log(result);
    document.getElementById("result").innerHTML = result;
  } else {
    console.log(result);
    document.getElementById("result").innerHTML =
      " num1 /num2 =" + num1 / num2 + " and num2 /num1 = " + num2 / num1;
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
document.getElementById("add").onclick = function () {
  var theText = document.getElementById("name").value;
  users.push(theText);
  console.log(users);
  document.getElementById("count-is").innerHTML =
    "array length: " + users.length;
  document.getElementById("name").value = "";
};
//

// in lecture

function tax() {
  var earn = document.getElementById("earn").value;
  if (earn <= 1000 && earn >= 0) {
    document.getElementById("show-it").innerText = "  الضرائب" + 0.1 * earn;
  } else if (earn > 1000 && earn <= 10000) {
    document.getElementById("show-it").innerText = ": الضرائب" + 0.2 * earn;
  } else if (earn > 10000) {
    document.getElementById("show-it").innerText = " :الضرائب" + 0.3 * earn;
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
  } else if (percent > 50 && percent <= 65) {
    document.getElementById("ranking").value = "جيد";
  } else if (percent > 65 && percent <= 75) {
    document.getElementById("ranking").value = "  جيد جدا";
  } else if (percent > 75 && percent <= 85) {
    document.getElementById("ranking").value = "جيد جدا";
  } else if (percent > 85 && percent <= 100) {
    document.getElementById("ranking").value = "امتياز";
  } else {
    document.getElementById("ranking").value = "error";
  }
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
  "img/img9.webp",
];

function displayProduct() {
  var temp = "";
  for (var i = 0; i < listImg.length; i++) {
    temp +=
      `     
        <div class="product">
        <div class="product-img">
            <img src="` +
      listImg[i] +
      `" alt=""></div>
        <div class="product-info">
            <h3>any Title</h3>
            <p>any pharagraph</p>
        </div>
    </div>`;
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
    text +=
      `<li ondblclick=destroy(` +
      i +
      `) >` +
      arrayList[i] +
      `</li> 
        <span onclick="destroy(` +
      i +
      `) " class="remove-element">remove element</span>   <span class="update-element" onclick='update(` +
      i +
      `)'>update</span>`;
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
var imgsSlide = [
  "img/item1.jpg",
  "img/item2.jpg",
  "img/item3.jpg",
  "img/item4.jpg",
  "img/img4.webp",
];

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
    text +=
      ` <div>
        <div class="list-item" style="
    width: fit-content;
    margin: 10px 10px 20px 10px;
    text-align: center;
">
            <img src="img/img1.webp" alt="" style="
    width: fit-content;
    object-fit: cover;
">
            <p style="
    font-size: 20px;
    font-family: cursive;
">` +
      listTwo[i].Name +
      `</p>
            <span style="
    background: green;
    font-size: 20px;
    padding: 10px;
    font-weight: bold;
    color: #fff;
">` +
      listTwo[i].salary +
      `</span>

            
 <p  contenteditable="true" style="font-family: cursive;overflow-wrap: break-word;">` +
      listTwo[i].info +
      `</p>

            <p contenteditable="true" style="overflow-wrap: break-word;"> ` +
      listTwo[i].des +
      `</p>
        </div>
<div class="flex-btns"> <button style="
margin: unset;
background: greenyellow; "  onclick="Update(` +
      i +
      `)">UPDATE</button>
<button style="
margin: 0 0 0 186px;
background: tomato; "
"  onclick="deleteElement(` +
      i +
      `)">DELETE</button></div>
       
    </div>`;
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
  };
  listTwo.push(product);
  // console.log(product);
  // console.log(listTwo);

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
  document.getElementById("txt-info").value =
    listTwo[index].info + "my index is :" + index;
  document.getElementById("toSaveIndex").value = index;

  document.getElementById("txt-add").style.display = "none";
  document.getElementById("txt-update").style.display = "block";
}

function editinfo() {
  var index = document.getElementById("toSaveIndex").value;
  // index
  listTwo[index].Name = document.getElementById("txt-name").value;

  listTwo[index].des = document.getElementById("txt-des").value;

  listTwo[index].salary = document.getElementById("txt-salary").value;

  listTwo[index].info = document.getElementById("txt-info").value;

  viewList();
  document.getElementById("txt-name").value = "";
  document.getElementById("txt-des").value = "";
  document.getElementById("txt-salary").value = "";
  document.getElementById("txt-info").value = "";
}
// 4 Nov
var accord = document.getElementsByClassName("accord");
// console.log(accord);
for (var i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function () {
    var element = this.nextElementSibling;
    element.classList.toggle("info-hide");
  });
  // accord[i].addEventListener("click", alert("www"));
}
// fixed and scroll
window.onscroll = function scrollFixed() {
  // if (window.scrollY > 20) {
  //     document.getElementById("fixedNav").style.backgroundColor = "gold";
  // } else {
  //     document.getElementById("fixedNav").style.backgroundColor = "#000";

  // }
  if (window.scrollY > 2500) {
    document.getElementById("h1").style.color = "#000";
    document.getElementById("h1").style.fontFamily = "cursive";

    document.getElementById("fixedNav").style.backgroundImage =
      "linear-gradient(to right, red 20%, red 20%, #FFF 40%, #FFF 40%, #FFF 60%, #FFF 60%, #000 80%, #000000eb 80%)";
  } else if (window.scrollY > 1500) {
    document.getElementById("fixedNav").style.backgroundColor = "gold";
    document.getElementById("fixedNav").style.backgroundImage = "unset";
    document.getElementById("h1").style.color = "unset";
  } else if (window.scrollY > 1000) {
    document.getElementById("fixedNav").style.backgroundColor = "yellowgreen";
  } else if (window.scrollY > 500) {
    document.getElementById("fixedNav").style.backgroundColor = "green";
  } else if (window.scrollY > 20) {
    document.getElementById("fixedNav").style.backgroundColor = "gold";
  } else {
    document.getElementById("fixedNav").style.backgroundColor = "#000";
    document.getElementById("h1").style.color = "#FFF";
  }

  if (window.scrollY > 1000) {
    document.getElementById("fixed").classList.add("fixed");
  } else {
    document.getElementById("fixed").classList.remove("fixed");
  }
};
// window.onscroll = function() {

//
function filterSelection(str) {
  var arrayOfimgfilter = document.getElementsByClassName("imgForFilter");
  // console.log(arrayOfimgfilter);

  if (str == "all") {
    document.getElementById("txt-all").classList.add("Active");
    document.getElementById("txt-assaf").classList.remove("Active");
    document.getElementById("txt-catroon").classList.remove("Active");
    document.getElementById("txt-emoji").classList.remove("Active");
    for (var i = 0; i < arrayOfimgfilter.length; i++) {
      arrayOfimgfilter[i].classList.remove("filter-hidden");
      // .filter-hidden {
      //     display: none;
      // }
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
    // console.log(arrayOfimgfilter);
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
// // filter 4 Dec
let buttonsList = document.querySelectorAll(".filter-btn li"); //all btn for filter
let items = document.querySelectorAll(".items .box"); //all imgs for filter
for (var i = 0; i < buttonsList.length; i++) {
  buttonsList[i].addEventListener("click", function () {
    document.querySelector(".filter-btn li.active").classList.remove("active");
    this.classList.add("active");
    let target = this.dataset.target;
    // console.log(target);
    for (var j = 0; j < items.length; j++) {
      items[j].classList.add("hide");
      // items[j].classList.remove("visible");
      // console.log(items[j].dataset.id);
      if (target == items[j].dataset.id || target == "all") {
        items[j].classList.remove("hide");
        // items[j].classList.add("visible");
      }
    }
  });
}

//
//
// function getdate() {
//     var json = new XMLHttpRequest();
//     json.open("GET", "https://api.github.com/users", );
//     json.send();
//     json.onreadystatechange = function() {
//         if (json.readyState == 4) {
//             var data = JSON.parse(json.response);

//             console.log(data);
//             var str = "";
//             var count = data.length;
//             for (var i = 0; i < count; i++) {
//                 str = str + "<li>" + data[i].id + " url: " + data[i].avatar_url + "</li>";
//             }
//         }
//         document.getElementById("JSONinput").innerHTML = str;
//     }
// }

function getrepos() {
  var ajax = new XMLHttpRequest();
  // https://api.github.com/users/MohamedKarm551/repos
  // result
  // {
  // "id": 411382436,
  // "node_id": "R_kgDOGIUypA",
  // "name": "-my-style-for-temp1-zero-web-school-test",
  // "full_name": "MohamedKarm551/-my-style-for-temp1-zero-web-school-test",
  // "private": false,
  // "owner": {
  //   "login": "MohamedKarm551",
  //   "id": 87906607,
  //   "node_id": "MDQ6VXNlcjg3OTA2NjA3",
  //   "avatar_url": "https://avatars.githubusercontent.com/u/87906607?v=4",
  //   "gravatar_id": "",
  //   "url": "https://api.github.com/users/MohamedKarm551",
  //   "html_url": "https://github.com/MohamedKarm551",
  //   "followers_url": "https://api.github.com/users/MohamedKarm551/followers",
  //   "following_url": "https://api.github.com/users/MohamedKarm551/following{/other_user}",
  //   "gists_url": "https://api.github.com/users/MohamedKarm551/gists{/gist_id}",
  //   "starred_url": "https://api.github.com/users/MohamedKarm551/starred{/owner}{/repo}",
  //   "subscriptions_url": "https://api.github.com/users/MohamedKarm551/subscriptions",
  //   "organizations_url": "https://api.github.com/users/MohamedKarm551/orgs",
  //   "repos_url": "https://api.github.com/users/MohamedKarm551/repos",
  //   "events_url": "https://api.github.com/users/MohamedKarm551/events{/privacy}",
  //   "received_events_url": "https://api.github.com/users/MohamedKarm551/received_events",
  //   "type": "User",
  //   "site_admin": false
  // }}
  //JSON stands for JavaScript Object Notation
  var userLink =
    "https://api.github.com/users/" +
    document.getElementById("repo").value +
    "/repos";
  ajax.open("GET", userLink);
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      var data = JSON.parse(ajax.response); //array
      var str = "";
      var count = data.length;
      for (var i = 0; i < count; i++) {
        str = str + "<li>  " + data[i].name + " </li>";
        // str = str + "<li>  " + (i + 1) + " " + data[i].name + " </li>";
      }
    }
    document.getElementById("respos").innerHTML = str;
    // console.log(str);
  };
}
// 20 Nov

var arrayOfimgforSlideShow = Array.from(
  document.querySelectorAll(".item img ")
);
// console.log(arrayOfimgforSlideShow);

for (var i = 0; i < arrayOfimgforSlideShow.length; i++) {
  arrayOfimgforSlideShow[i].addEventListener("click", showSlide);
}
// .lightBox-container {
//  background: #000000b5;
// width: 100%;
// height: 100%;
// position: fixed;
// inset: 0;
// display: flex;
// justify-content: center;
// align-items: center;
// transform: scale(0);

// transition: all .3s ease;

//}
var lightBoxContainer = document.querySelector(".lightBox-container");
var ligtBoxitem = document.querySelector(".ligtBox-item");

var currentIndex = 0;

function showSlide(e) {
  lightBoxContainer.style.transform = "scale(1)";
  // console.log(e)
  // console.log(e.target)          >>>>==img
  // console.log(e.target.src)
  var imgSrc = e.target.src;
  currentIndex = arrayOfimgforSlideShow.indexOf(e.target); //index of current img
  // .ligtBox-item {
  //         background-image: url("img/assaf1.jpg");
  ligtBoxitem.style.backgroundImage = "url(" + imgSrc + ")";
  ligtBoxitem.style.height = "550px";
}
// when click on close
var Close = document.getElementById("close");
Close.addEventListener("click", function () {
  lightBoxContainer.style.transform = "scale(0)";
});
//  when click on right or left
var Next = document.getElementById("next");
var Prev = document.getElementById("prev");
next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);

function goNext() {
  currentIndex++;
  if (currentIndex >= arrayOfimgforSlideShow.length) {
    currentIndex = 0;
  }
  ligtBoxitem.style.backgroundImage =
    "url(" + arrayOfimgforSlideShow[currentIndex].src + ")";
  // arrayOfimgforSlideShow[currentIndex]====>img
}

function goPrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = arrayOfimgforSlideShow.length - 1;
  }
  ligtBoxitem.style.backgroundImage =
    "url(" + arrayOfimgforSlideShow[currentIndex].src + ")";
  // arrayOfimgforSlideShow[currentIndex]====>img
}

function hideLightBox() {
  lightBoxContainer.style.transform = "scale(0)";
}
// -->      <--        "esc"
document.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.key == "ArrowRight") {
    goNext();
  } else if (e.key == "ArrowLeft") {
    goPrev();
  } else if (e.key == "Escape") {
    hideLightBox();
  }
});

//

// Mouse
// css
// .imgMouse {
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     position: absolute;
// }
// var mouse = document.querySelector(".imgMouse");

// document.addEventListener("mousemove", function(e) {
//     console.log(e);
//     mouse.style.left = e.clientX - 60 + "px";
//     mouse.style.top = e.clientY - 60 + "px";
// })
