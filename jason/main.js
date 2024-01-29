let ip = document.getElementById("ip");
let paisInput = document.getElementById("pais");
let continente = document.getElementById("continente");
let ciudad = document.getElementById("ciudad");
let zona_horaria = document.getElementById("zona_horaria");

const solicitudAPI = () => {
  // Hacer una petición según el país seleccionado
  const pais = paisInput.value.toLowerCase(); // Convertir a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas

  if (pais === "mexico") {
    axios.get("https://progwebform.000webhostapp.com/location-examen/index.php")
      .then(function (response) {
        // Manejar respuesta exitosa
        console.log(response.data);
        ip.innerHTML = response.data.ip;
        paisInput.innerHTML = response.data.pais; // Modificar la variable de entrada
        continente.innerHTML = response.data.continente;
        ciudad.innerHTML = response.data.ciudad;
        zona_horaria.innerHTML = response.data.zona_horaria;
      })
      .catch(function (error) {
        // Manejar error
        console.log(error);
      });
  } else if (pais === "canada") {
    axios.get("https://bddcuenta2.000webhostapp.com/location_examen/index.php")
      .then(function (response) {
        console.log(response.data);
        ip.innerHTML = response.data.ip;
        paisInput.innerHTML = response.data.pais; // Modificar la variable de entrada
        continente.innerHTML = response.data.continente;
        ciudad.innerHTML = response.data.ciudad;
        zona_horaria.innerHTML = response.data.zona_horaria;
      })
      .catch(function (error) {
        // Manejar error
        console.log(error);
      });
  } else if (pais === "south korea") {
    axios.get("https://bddcuenta3.000webhostapp.com/location_examen/index.php")
      .then(function (response) {
        console.log(response.data);
        ip.innerHTML = response.data.ip;
        paisInput.innerHTML = response.data.pais; // Modificar la variable de entrada
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
  }
};

window.onload = solicitudAPI;
