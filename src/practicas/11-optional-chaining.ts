/* Optional Chaining ? */

interface Pasajero {
  nombre: string;
  // En este caso significa, parametro opcional
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: "Edson",
};

const pasajero2: Pasajero = {
  nombre: "Maria",
  hijos: ["Isis", "Ramses"],
};

const imprimirPasajero = (pasajero: Pasajero) => {
  // En este caso significa, intenta eveluar
  const cuantosHijos = pasajero.hijos?.length || 0;
  console.log(cuantosHijos);
};

imprimirPasajero(pasajero1);
