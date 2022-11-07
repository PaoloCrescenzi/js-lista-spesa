const listaSpesa = ['pasta', 'pane', 'carne', 'cipolla', 'detersivo'];
let OutputName = document.getElementById("oggetto");
let i = 0;

while ( i < listaSpesa.length ) {
    console.log(listaSpesa[i]);
    OutputName.innerHTML += `<li>${listaSpesa[i]}</li>`;
    i++;
  }