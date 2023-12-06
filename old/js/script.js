const marcas = Array(
"ABARTH",
"ALFA-ROMEO",
"ASTON-MARTIN",
"AUDI",
"BENTLEY",
"BMW",
"BYD",
"CHEVROLET",
"CITROEN",
"DACIA",
"DFSK",
"DS",
"FERRARI",
"FIAT",
"FORD",
"HONDA",
"HYUNDAI",
"INFINITI",
"ISUZU",
"JAGUAR",
"JEEP",
"KIA",
"LADA",
"LAMBORGHINI",
"LANCIA",
"LAND-ROVER",
"LEXUS",
"MAHINDRA",
"MASERATI",
"MAZDA",
"MERCEDES",
"MINI",
"MITSUBISHI",
"MORGAN",
"NISSAN",
"OPEL",
"PEUGEOT",
"PORSCHE",
"RENAULT",
"ROLLS-ROYCE",
"SEAT",
"SKODA",
"SMART",
"SSANGYONG",
"SUBARU",
"SUZUKI",
"TATA",
"TESLA",
"TOYOTA",
"VOLKSWAGEN",
"VOLVO");

let dropdownMarcas = document.getElementById("select-marcas")

marcas.forEach(element => {
    let itemMarca = document.createElement("option");
    itemMarca.innerText =element;
    dropdownMarcas.appendChild(itemMarca);
});


// FORMULAS AUXILIARES

const checkCuitCuil =  (cuitcuil) => {

    const regex = /^(\d){11}$/

    if(!regex.test(cuitcuil)){
        return false;
    }


}




///


let formularioCliente = document.getElementById("formulario-cliente")

formularioCliente.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Usted ha sido tukiseado")
    let cuitCuil = document.getElementById("cuitcuil")
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let email = document.getElementById("email")
    let telefono = document.getElementById("telefono")



})

let formularioVehiculo = document.getElementById("formulario-vehiculo")

formularioVehiculo.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Usted ha sido tukiseado nuevamente")
})

