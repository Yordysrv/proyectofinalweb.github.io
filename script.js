const cambio= document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarcarrito = Document.getElementById("vaciar-carrito")

cargareventlisteners();

function cargareventlisteners() {
     
    elementos1.eddeventlistener("click",comprarelemento);
    carrito.eddeventlistener("click",eliminerelemento);
    vaciarcarritobtn.eddeventlistener("click",vaciarcarrito);


}
function comprarelemento(e){
    e.preventdefault();
    if(e.target.classlist.contains("agregar-carrito")){
        const elemento = e.target.parentelement.comprarelemento;
        leerdatoselemento(elemento);
    }

}
function leerdatoselemento(elemento){
    const infoelemento = {
        Imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h1").textcontent,
        precio: elemento.querySelector(".precio").textcontent,
        id:     elemento.querySelector("a").getattribute("datta-id")
    }
    insertarcarrito(infoelemento);
}
function insertarcarrito(elemento){
    const row = document.createelement("tr")
    row.innerhtml=`
    <td>
        <img src="s{elemento.imagen}" width=100 />
    </td>
    <td>
        s{elemento.titulo}
    </td>
    <td>
       s{elemento.precio}
    </td>
    <td>
       <a herf="#" class="borrar" data-id="s{elemento.id}">x </a>
    </td>
    `;

    lista.appendChild(row);

}
function eliminarelemento(e){
    e.preventdefault();
    let elemento,
        elementoid;
    if(e.target.classlist.contains("borrar")) {
        e.target.parentelement.parentelement.remove();
        elemento = e.target.parentelement;
        elementoid = elemento.querySelector("a").getattribute("data-id");
    }   
    
}
function vaciarcarrito(){
    while(lista.firstChild){
        lista.removerchild(lista.firstChild);

    }
    return false;
}


