(function () {
  const vscode = acquireVsCodeApi();
  const executeBtn = document.getElementById('executeBtn');
  const previewBtn = document.getElementById('previewBtn');
  const clearBtn = document.getElementById('clearBtn');
  const input = document.getElementById('patchInput');
  const diag = document.getElementById('diagnostics');

  executeBtn.addEventListener('click', () => {
    diag.innerHTML = '';
    vscode.postMessage({
      command: 'applyPatch',
      text: input.value,
    });
  });

  previewBtn.addEventListener('click', () => {
    diag.innerHTML = '';
    vscode.postMessage({
      command: 'previewPatch',
      text: input.value,
    });
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    diag.innerHTML = '';
    input.style.height = '300px';
  });

  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';
  });

  window.addEventListener('message', event => {
    const message = event.data;
    const div = document.createElement('div');
    div.className = message.command;
    div.textContent = message.message;
    diag.appendChild(div);
  });
})();
