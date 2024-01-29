let ip = document.getElementById("ip");
let pais = document.getElementById("pais").value;
let continente = document.getElementById("continente");
let ciudad = document.getElementById("ciudad");
let zona_horaria = document.getElementById("zona_horaria");

const solicitudAPI = () => {

  // Hacer la petición a la URL determinada según el valor de "pais"
  if (pais === "Mexico") {
    // No hacer la petición a la base de datos, solo mostrar los resultados
    console.log("Mostrar resultados para México");
    mostrarResultados();

  } else if (pais === "Korea") {
    // Hacer la petición a la URL determinada
    axios.get("https://progwebform.000webhostapp.com/location-examen/index.php")
      .then(function (response) {
        // Manejar respuesta exitosa
        console.log(response.data);
        guardarResultados(response.data);
        mostrarResultados();
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
    axios.get("https://bddcuenta2.000webhostapp.com/location_examen/index.php")
      .then(function (response) {
        // Manejar respuesta exitosa
        console.log(response.data);
        guardarResultados(response.data);
        mostrarResultados();
      })
      .catch(function (error) {
        // Manejar error
        console.log(error);
      })
      .finally(function () {
        // Siempre será ejecutado
      });

  } else if (pais === "Ucrania") {
    // Hacer la petición a la URL determinada
    axios.get("https://bddcuenta3.000webhostapp.com/location_examen/index.php")
      .then(function (response) {
        // Manejar respuesta exitosa
        console.log(response.data);
        guardarResultados(response.data);
        mostrarResultados();
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
    mostrarResultados();
  }
};

const guardarResultados = (data) => {
  // Guardar los resultados en la base de datos o tomar otras acciones necesarias
  console.log("Guardar resultados en la base de datos:", data);
  // Aquí puedes agregar la lógica para guardar los resultados en la base de datos
};

const mostrarResultados = () => {
  // Mostrar los resultados en la interfaz de usuario
  ip.innerHTML = "Resultado IP";
  continente.innerHTML = "Resultado Continente";
  ciudad.innerHTML = "Resultado Ciudad";
  zona_horaria.innerHTML = "Resultado Zona Horaria";
};

window.onload = solicitudAPI;

