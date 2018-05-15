/*changes the appearance of the finalizeButton so that it allows the purchase when added an item*/
function allowPurchase() {
  document.getElementById("invisibleButton").style.display = "inline";
  document.getElementById("invisibleButton").style.visibility = "hidden";
  document.getElementById("finalizeButton").style.position = "fixed";
  document.getElementById("finalizeButton").style.top = "3.68in";
  document.getElementById("finalizeButton").style.left = "6.55in";
  document.getElementById("finalizeButton").style.backgroundColor = "#56f75e";
  document.getElementById("finalizeButton").style.border = "solid #026007";
  document.getElementById("finalizeButton").src = "./assets/icons/shopping-cart-green.png";
}

var i = 1;
var saldo = 59;
var orders = ["XLDog", "CornDog", "Batatas", "Xburger", "Batatas", "Bebida", "Fatia", "Média", "Cerveja", "T-shirt", "Caneca", "Chapéu"];
var imgs = ["./assets/icons/sausage (1).png", "./assets/icons/sausage.png", "./assets/icons/french-fries.png", 
"./assets/icons/hamburger.png", "./assets/icons/french-fries.png", "./assets/icons/drink.png", 
"./assets/icons/pizza (5).png","./assets/icons/pizza (4).png", "./assets/icons/pint.png",
 "./assets/icons/shirt1.png", "./assets/icons/mug.png", "./assets/icons/cap.png" ];
var carrinho = [];
var carr_quant= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var carr_precos= [3, 4, 2, 3, 2, 1.5, 2, 4, 1, 6, 3, 4];
var prices = [3, 4, 2, 3, 2, 1.5, 2, 4, 1, 6, 3, 4];
var preco = 0;


function hideAmountSelection () {
  var buttons = document.getElementsByClassName("scrollbar");

  for (var j = 0; j < buttons.length; j++)
    buttons[j].style.display = "inline-block";

  var cont = document.getElementsByClassName("containerSelection");

  for (var j = 0; j < cont.length; j++)
    cont[j].style.display = "none";
}


function showAmountSelecction (order) {
  var buttons = document.getElementsByClassName("scrollbar");

  for (var j = 0; j < buttons.length; j++)
    buttons[j].style.display = "none";

  document.getElementById("preco").style.visibility = "visible";
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

  preco += prices[order];
  document.getElementById('preco').innerHTML = "Preço: " + preco + "€";

  document.getElementById("confirmButton").setAttribute('onclick', "confirm(" + order + "," + i + "," + preco + ")");
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
  preco -= prices[order];
  document.getElementById('preco').innerHTML = "Preço: " + preco + "€";

  document.getElementById("confirmButton").setAttribute('onclick', "confirm(" + order + "," + i + "," + preco + ")");

}


function confirm(order, i, price) {
  var sald = saldo - price;
  if (sald < 0) {
    window.alert("Não");
  } 
  else {
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
    loadSaldo(sald);
  }

  window.location.assign("showCarrinho.html");

}


function addButton (order) {
  var button = document.createElement("BUTTON");
  var att1 = document.createAttribute("class");
  att1.value = "menuButtons1";
  button.setAttributeNode(att1);

  var quantidade = getQuantidade();
  var precos = getPrecos();
  button.appendChild(document.createTextNode(quantidade[order] + " "));
  button.appendChild(document.createTextNode(precos[order] + "  "));

  var img = document.createElement("IMG");
  img.src = imgs[order];
  var att2 = document.createAttribute("class");
  att2.value = "menuIcons";
  img.setAttributeNode(att2);
  button.appendChild(img);

  var scrollbar = document.getElementsByClassName("scrollbar")[0];
  scrollbar.appendChild(button);
}

function cenas() {
  var carr = getCarrinho();
  if (carr != null) {
    for (let j = 0; j < carr.length; j++)
      addButton(orders.indexOf(carr[j]));
  }
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

