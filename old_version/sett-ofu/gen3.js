let placeholder = `// Código ofuscado de ejemplo\nconst _0x38a2db = ['\\x54\\x6f\\x74a\\x6c', '\\x6c\\x6f\\x67', '\\x3a\\x20'];\nconst _0x9b58d9 = function(_0x39ddb7) {\n\treturn _0x38a2db[_0x39ddb7 + (-0x6d5 + 0x58 + 0x11 * 0x62)];\n}, _0x498b9b = function(_0x48d808, _0x14da1e) {\n    return _0x9b58d9(_0x48d808);\n}, _0x34c7bc = function(_0x16af1d, _0x27a29e) {\n    return _0x498b9b(_0x16af1d);\n}, _0x23a1 = _0x34c7bc;\nlet total = 0x2 * 0x109e + -0xc * -0x16a + -0x3234;\nfor (let i = 0x1196 + 0x97b * 0x3 + -0x2e07; i < -0x95 * -0x38 + -0x1a75 + -0x619; i++) {\n\ttotal += i;\n}\nconsole[_0x34c7bc(-(0x1e7c + -0x1 * -0x1367 + 0x2ef * -0x11))](_0x498b9b(-(0x1020 + 0x253 + 0x7 * -0x2a2)) + _0x23a1(-(0x12c5 + -0x1887 + -0x1 * -0x5c5)) + total);`;
document.getElementById('input').value = placeholder;
window.inputEditor = CodeMirror.fromTextArea(
  document.getElementById('input'),
  {
    mode: 'javascript',
    lineNumbers: true,
    indentUnit: 4
  }
);
window.outputEditor = CodeMirror.fromTextArea(
  document.getElementById('output'),
  {
    mode: 'javascript',
    lineNumbers: true,
    indentUnit: 4,
    readOnly: true
  }
);