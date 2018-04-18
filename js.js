
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
  if (scrollTop > 66 && scrollTop <= 100){
    id = 3;
  }
  if (scrollTop > 100 && scrollTop <= 135){
    id = 4;
  }
  if (scrollTop > 135 && scrollTop <= 170){
    id = 5;
  }
  if (scrollTop > 170 && scrollTop <= 207){
    id = 6;
  }
  if (scrollTop > 207 && scrollTop <= 235){
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
  if (scrollTop > 15 && scrollTop <= 30){
    id = 1;
  }
  if (scrollTop > 30 && scrollTop <= 66){
    id = 2;
  }
  if (scrollTop > 66 && scrollTop <= 100){
    id = 3;
  }
  if (scrollTop > 100 && scrollTop <= 135){
    id = 4;
  }
  return id;
}

function scrollfunction(pai, id) {
  var paiId = document.getElementById(pai);
  console.log(paiId);
  var len = paiId.children.length;
  console.log(len);
  //id = getScrollId();
  console.log(id);
  console.log(document.getElementById("scrollbar-style").scrollTop);
  if(id == 0){
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


