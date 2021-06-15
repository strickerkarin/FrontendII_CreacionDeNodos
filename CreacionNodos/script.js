const tarjetas = document.querySelectorAll('.tarjeta');
const imagenes = document.querySelectorAll('.imagen');

tarjetas.forEach((tarjeta, i) => {
    const enlace = document.createElement('a');
    enlace.classList.add('rutas-img');
    tarjeta.appendChild(enlace);  
    enlace.appendChild(imagenes[i]);
});

const links = document.querySelectorAll('.rutas-img');

links.forEach((link,i) => {
    const urlImagen = prompt('Ingrese la url de la imagen ' + (i+1) + ' por favor');
    link.setAttribute('href',urlImagen);
    link.setAttribute('target','_blank');

    imagenes[i].setAttribute('src',urlImagen);
    imagenes[i].setAttribute('width','300px');   
});

/* ETAPA 3
- Nodo padre: .contenedor
- Nodo hijo repetitivo: .tarjeta
- Hago un template con una función donde vaya creando todo lo que se repite, y pidiendo en cada vuelta el parámetro
que se va modificando.  Luego llamo a la función la cantidad de veces que sean necesarias.  */

/* const contenedor = document.querySelector('.contenedor');

function crearImagen(){
    const tarjeta = document.createElement("div");
    tarjeta.setAttribute('class','tarjeta');
    contenedor.appendChild(tarjeta);
    const enlace = document.createElement('a');
    tarjeta.appendChild(enlace);
    const urlImagen = prompt('Ingrese la url de la imagen');
    enlace.setAttribute('href',urlImagen);
    enlace.setAttribute('target','_blank');
    const imagen = document.createElement('img');
    imagen.setAttribute('src',urlImagen);
    imagen.setAttribute('width','400px'); 
    enlace.appendChild(imagen);    
};

for (let i = 0; i < 4; i++) {
    crearImagen();    
}; */

//También se puede hacer por un lado el template del html con la variable url y luego insertarla en otra función
//que pide el url con un prompt

/* const contenedor = document.querySelector('.contenedor');

function insertarImagen(urlImagen){
    const template = 
    `<div class = 'tarjeta'>
        <a href = '${urlImagen}' target= '_blank'>
            <img src = '${urlImagen}' class = 'imagen' width = '400px' >
        </a>
    </div>
    `
    contenedor.innerHTML += template;
}

function pedirImagen(){
    const urlImagen = prompt('Por favor, ingrese la url de la imagen');
    insertarImagen(urlImagen);
} 

for (let i = 0; i < 4; i++) {
    pedirImagen();    
} */






















