// LocalStorage.

// Local Storage funciona con una especie de Llave valor


localStorage.setItem('nombre', 'Nicolas');

// añadir algo a sessionstorage
sessionStorage.setItem('nombre', 'Pablo');

// Local Storage solo soporta strings, no soporta arrays ni objetos pero puedes almacenarlos convirtiendolos a string

const producto = {
    nombre: 'Iphone 13"',
    precio: 900
}

const productoString = JSON.stringify(producto);
localStorage.setItem('productoJSON', productoString);



// Lo mismo con un array
 const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses',  JSON.stringify(meses));
