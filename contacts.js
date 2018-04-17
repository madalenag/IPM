var contacts = [];
var names = ["Jorge", "Madalena", "Daniela","Pedro", "João", "Nuno", "Sofia", "Soraia", "Matilde", "Alice", "Rui"]; 

function randomName () { 
  name = names[Math.floor((Math.random() * 10) + 1)]; 
  return name; 
}

function loadData (data) {
  localStorage.setItem("Data", JSON.stringify(data));
}


function addFriend (name) {
  var storedData = JSON.parse(localStorage.getItem("Data"));
  if (storedData != null) {
    storedData.push(name);
    loadData(storedData);
  }
  else {
    contacts.push(name);
    loadData(contacts);
  }
}


function showFriend (name) {
    var btn = document.createElement("BUTTON"); 
    var firstName = document.createTextNode(name);
    btn.appendChild(firstName);

    var att = document.createAttribute("class");
    att.value = "menuButtons";
    btn.setAttributeNode(att);
    btn.setAttribute('onclick', 'window.location.assign("map.html");');
    var scrollbar = document.getElementsByClassName("scrollbar")[0];
    scrollbar.appendChild(btn); 
}


function showRemovingButton (name) {
    var btn = document.createElement("BUTTON");
    var firstName = document.createTextNode(name);
    btn.appendChild(firstName);

    var att = document.createAttribute("class");
    att.value = "menuButtons";
    btn.setAttributeNode(att);
    btn.setAttribute('onclick', 'changeVisibilityRemoving(\'' + name + '\');');
    var scrollbar = document.getElementsByClassName("scrollbar")[0];
    scrollbar.appendChild(btn);
}


function showAddingButton (name) {
    var btn = document.createElement("BUTTON");
    var firstName = document.createTextNode(name);
    btn.appendChild(firstName);

    var att = document.createAttribute("class");
    att.value = "option1";
    btn.setAttributeNode(att);
    btn.setAttribute('onclick', 'changeVisibilityAdding(\'' + name + '\');');
    var scrollbar = document.getElementsByClassName("scrollbar")[0];
    scrollbar.appendChild(btn);
}



function changeVisibilityRemoving (name) {
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
  yes.setAttribute('onclick', ' removeFriend(\'' + name + '\'); window.location.assign("localizePeople.html");');
  
  var att2 = document.createAttribute("class");
  att2.value = "option2";
  no.setAttributeNode(att2);
  no.setAttribute('onclick', 'window.location.assign("localizePeople.html");');

  var cont = document.getElementById("container");
  cont.appendChild(removerButton);
  cont.appendChild(yes);
  cont.appendChild(no);
}


function changeVisibilityAdding (name) {
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
  yes.setAttribute('onclick', ' addFriend(\'' + name + '\'); window.location.assign("localize.html");');

  var att2 = document.createAttribute("class");
  att2.value = "option2";
  no.setAttributeNode(att2);
  no.setAttribute('onclick', 'window.location.assign("localize.html");');

  var cont = document.getElementById("container");
  cont.appendChild(addButton);
  cont.appendChild(yes);
  cont.appendChild(no);
}



function showRemovingButtons() {
  var len, name;
  var storedData = JSON.parse(localStorage.getItem("Data"));
  len = storedData.length;

  for (i = 0; i < len; i++) {
    name = storedData[i];
    showRemovingButton(name);
  }  
}


function showAddingButtons() {
  name = randomName();
  showAddingButton(name);
}


function showAll () {
  var len, name;
  var storedData = JSON.parse(localStorage.getItem("Data"));
  len = storedData.length;

  for (i = 0; i < len; i++) {
    name = storedData[i];
    showFriend(name);
  }
}



function removeFriend (name) {
  var storedData = JSON.parse(localStorage.getItem("Data"));
  var i, len;
  len = storedData.length;

  var index = storedData.indexOf(name);
  storedData.splice(index,1);

  loadData(storedData);
}