class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre=nombre;
        this._precio=precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio=precio;
    }

    toString(){
        return this._idProducto+' '+this._nombre+' '+this._precio;
    }
    


}//fin de clase producto

class Orden{
    static contadorOrdenes = 0;
    static getMAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos=[];
        this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.getMAX_PRODUCTOS()){
            this._productos.push(producto);//tenemos dos tipos de xintaxis, primer xintaxis
            //this._productos[this._contadorProductosAgregados++]=producto;//segunda xintaxis
        }
        else{
            console.log('No se pueden agregar mas productos')
        }
    }//fin del metodos agregar productos

    calcularTotal(){
        let totalVentas = 0;
        for(let producto of this._productos){
            totalVentas+=producto.precio;
        }//fin ciclo for
        return totalVentas;
    }//fin metodo calcular total


    mostrarOrden(){
        let productosOrden = ' ';
        for(let producto of this._productos){
            productosOrden+= '\n{ '+ producto.toString()+' }';
        }//fin del ciclo for
    console.log(`Orden:${this._idOrden}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }//fin metodo mostrarOrden
}// fin de la clase orden



let producto1  = new Producto('Pantalon',200);
let producto2 = new Producto('Camisa',150);
let producto3 = new Producto('Cinturon',50);
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.mostrarOrden();
orden2.mostrarOrden();