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
var orders = ["XLDog", "CornDog", "Batatas", "Xburger", "Batatas", "Bebida", "Fatia", "Média", "Cerveja", "T-shirt", "Caneca", "Chapéu"];
var prices = [3, 4, 2, 3, 2, 1.5,2,4,1, 6,3,4];
var preco = 5;
var preco2 = 5;


function hideAmountSelection () {
  var buttons = document.getElementsByClassName("scrollbar");

  for (var i = 0; i < buttons.length; i++)
    buttons[i].style.display = "inline-block";

  var cont = document.getElementsByClassName("containerSelection");

  for (var i = 0; i < cont.length; i++)
    cont[i].style.display = "none";
}


function showAmountSelecction (order) {
  var buttons = document.getElementsByClassName("scrollbar");

  for (var i = 0; i < buttons.length; i++)
    buttons[i].style.display = "none";

  var cont = document.getElementsByClassName("containerSelection");

  for (var i = 0; i < buttons.length; i++)
    cont[i].style.display = "inline";
}


function incrementa() {
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
  preco += preco2;
  document.getElementById('preco').innerHTML = "Preço: " + preco + "€";
}


function decrementa() {
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
  preco -= preco2;
  document.getElementById('preco').innerHTML = "Preço: " + preco + "€";
}
