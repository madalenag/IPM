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
