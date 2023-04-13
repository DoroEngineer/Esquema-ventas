
export class Producto{
    static contadorProducto= 0;
    constructor(nombre,precio){
        this._idProducto= ++Producto.contadorProducto;
        this._nombre= nombre;
        this._precio= precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre= nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio= precio;
    }
    toString(){
        return `\nProducto:\n        [idProducto:${this._idProducto},
        nombre:${this._nombre},
        precio:${this._precio}]`;
    }
}

export class Orden{
    static contadorOrden= 0;
    static MAX_PRODUCTOS= 5;
    constructor(){
        this._idOrden   = ++Orden.contadorOrden;
        this._productos = [Orden.MAX_PRODUCTOS];
        this._contadorProductosAgregados = 0;
    }
    agregarProducto(producto){
        this._productos.push(producto);
        do{
            ++this._contadorProductosAgregados
        } while (this._contadorProductosAgregados<=Orden.MAX_PRODUCTOS)
    }
    calcularTotal(precio){
        let total =+ precio;
        return console.log(total);
    }
    mostrarOrden(){
        console.log(`Orden:[idOrden:${this._idOrden},
        productos:\n${this._productos},
        contadorProductosAgregados:${this._contadorProductosAgregados}]`);
    }
}

