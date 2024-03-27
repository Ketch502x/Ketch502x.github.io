var algoletter = {
  a: "oz",
  b: "d2",
  c: "e3",
  d: "f4",
  e: "g5",
  f: "h6",
  g: "i7",
  h: "j8",
  i: "k9",
  j: "l0",
  k: "m!",
  l: "n@",
  m: "o#",
  n: "p$",
  o: "q%",
  p: "r^",
  q: "s&",
  r: "t*",
  s: "u(",
  t: "v)",
  u: "w-",
  v: "x_",
  w: "y=",
  x: "z+",
  y: "A[",
  z: "Bb",
  " ": "_",
  1: "Lr",
  2: "Mr",
  3: "Nr",
  4: "Or",
  5: "Pr",
  6: "Qr",
  7: "Rr",
  8: "Sr",
  9: "Tr",
  0: "Ur",
};

function encrypt() {
  var inputText = document.getElementById("inputText").value;
  var encryptedText = customEncrypt(inputText);
  document.getElementById("outputText").value = encryptedText;
}

function decrypt() {
  var inputText = document.getElementById("outputText").value;
  var decryptedText = customDecrypt(inputText);
  document.getElementById("outputText").value = decryptedText;
}

function customEncrypt(text) {
  var encryptedText = "";
  for (var i = 0; i < text.length; i++) {
    var character = text.charAt(i).toLowerCase();
    if (algoletter[character]) {
      encryptedText += algoletter[character];
    } else {
      encryptedText += character;
    }
  }
  return encryptedText;
}

function customDecrypt(text) {
  var decryptedText = "";
  for (var i = 0; i < text.length; i += 2) {
    var character = text.substr(i, 2);
    var reversedAlgoletter = reverseObject(algoletter);
    if (reversedAlgoletter[character]) {
      decryptedText += reversedAlgoletter[character];
    } else {
      decryptedText += character;
    }
  }
  return decryptedText;
}

function reverseObject(obj) {
  var reversed = {};
  for (var key in obj) {
    reversed[obj[key]] = key;
  }
  return reversed;
}
