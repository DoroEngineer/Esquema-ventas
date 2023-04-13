import {Producto} from "./js/componentes";
import {Orden} from "./js/componentes";

let producto1= new Producto('Carton de leche',4500);
console.log(producto1.toString());
let producto2= new Producto('Carton',5000);
console.log(producto2.toString());
let producto3= new Producto('Juguete',15000);
console.log(producto3.toString());
let producto4= new Producto('Sandwich',6000);
console.log(producto4.toString());
let producto5= new Producto('Sandwich2',6000);
console.log(producto5.toString());
let producto6= new Producto('Sandwich3',6000);
console.log(producto6.toString());

let orden1= new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
orden1.agregarProducto(producto6);



orden1.mostrarOrden();
orden1.calcularTotal(4500);

