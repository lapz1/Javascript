var precio = 200000;
var cantidad = 3;
var totalVenta = precio * cantidad;
var descuento = totalVenta > 877803 ? totalVenta * 0.2 : totalVenta * 0.1;
var valorFinalVenta = totalVenta - descuento;
console.log("Total antes de decuento: " + totalVenta);
console.log("Valor del descuento: " + descuento);
console.log("Total a pagar: " + valorFinalVenta);

if (false) {
  console.log("Hola Mundo");
}