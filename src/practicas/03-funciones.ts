/* FUNCION BÁSICA */
/**
 *
 * @param numero1 primer número
 * @param numero2 segundo número
 * @returns Retorna la suma de los numeros
 */
const sumar = (numero1: number, numero2: number): number => {
  console.log(numero1 + numero2);
  return numero1 + numero2;
};
const resultado = sumar(1, 2);

/* FUNCION CON ARGUMENTOS OPCIONALES Y PREDEFINIDOS */
/**
 *
 * @param numero1 número obligatorio
 * @param numero2 número opcional
 * @param numero3 número predefinido
 * @returns
 */
const multiplicar = (
  numero1: number,
  numero2?: number,
  numero3: number = 2
): number => {
  console.log(numero1 * numero3);
  return numero1 * numero3;
};
const resultado2 = multiplicar(5);

/* FUNCIONES CON OBJETOS */
interface Personaje {
  nombre: string;
  hp: number;
  mostrarHP: () => void;
}
const curar = (personaje: Personaje, curar: number): void => {
  personaje.hp += curar;
  personaje.mostrarHP();
};
const nuevoPersonaje: Personaje = {
  nombre: "Edson",
  hp: 50,
  mostrarHP() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

curar(nuevoPersonaje, 20);
