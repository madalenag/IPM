
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