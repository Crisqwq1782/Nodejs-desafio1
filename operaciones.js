const fs = require('fs');

function registrarPet(nombre, edad, animal, color, enfermedad) {
    console.log('Procesando registro de la mascota...');
    const pet = {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad
    };
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    citas.push(pet);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log('Mascota registrada exitosamente.');
}

function leerPet() {
    console.log('Procesando lectura de las citas...');
    const pet = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log('Información de la mascota:');
    console.log(pet);
}

module.exports = {
    registrarPet,
    leerPet
};