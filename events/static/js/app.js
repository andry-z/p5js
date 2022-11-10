let link = document.querySelector("#myLink") //argomento = selettore css - link è un oggetto 
// link.innerHTML //HTML interno all'elemento html selezionato
link.addEventListener("click", function(e){
  e.preventDefault()
  let box = document.querySelector(".myBox")
  box.style.backgroundColor = rgb(`${r}, ${g}, ${b}`)
  b = b + 5
}) //metodo, quindi una funzione che prende due argomenti: 1. Il nome dell'evento che ci interessa 2. Una funzione 

// document è un oggetto globale(istanza di una classe, ha attributi(variabili) e metodi(funzioni)), rappresenta il DOM



 