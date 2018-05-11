
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function checkDate(i) {
  if (i == 0)
    i = "Dom";
  if (i == 1)
    i = "Seg";
  if (i == 2)
    i = "Ter";
  if (i == 3)
    i = "Qua";
  if (i == 4)
    i = "Qui";
  if (i == 5)
    i = "Sex";
  if (i == 6)
    i = "Sab";
  return i;
}


function startDate() {
	var date = new Date();
	var day = date.getDate();
	var weekday = date.getDay();
	var month = date.getMonth();
	weekday = checkDate(weekday);
	document.getElementById("date").innerHTML = weekday + ", " + day + "/" + month;
}


function checkOnClickLocation(name) {
  var location_active = JSON.parse(localStorage.getItem('location_active'));
  if (location_active == "true")
    location.assign(name);
  else
    location.assign("desativada.html");
}


function startTime() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
  	h = checkTime(h);
	m = checkTime(m);
	document.getElementById("clock").innerHTML = h + ":" + m;
	var t = setTimeout(startTime, 500);
}


function startLockTime() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
  	h = checkTime(h);
	m = checkTime(m);
	document.getElementById("lockClock").innerHTML = h + ":" + m;
	var n = setTimeout(startLockTime, 500);
}

function goBack() {
  window.history.back();
}

function home() {
  window.location = "lockscreen.html";
}

function getScrollId(){
  var scrollTop = document.getElementById("scrollbar-style").scrollTop;
  var id;
  if (scrollTop >= 0 && scrollTop <= 15){
    id = 0;
  }
  if (scrollTop > 15 && scrollTop <= 30){
    id = 1;
  }
  if (scrollTop > 30 && scrollTop <= 66){
    id = 2;
  }
  if (scrollTop > 66 && scrollTop <= 97){
    id = 3;
  }
  if (scrollTop > 97 && scrollTop <= 135){
    id = 4;
  }
  if (scrollTop > 135 && scrollTop <= 170){
    id = 5;
  }
  if (scrollTop > 170 && scrollTop <= 204){
    id = 6;
  }
  if (scrollTop > 204 && scrollTop <= 235){
    id = 7;
  }
  if (scrollTop > 235 && scrollTop <= 300){
    id = 8;
  }
  return id;
}

function getScrollIdRest(){
  var scrollTop = document.getElementById("scrollbar-style").scrollTop;
  var id;
  if (scrollTop >= 0 && scrollTop <= 15){
    id = 0;
  }
  if (scrollTop > 15 && scrollTop <= 28){
    id = 1;
  }
  if (scrollTop > 28 && scrollTop <= 62){
    id = 2;
  }
  if (scrollTop > 62 && scrollTop <= 100){
    id = 3;
  }
  if (scrollTop > 100 && scrollTop <= 135){
    id = 4;
  }
  return id;
}

function getScrollIdDef(){
  var scrollTop = document.getElementById("scrollbar-style").scrollTop;
  var id;
  if (scrollTop >= 0 && scrollTop <= 15){
    id = 0;
  }
  if (scrollTop > 15 && scrollTop <= 27){
    id = 1;
  }
  if (scrollTop > 27 && scrollTop <= 66){
    id = 2;
  }
  if (scrollTop > 66 && scrollTop <= 105){
    id = 3;
  }
  return id;
}

function scrollfunction(pai, id) {
  var btn = document.getElementById("scrollButton");
  var paiId = document.getElementById(pai);
  var len = paiId.children.length;
  btn.onclick = paiId.children[id].onclick;
  console.log(len);
  console.log(id);
  console.log(document.getElementById("scrollbar-style").scrollTop);
  if(id == 0 || id == 1){
    paiId.children[1].className = "menuButtonscenter";
    paiId.children[2].className = "menuButtons";
    paiId.children[1].children[0].style.float = "left";
    paiId.children[2].children[0].style.float = "none";
    paiId.children[1].children[1].style.display = "inline-block";
    paiId.children[2].children[1].style.display = "none";
  }

  else if(id === len - 1){
    paiId.children[len - 1].className = "menuButtonscenter";
    paiId.children[len - 2].className = "menuButtons";
    paiId.children[len - 1].children[0].style.float = "left";
    paiId.children[len - 2].children[0].style.float = "none";
    paiId.children[len - 1].children[1].style.display = "inline-block";
    paiId.children[len - 2].children[1].style.display = "none";
  }

  else{
    paiId.children[id].className = "menuButtonscenter";
    paiId.children[id - 1].className = "menuButtons";
    paiId.children[id + 1].className = "menuButtons";
    paiId.children[id].children[0].style.float = "left";
    paiId.children[id - 1].children[0].style.float = "none";
    paiId.children[id + 1].children[0].style.float = "none";
    paiId.children[id].children[1].style.display = "inline-block";
    paiId.children[id - 1].children[1].style.display = "none";
    paiId.children[id + 1].children[1].style.display = "none";
  }

}

function scrollUps(){
  var scrollUp = document.getElementById("scrollbar-style").scrollTop;
  console.log(scrollUp);
  if (scrollUp > 0){
    document.getElementById("scrollbar-style").scrollTop = scrollUp - 35; 
  }
}

function scrollDowns(){
  var scrollDown = document.getElementById("scrollbar-style").scrollTop;
  console.log(scrollDown);
  document.getElementById("scrollbar-style").scrollTop = scrollDown + 35; 
}

var location_active = "false";


function checkLocation() {
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  var location_active = JSON.parse(localStorage.getItem('location_active'));
  var alert = document.getElementById('alerts');
  var alert1 = document.getElementById('alerts1');
  
  if (location_active == "true") {
    alert.style.display = "inline";
  }
  else if(location_active = "false") {
    alert.style.display= "none";
  }

  if (storedData.length != 0) {
    alert1.style.display = "inline";
  }

  else if(storedData.length == 0) {
    alert1.style.display= "none";
  }
}

function checkVisibility() {
  var checked = JSON.parse(localStorage.getItem('checkb'));
  var check = document.getElementById('checkb').checked 
  var alert = document.getElementById('alerts');

  if (check === true) {
    alert.style.display = "inline";
    location_active = "true";
  }
  else {
    alert.style.display = "none";
    location_active = "false";
  }
  localStorage.setItem("location_active", JSON.stringify(location_active));
}


var flag = "0";


function save() {
  if (flag == "0") {
    flag = "1";
    localStorage.setItem("flagg", JSON.stringify(flag));
  }
  
  var checkbox = document.getElementById('checkb');
  localStorage.setItem('checkb', checkbox.checked);
  checkVisibility();
}



function load() {
  var flag = JSON.parse(localStorage.getItem("flagg"));

  if (flag == "1") {
    var checked = JSON.parse(localStorage.getItem('checkb'));
    document.getElementById('checkb').checked = checked;
  }

  checkVisibility();
}