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
