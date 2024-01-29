let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let ciudad = document.getElementById("ciudad");
let zona_horaria = document.getElementById("zona_horaria");

const hacerSolicitud = (url) => {
  axios.get(url)
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response.data);
      ip.innerHTML = response.data.ip;
      pais.innerHTML = response.data.pais;
      continente.innerHTML = response.data.continente;
      ciudad.innerHTML = response.data.ciudad;
      zona_horaria.innerHTML = response.data.zona_horaria;
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    });
};

const solicitudAPI = () => {
  // Obtener el valor del país
  const paisValue = pais.value;

  // Determinar la URL de la API según el país
  let apiUrl;
  switch (paisValue) {
    case "Mexico":
      apiUrl = "https://progwebform.000webhostapp.com/location-examen/index.php";
      break;
    case "Canada":
      apiUrl = "https://bddcuenta2.000webhostapp.com/location_examen/index.php";
      break;
    case "South Korea":
      apiUrl = "https://bddcuenta3.000webhostapp.com/location_examen/index.php";
      break;
    // Agregar más casos según sea necesario

    default:
      // Manejar el caso en el que el país no coincida con ninguno de los casos anteriores
      console.log("País no reconocido");
      return;
  }

  // Hacer la solicitud con la URL determinada
  hacerSolicitud(apiUrl);
};

window.onload = solicitudAPI;
