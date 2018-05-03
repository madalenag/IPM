var alerts = [];
var day_one = ["Alt-j", "The XX", "QOTSA","Rhye"]; 
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


function showEvent (name) {
    var btn = document.createElement("BUTTON"); 
    var alert = document.createTextNode(name);
    btn.appendChild(alert);

    var att = document.createAttribute("class");
    att.value = "eventbutton";
    btn.setAttributeNode(att);
    /*var att = document.createAttribute("id");
    att.value = "evento1";
    btn.setAttributeNode(att);*/
    var scrollbar = document.getElementsByClassName("scrollbar")[0];
    scrollbar.appendChild(btn); 
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
    if (storedData != null && !storedData.includes(name))
      showAddingButton(name);
  }  
}


function showAddingButtons2() {
  var len, name;
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  len = day_two.length;

  for (i = 0; i < len; i++) {
    name = day_two[i];
    if (storedData != null && !storedData.includes(name))
        showAddingButton(name);
  }  
}




function showAllNotifications () {
  var len, name;
  var storedData = JSON.parse(localStorage.getItem("AlertsData"));
  if (storedData != null) {
    len = storedData.length;

    for (i = 0; i < len; i++) {
      name = storedData[i];
      showEvent(name);
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