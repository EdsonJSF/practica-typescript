interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: "telefono",
  precio: 10,
};
const tableta: Producto = {
  desc: "tableta",
  precio: 100,
};

const calculaISV = (producto: Producto[]): [number, number] => {
  let total = 0;
  producto.forEach(({ precio }) => {
    total += precio;
  });
  return [total, total * 0.15];
};

const articulos = [telefono, tableta];
const [total, isv] = calculaISV(articulos);
console.log("Total:", total);
console.log("ISV:", isv);
