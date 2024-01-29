
let ip=document.getElementById("ip");
let pais=document.getElementById("pais");
let continente=document.getElementById("continente");
let ciudad=document.getElementById("ciudad");
let zona_horaria=document.getElementById("zona_horaria");

const solicitudAPI = () => {
  let apiUrl;

  // Verificar el valor de la variable "pais" y asignar la URL correspondiente
  if (pais.innerHTML === "Mexico") {
    apiUrl = "https://progwebform.000webhostapp.com/location-examen/index.php";
  } else if (pais.innerHTML === "Korea") {
    apiUrl = "https://bddcuenta2.000webhostapp.com/location_examen/index.php";
  } else if (pais.innerHTML === "Canada") {
    apiUrl = "https://bddcuenta3.000webhostapp.com/location_examen/index.php";
  } else {
    console.log("País no reconocido");
    return; // Salir de la función si el país no es reconocido
  }

  // Hacer la petición a la URL determinada
  axios.get(apiUrl)
    .then(function (response) {
      // Manejar respuesta exitosa
      console.log(response.data);
      ip.innerHTML = response.data.ip;
      pais.innerHTML = response.data.pais;
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
};

window.onload = solicitudAPI;
