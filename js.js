
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


function checkDate(i) {
  if (i == 0) 
  	i = "Seg";
  if (i == 0) 
  	i = "Ter";
  if (i == 0) 
  	i = "Qua";
  if (i == 0) 
  	i = "Qui";
  if (i == 0) 
  	i = "Sex";
  if (i == 0) 
  	i = "Sab";
  if (i == 0) 
  	i = "Dom";
  return i;
}


function startDate() {
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var weekday = checkDate(date.getDay());
	document.getElementById("date").innerHTML = weekday + ", " + day + "/" + month;
	var d = setDate(20);
}


function startDate() {
	var date = new Date();
	var day = date.getDate();
	var month = date.getDay();
	document.getElementById("date").innerHTML = day + "/" + month;
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
	var t = setTimeout(startTime, 500);
}

function goBack() {
  window.history.back();
}
