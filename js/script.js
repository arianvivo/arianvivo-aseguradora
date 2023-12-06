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
        console.log(" == Verificacion CUIT/CUIL == ")
        
        // Comienza con 20, 27 o 30 y tiene 11 digitos
        
        const regex = /^(20|27|30)(\d){9}$/
        
        const operadores = [2,3,4,5,6,7,2,3,4,5]
        if(!regex.test(cuitcuil)){
            console.log("- Longitud incorrecta o tipo invalido")
            return false;
        } else {
            let verificador = cuitcuil % 10;
            console.log("Verificador: "+verificador)
            let numeros = parseInt(cuitcuil/10)
            let sum = 0
            operadores.forEach( o => {
                let num = numeros % 10;
                console.log("Multiplico "+num+" por "+o)
                sum+= num * o
                numeros = parseInt(numeros/10);    
            });
            console.log("sum: "+sum)
            rest = parseInt(sum%11)
            check = 11 -rest
            console.log("Check: "+check)
            
            if (check == verificador) {
                console.log("- Valido")
                return true
            } else {
                console.log("- Invalido")
                return false
            }
            
        }
        
    }
    
    const checkNombre = (nombre) => {
        return /^([a-zA-Z]){2,}(\s?)([a-zA-Z]){2,}$/.test(nombre)
    }
    
    const checkEmail = (mail) => {
        return /^[a-zA-Z0-9\.-_]+@[a-zA-Z0-9]+\.(\w){2,}/.test(mail)
    }
    
    const checkTelefono = (telefono) => {
        // Formatos:
        // 291123456789
        // (291)12345678
        // (291)123-45678
        return /(\((\d){2,5}\))?((\d){3,4}\-)?(\d){4,11}/.test(telefono)
    }
    
    const checkPatente = (patente) => {
        return (/^(\w){2}(\d){3}(\w){2}$/.test(patente) || /^(\w){3}(\d){3}$/.test(patente))
    }
    
    const existePatente = (pat) => {
        
        console.log("Comiuenza busqueda patente "+ pat)
        
        let encontrado = false
        
        vehiculos.map( (v) => {
            console.log(`Comparando ${pat} con ${v.patente}`);
            if (v.patente == pat) {
                console.log("encontrado!");
                encontrado = true
            } 
            console.log("No se encontro");
        })
        
        console.log("encontrado vale "+encontrado )
        return encontrado
    }
    
    const buscarCliente = (cuitCuil) => {
        console.log("Comiuenza busqueda CUIL/CUIT "+ cuitCuil)
        
        let encontrado = false
        
        clientes.map( (c) => {
            console.log(`Comparando ${cuitCuil} con ${c.cuitcuil}`);
            if (c.cuitcuil == cuitCuil) {
                console.log("encontrado!");
                encontrado = c
            } 
            console.log("No se encontro");
        })
        return encontrado
    }
    
    const construirTablaClientes = () => {
        let tabla = document.getElementById("tabla-clientes-body");
        
        tabla.innerHTML = ""
        
        clientes.forEach(c => {
            
            tabla.innerHTML+=`<td>${c.cuitcuil}</th>
            <td>${c.nombre}</td>
            <td>${c.apellido}</td>
            <td>${c.email}</td>
            <td>${c.telefono}</td>
            </tr>` 
        });
    }

        
    const construirTablaVehiculos = () => {
        let tabla = document.getElementById("tabla-vehiculos-body");
        
        tabla.innerHTML = ""
        
        vehiculos.forEach(v => {
            let g = v.gnc ? "Si" : " - "
            tabla.innerHTML+=`<td>${v.cuitcuil}</th>
            <td>${v.patente}</td>
            <td>${v.anio}</td>
            <td>${v.marca}</td>
            <td>${v.modelo}</td>
            <td>${v.tipoVehiculo}</td>
            <td>${g}</td>
            <td>${v.observaciones}</td>
            </tr>` 
        });
    }

    const limpiarCampoCliente = () => {
        document.getElementById("cuitcuil").value = ""
        document.getElementById("nombre").value = ""
        document.getElementById("apellido").value = ""
        document.getElementById("email").value = ""
        document.getElementById("telefono").value = ""
    }

    const limpiarCampoVehiculo = () => {
        document.getElementById("patente").value = ""
        document.getElementById("anio").value = ""
        // document.getElementById("select-marcas").value = ""
        document.getElementById("modelo").value = ""
        document.getElementById("gnc").checked = false
        document.getElementById("observaciones").value = ""
        
    }
    
    ///////////////////////////
    
    let botonBuscar = document.getElementById("boton-buscar")
    
    botonBuscar.addEventListener("click", () => {
        let cuitCuil = document.getElementById("cuitcuil")
        if (!checkCuitCuil(parseInt(cuitCuil.value))) {
            alert("CUIL Invalido")
            cuitCuil.value = ""
        } else { 
            
            let busqueda = buscarCliente(parseInt(cuitCuil.value))
            
            if (!busqueda) {
                alert("No se encontro!")
            } else {
                document.getElementById("nombre").value = busqueda.nombre
                document.getElementById("apellido").value = busqueda.apellido
                document.getElementById("email").value = busqueda.email
                document.getElementById("telefono").value = busqueda.telefono
                
            }
            
        }
        
    })
    
    let clientes = [];
    
    let formularioCliente = document.getElementById("formulario-cliente")
    
    formularioCliente.addEventListener("submit", function(e) {
        e.preventDefault();
        let cuitCuil = document.getElementById("cuitcuil")
        let nombre = document.getElementById("nombre")
        let apellido = document.getElementById("apellido")
        let email = document.getElementById("email")
        let telefono = document.getElementById("telefono")
        
        if (!checkCuitCuil(parseInt(cuitCuil.value))) {
            alert("CUIL inválido!")
            cuitCuil.value = ""
        } else if (!checkNombre(nombre.value)) {
            alert("Nombre inválido!")
            nombre.value=""
        } else if (!checkNombre(apellido.value)) {
            alert("apellido inválido!")
            apellido.value = ""
        } else if (!checkEmail(email.value)) {
            alert("Email inválido!")
            email.value=""
        } else if (!checkTelefono(telefono.value)){
            alert("Telefono inválido!")
            telefono.value=""
        } else  {
            let nuevaCarga = {
                "cuitcuil": cuitCuil.value,
                "nombre":nombre.value,
                "apellido": apellido.value,
                "email" : email.value,
                "telefono": telefono.value 
            }

            let busqueda = buscarCliente(parseInt(cuitCuil.value))

            if (!busqueda) {
                console.log("Comenzando carga")
                clientes.push(nuevaCarga);
            } else {
                if (confirm("Desea reemplazar los datos cargados?")) {
                    let indice = clientes.findIndex(c => c.cuitcuil == nuevaCarga.cuitcuil);
                    clientes[indice] = nuevaCarga;
                }
            }
            alert("Finalizado!")
            construirTablaClientes()
        }
        
    })
    
    let formularioVehiculo = document.getElementById("formulario-vehiculo")
    
    let vehiculos = []
    
    let anioActual = parseInt(new Date().getFullYear())
    console.log("Actual:" +anioActual)
    
    formularioVehiculo.addEventListener("submit", function(e) {
        e.preventDefault();
        let cuitCuil = document.getElementById("cuitcuil")
        let patente = document.getElementById("patente")
        let anio = document.getElementById("anio")
        let marca = document.getElementById("select-marcas").value
        let modelo = document.getElementById("modelo")
        let tipoVehiculo = document.querySelector('input[name="tipo-vehiculo"]:checked').value;
        let gnc = document.getElementById("gnc").checked
        let observaciones = document.getElementById("observaciones").value
        
        if (!buscarCliente(parseInt(cuitCuil.value))) {
            alert("Cliente inexistente! Por favor cargue primero")
        }
        if (!checkPatente(patente.value)) {
            alert("Patente inválida!")
            patente.value =""
        } else if (existePatente(patente.value)) {
            alert("Patente ya cargada!")
            patente.value =""
        } else if (parseInt(anio.value) > anioActual || isNaN(anio.value)) {
            alert("Año invalido")
            anio.value = ""
        } else if (!marcas.includes(marca)) {
            alert("Marca inválida!")
        } else if (modelo.value == "") {
            alert("No incluyó modelo!")
        } else if (tipoVehiculo == null) {
            alert("No selecciono tipo")
        } else {
            console.log("Comenzando carga")
            let nuevoVehiculo = {
                "cuitcuil": cuitCuil.value,
                "patente": patente.value,
                "anio":anio.value,
                "marca": marca,
                "modelo": modelo.value,
                "tipoVehiculo" : tipoVehiculo,
                "gnc": gnc,
                "observaciones": observaciones
            }
            vehiculos.push(nuevoVehiculo);
            alert("Finalizado!")
            console.log(nuevoVehiculo)
            construirTablaVehiculos()
            limpiarCampoVehiculo()
        }
        
    })
    
    let resetear = document.getElementById("resetear-campos")

    resetear.addEventListener("click", () => {
        limpiarCampoVehiculo()
        limpiarCampoCliente()
    })
