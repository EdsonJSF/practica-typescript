import { isObjectBindingPattern } from "typescript";

/* Arrays */
let stringArray: string[] = ["nombre1", "nombre2"];
let multipleArray: (string | number)[] = ["nombre1", 1];

/* Interface */
interface Interfaz {
  nombre: string;
  numero: number;
  booleano: boolean;
  opcional?: string; // Dato opcional
}

const objeto: Interfaz = {
  nombre: "nombre",
  numero: 1,
  booleano: true,
};

objeto.opcional = "opcion";
