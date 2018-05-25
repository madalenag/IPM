/*changes the appearance of the finalizeButton so that it allows the purchase when added an item*/

function allowPurchase() {
  if(getCarrinho().length !== 0) {
    document.getElementById("green_car").style.display = "inline";
    document.getElementById("grey_car").style.display = "none";
  }
  else {
    document.getElementById("green_car").style.display = "none";
    document.getElementById("grey_car").style.display = "inline";
    /*document.getElementById("finalizeButton").src = "./assets/icons/shopping-cart-green.png";*/
  }
}

function finalizePurchase() {
  var buttons = document.getElementsByClassName("scrollbar");
  for (var j = 0; j < buttons.length; j++)
    buttons[j].style.display = "none";

  document.getElementById("preco2").style.visibility = "visible";
  document.getElementById("preco2").innerHTML = "Custo Total: " + getTotalPrecos() + "€";
  document.getElementById("saldo2").style.visibility = "visible";
  if(getSaldo() !== null) {
    document.getElementById("saldo2").innerHTML = "Saldo: " + getSaldo() + "€";
  }
  else {
    document.getElementById("saldo2").innerHTML = "Saldo: 0€";
  }
  document.getElementById("purchaseText2").style.visibility = "visible";
  document.getElementById("confirmButton").style.display = "inline-block";
  document.getElementById("denyButton").style.display = "inline-block";
}

function yesPurchase() {
  var saldo = getSaldo();
  var total = getTotalPrecos();
  if(saldo >= total) {
    loadSaldo(saldo - total);
    remove(); /*remove tudo do carrinho se a compra for efetuada*/
    window.location.assign("meetingPoints.html");
  }
  else {
    window.location.assign("denyPurchase.html");
  }
}

function noPurchase() {
  var buttons = document.getElementsByClassName("scrollbar");
  for (var j = 0; j < buttons.length; j++)
    buttons[j].style.display = "inline";

  document.getElementById("preco2").style.visibility = "hidden";
  document.getElementById("saldo2").style.visibility = "hidden";
  document.getElementById("purchaseText2").style.visibility = "hidden";
  document.getElementById("confirmButton").style.display = "none";
  document.getElementById("denyButton").style.display = "none";
}

var i = 1;
var saldo = 30;
var orders = ["XLDog", "CornDog", "Gelado", "Xburger", "Batatas", "Bebida", "Fatia", "Média", "Cerveja", "T-shirt", "Caneca", "Chapéu"];
var imgs = ["./assets/icons/sausage (1).png", "./assets/icons/sausage.png", "./assets/icons/ice-cream(1).png",
"./assets/icons/hamburger.png", "./assets/icons/french-fries.png", "./assets/icons/drink.png",
"./assets/icons/pizza (5).png","./assets/icons/pizza (4).png", "./assets/icons/pint.png",
 "./assets/icons/shirt1.png", "./assets/icons/mug.png", "./assets/icons/cap.png" ];
var carrinho = [];
var carr_quant= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var carr_precos= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var prices = [3, 4, 2, 3, 2, 1.5, 2, 4, 1, 6, 3, 4];
var preco = 0;



function hideAmountSelection () {
  var buttons = document.getElementsByClassName("container");

  for (var j = 0; j < buttons.length; j++)
    buttons[j].style.display = "inline-block";


  document.getElementById("preco").style.visibility = "hidden";
  document.getElementById("saldo").style.visibility = "hidden";
  document.getElementById("square").style.display = "none";
  document.getElementById("add1").style.display = "none";
  document.getElementById("dontless1").style.display = "none";
  document.getElementById("less1").style.display = "none";

  var options = document.getElementsByClassName("optionsPurchase");
  for (var j = 0; j < options.length; j++)
    options[j].style.display = "none";


  var elem = document.getElementsByClassName("carrinhoOnClick");
  for (var j = 0; j < elem.length; j++)
    elem[j].style.display = "none";

  var elements = document.getElementsByClassName("finalizePurchaseButtons");
  for(var j=0; j<elements.length; j++)
    elements[j].style.display = "none";

}


function showAmountSelecction (order) {
  i = 1;

  var buttons = document.getElementsByClassName("container");

  for (var j = 0; j < buttons.length; j++)
    buttons[j].style.display = "none";

  var new_saldo;

  if (getSaldo() === null)
    new_saldo = 0;
  else
    new_saldo = getSaldo();


  var elem = document.getElementsByClassName("carrinhoOnClick");
  for (var j = 0; j < elem.length; j++)
    elem[j].style.display = "none";

  var elements = document.getElementsByClassName("finalizePurchaseButtons");
  for(var j=0; j<elements.length; j++)
    elements[j].style.display = "none";

  document.getElementById("preco").style.visibility = "visible";
  document.getElementById("saldo").style.visibility = "visible";
  console.log(document.getElementById("preco"));
  document.getElementById('square').innerHTML = i;
  document.getElementById('saldo').innerHTML = "Saldo: " + new_saldo + "€";
  document.getElementById('preco').innerHTML = "Preço: " + prices[order] + "€";
  document.getElementById("square").style.display = "inline";
  document.getElementById("add1").style.display = "inline-block";
  document.getElementById("dontless1").style.display = "inline";

  var options = document.getElementsByClassName("optionsPurchase");
  for (var j = 0; j < options.length; j++)
    options[j].style.display = "inline";

  var add = document.getElementById("add1");
  add.setAttribute('onclick', 'incrementa(\'' + order + '\');')

  var less = document.getElementById("less1");
  less.setAttribute('onclick', 'decrementa(\'' + order + '\');')

  document.getElementById("confirmButton").setAttribute('onclick', "confirm(" + order + "," + i + "," + prices[order] + ")");
}



function editAmountSelecction (order, quantidade, preco) {
  i = quantidade;

  var buttons = document.getElementsByClassName("container");
  for (var j = 0; j < buttons.length; j++)
    buttons[j].style.display = "none";

  var new_saldo;

  if (getSaldo() === null)
    new_saldo = 0;
  else
    new_saldo = getSaldo();

  document.getElementById("preco").style.visibility = "visible";
  document.getElementById("saldo").style.visibility = "visible";
  document.getElementById('square').innerHTML = i;
  document.getElementById('saldo').innerHTML = "Saldo: " + new_saldo + "€";
  document.getElementById('preco').innerHTML = "Preço: " + preco + "€";
  document.getElementById("square").style.display = "inline";
  document.getElementById("add1").style.display = "inline-block";
  document.getElementById("dontless1").style.display = "inline";

  if (quantidade == 1) {
    document.getElementById('less1').style.display = "none";
    document.getElementById('dontless1').style.display = "inline";
  }
  else {
    document.getElementById('less1').style.display = "inline";
    document.getElementById('dontless1').style.display = "none";
  }

  var options = document.getElementsByClassName("optionsPurchase");
  for (var j = 0; j < options.length; j++)
    options[j].style.display = "inline";

  var elements = document.getElementsByClassName("finalizePurchaseButtons");
  for(var j=0; j<elements.length; j++)
    elements[j].style.display = "none";


  var add = document.getElementById("add1");
  add.setAttribute('onclick', "edit_incrementa(" + order + ")");

  var less = document.getElementById("less1");
  less.setAttribute('onclick', "edit_decrementa(" + order + ")");

  document.getElementById("confirmButton").setAttribute('onclick', "finalizeEdition(" + order + "," + i + "," + prices[order] + ")");
}


function finalizeEdition(order, quant, preco) {
  var buttons = document.getElementsByClassName("container");

  for (var j = 0; j < buttons.length; j++)
    buttons[j].style.display = "none";

  document.getElementById("preco").style.visibility = "hidden";
  document.getElementById("saldo").style.visibility = "hidden";
  document.getElementById("square").style.display = "none";
  document.getElementById("add1").style.display = "none";
  document.getElementById("dontless1").style.display = "none";
  document.getElementById("less1").style.display = "none";

  var options = document.getElementsByClassName("optionsPurchase");
  for (var j = 0; j < options.length; j++)
    options[j].style.display = "none";


  var elem = document.getElementsByClassName("carrinhoOnClick");
  for (var j = 0; j < elem.length; j++)
    elem[j].style.display = "none";

  var elements = document.getElementsByClassName("finalizePurchaseButtons");
  for(var j=0; j<elements.length; j++)
    elements[j].style.display = "inline";

  document.getElementById("confirmar").setAttribute('onclick', "confirm_edit(" + order + "," + quant + "," + preco + ")");

}



function incrementa(order) {
  i++;
  if (i === 1) {
    document.getElementById('less1').style.display = "none";
    document.getElementById('dontless1').style.display = "inline";
  }
  else {
    document.getElementById('less1').style.display = "inline";
    document.getElementById('dontless1').style.display = "none";
  }
  document.getElementById('square').innerHTML = "" + i + "";

  var preco = prices[order] * i;

  document.getElementById('preco').innerHTML = "Preço: " + preco + "€";

  document.getElementById("confirmButton").setAttribute('onclick', "confirm(" + order + "," + i + "," + preco+ ")");
}


function edit_incrementa(order) {
  i++
  if (i === 1) {
    document.getElementById('less1').style.display = "none";
    document.getElementById('dontless1').style.display = "inline";
  }
  else {
    document.getElementById('less1').style.display = "inline";
    document.getElementById('dontless1').style.display = "none";
  }

  document.getElementById('square').innerHTML = "" + i + "";
  var preco = prices[order] * i;
  document.getElementById('preco').innerHTML = "Preço: " + preco + "€";
  document.getElementById("confirmButton").setAttribute('onclick', "finalizeEdition(" + order + "," + i + "," + preco+ ")");
}



function decrementa(order) {
  i--;
  if (i === 1) {
    document.getElementById('less1').style.display = "none";
    document.getElementById('dontless1').style.display = "inline";
  }
  else {
    document.getElementById('less1').style.display = "inline";
    document.getElementById('dontless1').style.display = "none";
  }
  document.getElementById('square').innerHTML = "" + i + "";
  var preco = prices[order] * i;
  document.getElementById('preco').innerHTML = "Preço: " + preco + "€";

  document.getElementById("confirmButton").setAttribute('onclick', "confirm(" + order + "," + i + "," + preco + ")");

}


function edit_decrementa(order) {
  i--;
  if (i === 1) {
    document.getElementById('less1').style.display = "none";
    document.getElementById('dontless1').style.display = "inline";
  }
  else {
    document.getElementById('less1').style.display = "inline";
    document.getElementById('dontless1').style.display = "none";
  }
  document.getElementById('square').innerHTML = "" + i + "";
  var preco = prices[order] * i;
  document.getElementById('preco').innerHTML = "Preço: " + preco + "€";

  document.getElementById("confirmButton").setAttribute('onclick', "finalizeEdition(" + order + "," + i + "," + preco + ")");

}


function confirm(order, i, price) {
  var old_saldo;
  if (getSaldo() === null)
    old_saldo = 30;
  else
    old_saldo = getSaldo();

    if (getCarrinho() === null) {
      carrinho.push(orders[order]);
      loadCarrinho(carrinho);
      carr_quant[order] += i;
      loadQuantidade(carr_quant);
      carr_precos[order] += price;
      loadPrecos(carr_precos);
    }
    else {
      var carr = getCarrinho();
      var precos = getPrecos();
      var quant = getQuantidade();

      var idx = carr.indexOf(orders[order]);
      if (idx === -1) {
        carr.push(orders[order]);
        loadCarrinho(carr);
      }
      quant[order] += i;
      precos[order] += price;
      loadPrecos(precos);
      loadQuantidade(quant);
    }

    allowPurchase();
    hideAmountSelection();
}


function confirm_edit(order, i, price) {
  var old_saldo;
  if (getSaldo() === null)
    old_saldo = 30;
  else
    old_saldo = getSaldo();

    if (getCarrinho() === null) {
      carrinho.push(orders[order]);
      loadCarrinho(carrinho);
      carr_quant[order] = i;
      loadQuantidade(carr_quant);
      carr_precos[order] = price;
      loadPrecos(carr_precos);
    }
    else {
      var carr = getCarrinho();
      var precos = getPrecos();
      var quant = getQuantidade();

      var idx = carr.indexOf(orders[order]);
      if (idx === -1) {
        carr.push(orders[order]);
        loadCarrinho(carr);
      }
      quant[order] = i;
      precos[order] = price;
      loadPrecos(precos);
      loadQuantidade(quant);
    }
    location.assign("editCarrinho.html");
}


function addButton (order) {
  var button = document.createElement("BUTTON");
  var att1 = document.createAttribute("class");
  att1.value = "eventbutton";
  button.setAttributeNode(att1);

  var quantidade = getQuantidade();
  var precos = getPrecos();

  var img = document.createElement("IMG");
  img.src = imgs[order];
  var att2 = document.createAttribute("class");
  att2.value = "eventIcons";
  img.setAttributeNode(att2);
  button.appendChild(img);
  button.appendChild(document.createTextNode( " " + orders[order]));

  button.setAttribute('onclick', 'getFood(\'' + orders[order] + '\', \'' + quantidade[order] + '\', \'' + precos[order] + '\');');


  var scrollbar = document.getElementsByClassName("scrollbar")[0];
  scrollbar.appendChild(button);
}


function editButton (order) {
  var button = document.createElement("BUTTON");
  var att1 = document.createAttribute("class");
  att1.value = "eventbutton";
  button.setAttributeNode(att1);

  var quantidade = getQuantidade();
  var precos = getPrecos();

  var img = document.createElement("IMG");
  img.src = imgs[order];
  var att2 = document.createAttribute("class");
  att2.value = "eventIcons";
  img.setAttributeNode(att2);
  button.appendChild(img);
  button.appendChild(document.createTextNode( " " + orders[order]));

  button.setAttribute('onclick', 'editAmountSelecction(\'' + order + '\', \'' + quantidade[order] + '\', \'' + precos[order] + '\');');


  var scrollbar = document.getElementsByClassName("scrollbar")[0];
  scrollbar.appendChild(button);
}

function showCarrinho() {
  var carr = getCarrinho();
  if (carr != null) {
    for (let j = 0; j < carr.length; j++)
      addButton(orders.indexOf(carr[j]));
  }
}


function editCarrinho() {
  var carr = getCarrinho();
  if (carr != null) {
    for (let j = 0; j < carr.length; j++)
      editButton(orders.indexOf(carr[j]));
  }
}

function getFood(name, horas, palco) {
  document.getElementById('bubble1').style.visibility = "visible";
  document.getElementById('cross1').style.visibility = "visible";
  document.getElementById('bubble1').innerHTML = name + "\nQuant: " + horas + "\nPreço: " + palco + "€";
}


function loadCarrinho (data) {
  localStorage.setItem("Carrinho", JSON.stringify(data));
}

function loadPrecos (data) {
  localStorage.setItem("Precos", JSON.stringify(data));
}

function loadQuantidade (data) {
  localStorage.setItem("Quantidade", JSON.stringify(data));
}

function loadSaldo(data) {
  localStorage.setItem("Saldo", JSON.stringify(data));
}

function getSaldo() {
  return JSON.parse(localStorage.getItem("Saldo"));
}

function getCarrinho () {
  return JSON.parse(localStorage.getItem("Carrinho"));
}

function getPrecos () {
  return JSON.parse(localStorage.getItem("Precos"));
}

function getQuantidade () {
  return JSON.parse(localStorage.getItem("Quantidade"));
}

function getTotalPrecos() {
  var precos = getPrecos();
  var total = 0;
  for(var j = 0; j < precos.length; j++) {
    total += precos[j];
  }
  return total;
}

function remove() {
  localStorage.removeItem("Carrinho");

  var precos = getPrecos();
  for (let j = 0; j < precos.length; j++)
    precos[j] = 0;
  loadPrecos(precos);

  var quant = getQuantidade();
  for (let j = 0; j < quant.length; j++)
    quant[j] = 0;
  loadQuantidade(quant);
}

/* conta.html */

function contaSaldo(){
  var sald;
  if (getSaldo()===null)
    sald = 0
  else
    sald = getSaldo();
  document.getElementById('saldoConta').innerHTML = "Saldo: " + sald + "€";
}

function carregarSaldo(money){
  var sald;
  if (getSaldo()===null)
    sald = 0
  else
    sald = getSaldo();
  sald += money;
  loadSaldo(sald);
  window.location.assign("carregamentoBemSucedido.html")

}


/*remover*/
function removeElem (order) {
  var storedData = getCarrinho();
  var len = storedData.length;

  var index = storedData.indexOf(orders[order]);
  storedData.splice(index,1);

  var precos = getPrecos();
  precos[order] = 0;
  loadPrecos(precos);

  var quant = getQuantidade();
  quant[order] = 0;
  loadQuantidade(quant);

  loadCarrinho(storedData);
}


function changeVisibilityRem (order) {
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
  if(getCarrinho().length === 1){
    yes.setAttribute('onclick', ' removeElem(\'' + order + '\'); window.location.assign("orders.html");');
    //allowPurchase();
  }

  else
    yes.setAttribute('onclick', ' removeElem(\'' + order + '\'); window.location.assign("showCarrinho.html");');

  var att2 = document.createAttribute("class");
  att2.value = "option2";
  no.setAttributeNode(att2);
  no.setAttribute('onclick', 'window.location.assign("showCarrinho.html");');

  var cont = document.getElementById("container");
  cont.appendChild(removerButton);
  cont.appendChild(yes);
  cont.appendChild(no);
}


function showRemButtons() {
  var len, name;
  var storedData = getCarrinho();
  len = storedData.length;

  if (storedData != null) {
    for (let j = 0; j < len; j++)
      addRemButton(orders.indexOf(storedData[j]));
  }
}


function addRemButton (order) {
  var button = document.createElement("BUTTON");
  var att1 = document.createAttribute("class");
  att1.value = "eventbutton";
  button.setAttributeNode(att1);

  var quantidade = getQuantidade();
  var precos = getPrecos();

  var img = document.createElement("IMG");
  img.src = imgs[order];
  var att2 = document.createAttribute("class");
  att2.value = "eventIcons";
  img.setAttributeNode(att2);
  button.appendChild(img);
  button.appendChild(document.createTextNode( " " + orders[order]));

  button.setAttribute('onclick', 'changeVisibilityRem(\'' + order + '\');');


  var scrollbar = document.getElementsByClassName("scrollbar")[0];
  scrollbar.appendChild(button);
}
