var algoletter = {
  a: "c1",
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
  z: "B{",
  " ": "C}",
  ".": "D|",
  ",": "E:",
  ";": "F;",
  ":": "G<",
  "?": "H>",
  "!": "I/",
  "-": "J\\",
  _: "K;",
  1: "L.",
  2: "M,",
  3: "N?",
  4: "O!",
  5: "P-",
  6: "Q_",
  7: "R@",
  8: "S#",
  9: "T$",
  0: "U%",
  "@": "V^",
  "#": "W&",
  $: "X*",
  "%": "Y(",
  "^": "Z)",
  "&": "a-",
  "*": "b_",
  "(": "c=",
  ")": "d+",
  "-": "e[",
  "=": "f{",
  "+": "g}",
  "[": "h|",
  "{": "i:",
  "]": "j;",
  "}": "k<",
  "|": "l>",
  "/": "m/",
  "\\": "n\\",
  "'": "o;",
  '"': "p.",
  "<": "q,",
  ">": "r?",
  ñ: "s!",
  Ñ: "t;",
  á: "u.",
  é: "v,",
  í: "w?",
  ó: "x!",
  ú: "y;",
  ü: "z:",
  Á: "A<",
  É: "B>",
  Í: "C/",
  Ó: "D\\",
  Ú: "E;",
  ü: "F.",
  "¡": "G,",
  "¿": "H?",
  "€": "I!",
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
