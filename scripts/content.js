
function cambiaOscuro() {
    const elementos = document.querySelectorAll("*");
    for (i = 0; i < elementos.length; i++) {
      if(elementos[i].tagName=="input"){
      elementos[i].classList.add("input-oscuro");
      }else{
        if(elementos[i].tagName=="button"){
          elementos[i].classList.add("boton-oscuro");
        }else{
          elementos[i].classList.add("tema-oscuro");
        }
      }
  }
}

function cambiaClaro() {
  const elementos = document.querySelectorAll("*");
  for (i = 0; i < elementos.length; i++) {
    if(elementos[i].tagName=="input"){
      elementos[i].classList.remove("input-oscuro");
      }else{
        if(elementos[i].tagName=="button"){
          elementos[i].classList.remove("boton-oscuro");
        }else{
          elementos[i].classList.remove("tema-oscuro");
        }
      }
  }
}

  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'cambiaOscuro') {
      cambiaOscuro();
    }else{
      if(request.action === 'cambiaClaro'){
        cambiaClaro();
      }
    }
  });