const Boton = document.getElementById('Boton');
const Boton2= document.getElementById('Boton2');

Boton.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'cambiaOscuro' });
  });
});

Boton2.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'cambiaClaro' });
  });
});
