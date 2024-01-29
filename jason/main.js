let ip = document.getElementById("ip");
let pais = document.getElementById("pais").value; // Cambiado de innerHTML a value
let continente = document.getElementById("continente");
let ciudad = document.getElementById("ciudad");
let zona_horaria = document.getElementById("zona_horaria");

const solicitudAPI = () => {

  // Verificar el valor de la variable "pais" y asignar la URL correspondiente
  if (pais === "Mexico") {
    // Hacer la petición a la URL determinada
    axios.get("https://progwebform.000webhostapp.com/location-examen/index.php")
      .then(function (response) {
        // Manejar respuesta exitosa
        console.log(response.data);
        ip.innerHTML = response.data.ip;
        continente.innerHTML = response.data.continente;
        ciudad.innerHTML = response.data.ciudad;
        zona_horaria.innerHTML = response.data.zona_horaria;
      })
      .catch(function (error) {
        // Manejar error
        console.log(error);
      })
      .finally(function () {
        // Siempre será ejecutado
      });

  } else if (pais === "Korea") {
    // Hacer la petición a la URL determinada
    axios.get("https://bddcuenta2.000webhostapp.com/location_examen/index.php")
      .then(function (response) {
        // Manejar respuesta exitosa
        console.log(response.data);
        ip.innerHTML = response.data.ip;
        continente.innerHTML = response.data.continente;
        ciudad.innerHTML = response.data.ciudad;
        zona_horaria.innerHTML = response.data.zona_horaria;
      })
      .catch(function (error) {
        // Manejar error
        console.log(error);
      })
      .finally(function () {
        // Siempre será ejecutado
      });

  } else if (pais === "Canada") {
    // Hacer la petición a la URL determinada
    axios.get("https://bddcuenta3.000webhostapp.com/location_examen/index.php")
      .then(function (response) {
        // Manejar respuesta exitosa
        console.log(response.data);
        ip.innerHTML = response.data.ip;
        continente.innerHTML = response.data.continente;
        ciudad.innerHTML = response.data.ciudad;
        zona_horaria.innerHTML = response.data.zona_horaria;
      })
      .catch(function (error) {
        // Manejar error
        console.log(error);
      })
      .finally(function () {
        // Siempre será ejecutado
      });

  } else {
    console.log("País no reconocido");
    return; // Salir de la función si el país no es reconocido
  }
};

window.onload = solicitudAPI;
