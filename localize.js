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

function positionWCPin() {
  var randomCoordinates = Math.floor((Math.random() * 3) + 1);
  if (randomCoordinates == 1) {
    document.getElementById("target").style.left = "2cm";
    document.getElementById("target").style.top = "0.8cm";

  }
  else if (randomCoordinates == 2) {
    document.getElementById("target").style.left = "1cm";
    document.getElementById("target").style.top = "2.2cm";
  }
  else {
    document.getElementById("target").style.left = "2cm";
    document.getElementById("target").style.top = "1cm";

  }
  document.getElementById("target").style.visibility = "visible"; /*mudar aspeto dinamicamente*/
}

function positionRestaurantPin() {
  var randomCoordinates = Math.floor((Math.random() * 3) + 1);
  if (randomCoordinates == 1) {
    document.getElementById("target").style.left = "0.6cm";
    document.getElementById("target").style.top = "2.1cm";

  }
  else if (randomCoordinates == 2) {
    document.getElementById("target").style.left = "1.7cm";
    document.getElementById("target").style.top = "1cm";
  }
  else {
    document.getElementById("target").style.left = "0.3cm";
    document.getElementById("target").style.top = "2.4cm";

  }
  document.getElementById("target").style.visibility = "visible"; /*mudar aspeto dinamicamente*/
}

function positionStagePin() {
  var randomCoordinates = Math.floor((Math.random() * 2) + 1);
  if (randomCoordinates == 1) {
    document.getElementById("target").style.left = "0.3cm";
    document.getElementById("target").style.top = "2.55cm";

  }
  else {
    document.getElementById("target").style.left = "1.8cm";
    document.getElementById("target").style.top = "0.15cm";

  }
  document.getElementById("target").style.visibility = "visible"; /*mudar aspeto dinamicamente*/
}

function positionEmergencyPin() {
  var randomCoordinates = Math.floor((Math.random() * 3) + 1);
  if (randomCoordinates == 1) {
    document.getElementById("target").style.left = "1.7cm";
    document.getElementById("target").style.top = "1.5cm";

  }
  else if (randomCoordinates == 2) {
    document.getElementById("target").style.left = "0.5cm";
    document.getElementById("target").style.top = "1.7cm";
  }
  else {
    document.getElementById("target").style.left = "1.5cm";
    document.getElementById("target").style.top = "0.5cm";

  }
  document.getElementById("target").style.visibility = "visible"; /*mudar aspeto dinamicamente*/
}
