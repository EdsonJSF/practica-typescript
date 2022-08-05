// Expande las clases agregandole nuevas funcionalidades
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new peoperty";
    hello = "override";
  };
}
@classDecorator
class MiSuperClase {
  public miPropiedad: string = "ABC123";

  imprimir() {
    console.log("Hola mundo");
  }
}

console.log(MiSuperClase);
