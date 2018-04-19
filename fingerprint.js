function fingerprintPress() {
  document.getElementById("fingerprint").src = "./assets/icons/fingerprint12blue.png"
}

function fingerprintRelease() {
  var acceptFingerprint = Math.floor((Math.random() * 4) + 1);
  if (acceptFingerprint == 1) {
    window.location = "denyFingerprint.html";
  }
  else {
    window.location = "acceptFingerprint.html";
  }
}
