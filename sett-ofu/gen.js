const outputTextArea = document.getElementById('output');
      const copyBtn = document.getElementById('copyButton');
      const deobfuscateBtn = document.getElementById('deobfuscateButton');
      const tooltip = document.getElementById('tooltip');
      const errorMessage = document.getElementById('errorMessage');

      deobfuscateBtn.addEventListener('click', function () {
        errorMessage.style.display = 'none';
        const source = window.inputEditor.getValue();
        const output = deobfuscator.deobfuscate(source, getConfig());
        window.outputEditor.setValue(output);
        verify();
      });

      copyBtn.addEventListener('click', function myFunction() {
        copyToClipboard(window.outputEditor.getValue());

        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';

        copyBtn.addEventListener('mouseout', function () {
          tooltip.style.visibility = 'hidden';
          tooltip.style.opacity = '0';
        });
      });

      function getConfig() {
        return {
          arrays: {
            unpackArrays: document.getElementById('unpackArrays').checked,
            removeArrays: document.getElementById('removeArrays').checked
          },
          proxyFunctions: {
            replaceProxyFunctions: document.getElementById('replaceProxyFunctions').checked,
            removeProxyFunctions: document.getElementById('removeProxyFunctions').checked
          },
          expressions: {
            simplifyExpressions: document.getElementById('simplifyExpressions').checked,
            removeDeadBranches: document.getElementById('removeDeadBranches').checked
          },
          miscellaneous: {
            beautify: document.getElementById('beautify').checked,
            simplifyProperties: document.getElementById('simplifyProperties').checked,
            renameHexIdentifiers: document.getElementById('renameHexIdentifiers').checked
          }
        };
      }

      function copyToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        document.execCommand('copy');
        document.body.removeChild(textArea);
      }