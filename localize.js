function positionSelfPin() {
  var randomCoordinates = Math.floor((Math.random() * 3) + 1);
  if (randomCoordinates == 1) {
    document.getElementById("pin").style.left = "2cm";
    document.getElementById("pin").style.top = "2cm";

  }
  else if (randomCoordinates == 2) {
    document.getElementById("pin").style.left = "0.4cm";
    document.getElementById("pin").style.top = "2cm";
  }
  else {
    document.getElementById("pin").style.left = "0.5cm";
    document.getElementById("pin").style.top = "1.4cm";

  }
  document.getElementById("pin").style.visibility = "visible"; /*mudar aspeto dinamicamente*/
}

function positionPersonPin() {
  var randomCoordinates = Math.floor((Math.random() * 3) + 1);
  if (randomCoordinates == 1) {
    document.getElementById("target").style.left = "1.1cm";
    document.getElementById("target").style.top = "1.6cm";

  }
  else if (randomCoordinates == 2) {
    document.getElementById("target").style.left = "2.1cm";
    document.getElementById("target").style.top = "1cm";
  }
  else {
    document.getElementById("target").style.left = "0.8cm";
    document.getElementById("target").style.top = "0.7cm";

  }
  document.getElementById("target").style.visibility = "visible"; /*mudar aspeto dinamicamente*/
}

function positionWCPin(targetId) {
  if(targetId == "target1") {
    document.getElementById("target1").style.left = "1cm";
    document.getElementById("target1").style.top = "2cm";
    document.getElementById("target1").style.visibility = "visible";

  }
  else if(targetId == "target2") {
    document.getElementById("target2").style.left = "2.1cm";
    document.getElementById("target2").style.top = "1.7cm";
    document.getElementById("target2").style.visibility = "visible";
  }
  else {
    document.getElementById("target3").style.left = "0.8cm";
    document.getElementById("target3").style.top = "0.7cm";
    document.getElementById("target3").style.visibility = "visible";
  }
}

function positionRestaurantHotPin() {
  document.getElementById("target").style.left = "0.7cm";
  document.getElementById("target").style.top = "1.7cm";
  document.getElementById("target").style.visibility = "visible";
}

function positionRestaurantHamPin() {
  document.getElementById("target").style.left = "1.3cm";
  document.getElementById("target").style.top = "0.6cm";
  document.getElementById("target").style.visibility = "visible";
}

function positionRestaurantPizzaPin() {
  document.getElementById("target").style.left = "0.05cm";
  document.getElementById("target").style.top = "1.4cm";
  document.getElementById("target").style.visibility = "visible";
}

function positionStagePin(targetId) {
  if (targetId == "target1") {
    document.getElementById("target1").style.left = "0.1cm";
    document.getElementById("target1").style.top = "2.3cm";
    document.getElementById("target1").style.visibility = "visible";

  }
  else if(targetId == "target2") {
    document.getElementById("target2").style.left = "2cm";
    document.getElementById("target2").style.top = "0.35cm";
    document.getElementById("target2").style.visibility = "visible";

  }
}

function positionEmergencyPin(targetId) {
  if(targetId == "target1") {
    document.getElementById("target1").style.left = "0.2cm";
    document.getElementById("target1").style.top = "2cm";
    document.getElementById("target1").style.visibility = "visible";

  }
  else if(targetId == "target2") {
    document.getElementById("target2").style.left = "1.8cm";
    document.getElementById("target2").style.top = "0.9cm";
    document.getElementById("target2").style.visibility = "visible";
  }
}

function getWaitingTimes(mapTextId) {
  document.getElementById('bubble1').style.visibility = "visible";
  document.getElementById('target1').style.visibility = "hidden";
  document.getElementById('target2').style.visibility = "hidden";
  document.getElementById('target3').style.visibility = "hidden";
  if (mapTextId == "mapText1") {
    document.getElementById('mapText1').style.visibility = "hidden";
  }
  if (mapTextId == "mapText2") {
    document.getElementById('mapText2').style.visibility = "hidden";
  }
  document.getElementById('cross1').style.visibility = "visible";
  var randomWaitingTimes = Math.floor((Math.random() * 10) + 1);
  if(randomWaitingTimes == 1) {
    document.getElementById('bubble1').innerHTML =
  "5 min";
  }
  else if(randomWaitingTimes == 2) {
    document.getElementById('bubble1').innerHTML =
  "3 min";
  }
  else if(randomWaitingTimes == 3) {
    document.getElementById('bubble1').innerHTML =
  "1 min";
  }
  else if(randomWaitingTimes == 4) {
    document.getElementById('bubble1').innerHTML =
  "10 min";
  }
  else if(randomWaitingTimes == 5) {
    document.getElementById('bubble1').innerHTML =
  "15 min";
  }
  else if(randomWaitingTimes == 6) {
    document.getElementById('bubble1').innerHTML =
  "1 min";
  }
  else if(randomWaitingTimes == 7) {
    document.getElementById('bubble1').innerHTML =
  "8 min";
  }
  else if(randomWaitingTimes == 8) {
    document.getElementById('bubble1').innerHTML =
  "30 min";
  }
  else if(randomWaitingTimes == 9) {
    document.getElementById('bubble1').innerHTML =
  "20 min";
  }
  else if(randomWaitingTimes == 10) {
    document.getElementById('bubble1').innerHTML =
  "7 min";
  }
}

function exitTimers(mapTextId) {
  document.getElementById('bubble1').style.visibility = "hidden";
  document.getElementById('target1').style.visibility = "visible";
  document.getElementById('target2').style.visibility = "visible";
  document.getElementById('target3').style.visibility = "visible";
  if (mapTextId == "mapText1") {
    document.getElementById('mapText1').style.visibility = "visible";
  }
  if (mapTextId == "mapText2") {
    document.getElementById('mapText2').style.visibility = "visible";
  }
  document.getElementById('cross1').style.visibility = "hidden";
}

function positionRestaurantstPins(targetId) {
  if(targetId == "target1") {
    document.getElementById(targetId).style.left = "0.7cm";
    document.getElementById(targetId).style.top = "1.7cm";
    document.getElementById(targetId).style.visibility = "visible";
  }
  if(targetId == "target2") {
    document.getElementById(targetId).style.left = "1.3cm";
    document.getElementById(targetId).style.top = "0.6cm";
    document.getElementById(targetId).style.visibility = "visible";
  }
  if(targetId == "target3") {
    document.getElementById(targetId).style.left = "0.05cm";
    document.getElementById(targetId).style.top = "1.4cm";
    document.getElementById(targetId).style.visibility = "visible";
  }
}
