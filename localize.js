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

function getWaitingTimes(mapTextId, targetId) {
  document.getElementById('bubble1').style.visibility = "visible";
  document.getElementById('bubbleName').style.visibility = "visible";
  document.getElementById('target1').style.visibility = "hidden";
  document.getElementById('target2').style.visibility = "hidden";
  document.getElementById('target3').style.visibility = "hidden";
  if (mapTextId == "mapText1") {
    document.getElementById('mapText1').style.visibility = "hidden";
  }
  if (mapTextId == "mapText2") {
    document.getElementById('mapText2').style.visibility = "hidden";
  }
  /*para por o nome do elemento correto*/
  if (targetId == "target1" && mapTextId == "mapText1") {
    document.getElementById('bubbleName').innerHTML =
  "WC 1";
  }
  else if (targetId == "target2" && mapTextId == "mapText1") {
    document.getElementById('bubbleName').innerHTML =
  "WC 2";
  }
  else if (targetId == "target3" && mapTextId == "mapText1") {
    document.getElementById('bubbleName').innerHTML =
  "WC 3";
  }
  else if (targetId == "target1" && mapTextId == "mapText2") {
    document.getElementById('bubbleName').innerHTML =
  "HotDog";
  }
  else if (targetId == "target2" && mapTextId == "mapText2") {
    document.getElementById('bubbleName').innerHTML =
  "Burger";
  }
  else if (targetId == "target3" && mapTextId == "mapText2") {
    document.getElementById('bubbleName').innerHTML =
  "Pizza";
  }

  document.getElementById('cross1').style.visibility = "visible";
  var randomWaitingTimes = Math.floor((Math.random() * 30));
  document.getElementById('bubble1').innerHTML =
    randomWaitingTimes + " min";
}

function exitTimers(mapTextId) {
  document.getElementById('bubble1').style.visibility = "hidden";
  document.getElementById('bubbleName').style.visibility = "hidden";
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
