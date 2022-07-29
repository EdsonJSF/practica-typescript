/* DESESTRUCCTURACIÓN DE OBJETOS */
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}
interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeren",
    anio: 2015,
  },
};

// Desestructura usando el nombre de la propiedad del objeto
const { volumen, segundo, cancion, detalles } = reproductor;
// Se puede cambiar el nombre de la desestructuración
const { autor: nombreAutor } = detalles;

console.log("El volumen actual de: ", volumen);
console.log("El segundo actual de: ", segundo);
console.log("El canción actual de: ", cancion);
console.log("El autor es: ", nombreAutor);

/* DESESTRUCTURACIÓN DE ARREGLOS */
const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
// Desestructura usando la posicion del array
const [p1] = dbz;
// Usamos comas para saltar las posiciones
const [, , p3] = dbz;

console.log("Personaje 1", p1);
console.log("Personaje 2", dbz[1]);
console.log("Personaje 3", p3);
