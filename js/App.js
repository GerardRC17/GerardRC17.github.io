const tabla = document.querySelector('#lista-hoteles tbody');
const tabla1 = document.querySelector('#lista-hoteles2 tbody');
const tabla2 = document.querySelector('#lista-hoteles3 tbody');
const tabla3 = document.querySelector('#lista-hoteles4 tbody');



function CargarLista() {
    fetch('https://www.cityexpress.com/data/autocomplete.json')
        .then(res => res.json()) //indicamos el formato en que se desea obtener la indicacion
        .then(listas => {
            listas.forEach(item => {

                if (item.marca === 'CP') {
                    const row = document.createElement('tr');
                    row.innerHTML += `<td>${item.label}</td><td>${item.value}</td><td>${item.tipo}</td><td>${item.marca}</td>`;
                    tabla.appendChild(row);
                }
                               
            });

         }) //mostramos dicha informacion 
        .catch(error => console.log('Hubo un error : ' + error.message))
}

CargarLista();

function CargarLista1() {
    fetch('https://www.cityexpress.com/data/autocomplete.json')
        .then(res => res.json()) //indicamos el formato en que se desea obtener la indicacion
        .then(listas => {
            listas.forEach(item => {

                if (item.marca === 'CE') {
                    const row = document.createElement('tr');
                    row.innerHTML += `<td>${item.label}</td><td>${item.value}</td><td>${item.tipo}</td><td>${item.marca}</td>`;
                    tabla1.appendChild(row);
                }
                               
            });

         }) //mostramos dicha informacion 
        .catch(error => console.log('Hubo un error : ' + error.message))
}

CargarLista1();

function CargarLista2() {
    fetch('https://www.cityexpress.com/data/autocomplete.json')
        .then(res => res.json()) //indicamos el formato en que se desea obtener la indicacion
        .then(listas => {
            listas.forEach(item => {

                if (item.marca === 'CS') {
                    const row = document.createElement('tr');
                    row.innerHTML += `<td>${item.label}</td><td>${item.value}</td><td>${item.tipo}</td><td>${item.marca}</td>`;
                    tabla2.appendChild(row);
                }
                               
            });

         }) //mostramos dicha informacion 
        .catch(error => console.log('Hubo un error : ' + error.message))
}

CargarLista2();

function CargarLista3() {
    fetch('https://www.cityexpress.com/data/autocomplete.json')
        .then(res => res.json()) //indicamos el formato en que se desea obtener la indicacion
        .then(listas => {
            listas.forEach(item => {

                if (item.marca === 'CJ') {
                    const row = document.createElement('tr');
                    row.innerHTML += `<td>${item.label}</td><td>${item.value}</td><td>${item.tipo}</td><td>${item.marca}</td>`;
                    tabla3.appendChild(row);
                }
                               
            });

         }) //mostramos dicha informacion 
        .catch(error => console.log('Hubo un error : ' + error.message))
}

CargarLista3();



