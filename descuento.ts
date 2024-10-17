/**Descuento especial dia de la madre 15% off en tienda Ceramisc Family*/

import * as rs from "readline-sync";
const DESCUENTO:number= 1.5;
const MES_DESCUENTO:number=10;
let precio_unitario:number=rs.questionFloat("ingrese precio por unidad: ");
let cantidad:number=rs.questionInt("ingrese cantidad:  ");
let producto:string=rs.question("ingrese producto de cerámica que desea comprar:  ");
let mes:number=10;
if(MES_DESCUENTO==mes){
console.log("Felicidades usted cuenta con un descuento del 15% por el mes de la madre en el producto"+producto);

}else{
    console.log(" A usted no le corresponde descuento");
    
}
