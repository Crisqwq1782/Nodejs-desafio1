const { registrarPet, leerPet } = require('./operaciones');

const [,, operacion, nombre, edad, animal, color, enfermedad] = process.argv;


if(operacion === "registrar"){
registrarPet(nombre, edad, animal, color, enfermedad)
}
if(operacion === "leer"){
leerPet()
}