var alerts = [];
var day_one = ["Alt-j", "The XX", "QOTSA","Rhye"]; 
var hours = ["18h00", "19h30", "21h00", "22h30"];
var palcos = ["Palco 1", "Palco 2", "Palco 1", "Palco1"];
var day_two = ["Foals", "Slide", "MGMT", "DIIV"];





function loadData (data) {
  localStorage.setItem("AlertsData", JSON.stringify(data));
}


function addAlert (name) {
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  if (storedData != null) {
    storedData.push(name);
    loadData(storedData);
  }
  else {
    alerts.push(name);
    loadData(alerts);
  }
}


function showAlert (name) {
    var btn = document.createElement("BUTTON"); 
    var alert = document.createTextNode(name);
    btn.appendChild(alert);

    var att = document.createAttribute("class");
    att.value = "menuButtons1";
    btn.setAttributeNode(att);
    var scrollbar = document.getElementsByClassName("scrollbar")[0];
    scrollbar.appendChild(btn); 
}


function showEvent (name, horas, palco) {
    var btn = document.createElement("BUTTON"); 
    var alert = document.createTextNode(name);
    btn.appendChild(alert);

    var att = document.createAttribute("class");
    att.value = "eventbutton";
    btn.setAttributeNode(att);
    /*var att = document.createAttribute("id");
    att.value = "evento1";
    btn.setAttributeNode(att);*/
    btn.setAttribute('onclick', 'getName(\'' + name + '\', \'' + horas + '\', \'' + palco + '\');');
    var scrollbar = document.getElementsByClassName("scrollbar")[0];
    scrollbar.appendChild(btn); 
}


function getName(name, horas, palco) {
  document.getElementById('bubble1').style.visibility = "visible";
  document.getElementById('cross1').style.visibility = "visible";
  document.getElementById('bubble1').innerHTML = name + "\n" + horas + "\n" + palco;
}

function getFood(name, horas, palco) {
  document.getElementById('bubble1').style.visibility = "visible";
  document.getElementById('cross1').style.visibility = "visible";
  document.getElementById('bubble1').innerHTML = name + "\nQuant:" + horas + "\nPreço:" + palco + "€";
}


function exitTimers(mapTextId) {
  document.getElementById('bubble1').style.visibility = "hidden";
  document.getElementById('cross1').style.visibility = "hidden";
}


function showRemovingButton (name) {
    var btn = document.createElement("BUTTON");
    var firstName = document.createTextNode(name);
    btn.appendChild(firstName);

    var att = document.createAttribute("class");
    att.value = "menuButtons1";
    btn.setAttributeNode(att);
    btn.setAttribute('onclick', 'changeVisibilityRemovingAlert(\'' + name + '\');');
    var scrollbar = document.getElementsByClassName("scrollbar")[0];
    scrollbar.appendChild(btn);
}


function showAddingButton (name) {
    var btn = document.createElement("BUTTON");
    var firstName = document.createTextNode(name);
    btn.appendChild(firstName);

    var att = document.createAttribute("class");
    att.value = "menuButtons1";
    btn.setAttributeNode(att);
    btn.setAttribute('onclick', 'changeVisibilityAddingAlert(\'' + name + '\');');
    var scrollbar = document.getElementsByClassName("scrollbar")[0];
    scrollbar.appendChild(btn);
}



function changeVisibilityRemovingAlert (name) {
  var buttons = document.getElementsByClassName("scrollbar");

  for (var i = 0; i < buttons.length; i++)
    buttons[i].style.display = "none";

  var removerButton = document.getElementById("remover");
  if (removerButton.style.visibility == "hidden")
    removerButton.style.visibility = "visible";

  var yes = document.createElement("BUTTON"); 
  yes.appendChild(document.createTextNode("Sim"));
  var no = document.createElement("BUTTON"); 
  no.appendChild(document.createTextNode("Não"));

  var att1 = document.createAttribute("class");
  att1.value = "option1";
  yes.setAttributeNode(att1);
  yes.setAttribute('onclick', ' removeAlert(\'' + name + '\'); window.location.assign("notificationsMenu.html");');
  
  var att2 = document.createAttribute("class");
  att2.value = "option2";
  no.setAttributeNode(att2);
  no.setAttribute('onclick', 'window.location.assign("notificationsMenu.html");');

  var cont = document.getElementById("container");
  cont.appendChild(removerButton);
  cont.appendChild(yes);
  cont.appendChild(no);
}


function changeVisibilityAddingAlert (name) {
  var buttons = document.getElementsByClassName("scrollbar");

  for (var i = 0; i < buttons.length; i++)
    buttons[i].style.display = "none";

  var addButton = document.getElementById("adicionar");
  if (addButton.style.visibility == "hidden")
    addButton.style.visibility = "visible";

  var yes = document.createElement("BUTTON"); 
  yes.appendChild(document.createTextNode("Sim"));
  var no = document.createElement("BUTTON"); 
  no.appendChild(document.createTextNode("Não"));

  var att1 = document.createAttribute("class");
  att1.value = "option1";
  yes.setAttributeNode(att1);
  yes.setAttribute('onclick', ' addAlert(\'' + name + '\'); window.location.assign("showAllNotifications.html");');

  var att2 = document.createAttribute("class");
  att2.value = "option2";
  no.setAttributeNode(att2);
  no.setAttribute('onclick', 'window.location.assign("notificationsMenu.html");');

  var cont = document.getElementById("container");
  cont.appendChild(addButton);
  cont.appendChild(yes);
  cont.appendChild(no);
}



function showRemovingButtons() {
  var len, name;
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  len = storedData.length;

  for (i = 0; i < len; i++) {
    name = storedData[i];
    showRemovingButton(name);
  }  
}


function showAddingButtons1() {
  var len, name;
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  len = day_one.length;

  for (i = 0; i < len; i++) {
    name = day_one[i];
    if (storedData == null)
      showAddingButton(name); 
    else if (!storedData.includes(name))
      showAddingButton(name)
  }  
}


function showAddingButtons2() {
  var len, name;
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  len = day_two.length;

  for (i = 0; i < len; i++) {
    name = day_two[i];
    if (storedData == null)
      showAddingButton(name); 
    else if (!storedData.includes(name))
      showAddingButton(name)

  }  
}




function showAllNotifications () {
  var len, name;
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  if (storedData != null) {
    len = storedData.length;

    for (i = 0; i < len; i++) {
      name = storedData[i];
      hora = hours[i],
      palco = palcos[i],
      showEvent(name, hora, palco);
    }
  }
}



function removeAlert (name) {
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  var i, len;
  len = storedData.length;

  var index = storedData.indexOf(name);
  storedData.splice(index,1);
  //storedData.sort();

  loadData(storedData);
}

/*var alert_active = "false";

function displayAlert(){
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  if(storedData.length != 0){
    var name = storedData[0];
    var alert_active = JSON.parse(localStorage.getItem('alert_active'));
    if (alert_active == "true") {
      var alert = document.getElementsByClassName('alertUnlocked')[0];
      byePopup();
      //var cross = document.getElementById('cross2');
      console.log(alert);
      alert.parentNode.removeChild(alert);
      //cross.parentNode.removeChild(cross);
      removeAlert(name);
      alert_active = "false";
      checkLocation();
    }
    else {
      showOnUnlock(name);
      alert_active = "true";
    }
    localStorage.setItem("alert_active", JSON.stringify(alert_active));
  }

}

function displayAlertOnLock(){
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  if(storedData.length != 0){
    var name = storedData[0];
    var alert_active = JSON.parse(localStorage.getItem('alert_active'));
    if (alert_active == "true") {
      var alert = document.getElementsByClassName('alertLock')[0];
      console.log(alert);
      alert.parentNode.removeChild(alert);
      removeAlert(name);
      alert_active = "false";
    }
    else {
      showOnLock(name);
      alert_active = "true";
    }
    localStorage.setItem("alert_active", JSON.stringify(alert_active));
  }

}

function alertOnLock() {
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  var name = storedData[0];
  var alert_active = JSON.parse(localStorage.getItem('alert_active'));
  if (alert_active == "true") {
    showOnLock(name);
  }

  localStorage.setItem("alert_active", JSON.stringify(alert_active));
}
function showOnLock (name) {
    var btn = document.createElement("BUTTON"); 
    var alert = document.createTextNode(name);
    btn.appendChild(alert);

    var att = document.createAttribute("class");
    att.value = "alertLock";
    btn.setAttributeNode(att);
    var scrollbar = document.getElementsByClassName("main_screen")[0];
    scrollbar.appendChild(btn); 
}

function byePopup() {
  var alert = document.getElementsByClassName('alertUnlocked')[0];
  var cross = document.getElementById("cross2");
  cross.style.display = "none";

}

function showOnUnlock (name) {
    var cross = document.getElementById("cross2");
    cross.style.display = "inline";

    var btn = document.createElement("BUTTON"); 
    var alert = document.createTextNode("Em 5 mins:\n" + name);
    btn.appendChild(alert);

    var att = document.createAttribute("class");
    att.value = "alertUnlocked";
    btn.setAttributeNode(att);
    var scrollbar = document.getElementsByClassName("main_screen")[0];
    scrollbar.appendChild(btn);
    //scrollbar.appendChild(img);
    //img.onclick = byePopup();
}*/