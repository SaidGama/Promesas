let container = document.getElementById("contenedor");

function getProducto() {
    return new Promise((resolve, reject) => {
        if (producto == null) {
            reject(new Error("Producto no existe"));
        }
        setTimeout(() => { resolve(producto); }, 5000);
    });
}

function mostrarProductos(producto) {

    producto.forEach(item => {
        let card = `
            <div class = "cajitas">
                <div class="card h-100" style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top" alt="imagen">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <h6 class="card-text">${item.category}</h6>
                        <p class="card-text">${item.description.slice(0,80)}</p>
                        <a href="#" class="btn btn-primary">Mas info</a>
                    </div>
                </div>
            </div>`
        container.insertAdjacentHTML('beforeend', card);
    });
}

function getProducto() {
    let promesa = fetch("https://fakestoreapi.com/products", {
        method: "GET"
    });
    promesa.then((response) => {
        response.json().then( (prods) => {
            //crear cards
            mostrarProductos(prods);
            console.log("prods=>json()");
            console.log(prods); 
        }) //then json
        .catch( (err) => {
            console.log("error en el formato de la respuesta " + err.message);
        }); //catch json
    } //response 
    ) //then
    .catch( (error) => {
        console.log("error en la respuesta " + error.message);
    }); //catch promesa
}

getProducto();
   // .then((prod) => console.log(prod))
   // .catch((err) => console.log(err.message));


