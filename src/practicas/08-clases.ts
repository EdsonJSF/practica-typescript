class HeroPrueba {
  /* private public static definen el alcance de la clase */

  // PRIVATE es visible dentro de esta clase
  private alterEgo: string;
  // PUBLIC visible desde afuera de la clase (Default)
  public edad: number;
  // STATIC para acceder al valor sin una instancia
  static nombreReal: string;

  // Las clases permiten metodos
  imprimirNombre() {
    return "se inprimio el nombre";
  }
}

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Hero extends PersonaNormal {
  // Se llama cuando se crea una instancia de la clase
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, "New York, USA");
  }
}

const ironman = new Hero("Ironman", 45, "Tony");

console.log(ironman);
