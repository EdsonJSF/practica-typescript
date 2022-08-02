import { Producto, calculaISV } from "./06-desestructuracion-argumentos";

const carritoCompras: Producto[] = [
  {
    desc: "producto1",
    precio: 100,
  },
  {
    desc: "producto2",
    precio: 200,
  },
];

const [total, isv] = calculaISV(carritoCompras);
// El conosle log se repite 2 veces ya que al exportar codigo ejecuta todo el documento
// esto no pasa con las interfaces
console.log("Total", total);
console.log("ISV", isv);
