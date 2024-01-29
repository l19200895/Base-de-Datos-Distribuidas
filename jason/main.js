let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let ciudad = document.getElementById("ciudad");
let zona_horaria = document.getElementById("zona_horaria");

const solicitudAPI = () => {
  // Hacer una petición para un usuario con ID especifico
  axios.get("https://bddcentral.000webhostapp.com/location.examen/index.php")
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response.data);
      ip.innerHTML = response.data.ip;
      pais.innerHTML = response.data.pais;
      continente.innerHTML = response.data.continente;
      ciudad.innerHTML = response.data.ciudad;
      zona_horaria.innerHTML = response.data.zona_horaria;

      // Verifica si el continente es África
      if (response.data.continente === 'Asia') {
        // Hacer algo con la primera URL
        axios.get("https://progwebform.000webhostapp.com/location-examen/index.php")
          .then(primeraResponse => {
            ip.innerHTML = primeraResponse.data.ip;
            pais.innerHTML = primeraResponse.data.pais;
            ciudad.innerHTML = primeraResponse.data.ciudad;
            zona_horaria.innerHTML = primeraResponse.data.zona_horaria;
            console.log(primeraResponse.data);
          })
          .catch(error => {
            console.error('Error en la primera URL:', error);
          });
      } else if (response.data.continente === 'North America'){
        // Hacer algo con la segunda URL
        axios.get("https://bddcuenta2.000webhostapp.com/location_examen/index.php")
          .then(segundaResponse => {
            // Hacer algo con la respuesta de la segunda URL
            console.log(segundaResponse.data);
            ip.innerHTML = segundaResponse.data.ip;
            pais.innerHTML = segundaResponse.data.pais;
            ciudad.innerHTML = segundaResponse.data.ciudad;
            zona_horaria.innerHTML = segundaResponse.data.zona_horaria;
            console.log(segundaResponse.data);
          })
          .catch(error => {
            console.error('Error en la segunda URL:', error);
          });
      } else if (response.data.continente === 'Oceania'){
        // Hacer algo con la segunda URL
        axios.get("https://bddcuenta3.000webhostapp.com/location_examen/index.php")
          .then(terceraResponse => {
            // Hacer algo con la respuesta de la segunda URL
            console.log(terceraResponse.data);
            ip.innerHTML = terceraResponse.data.ip;
            pais.innerHTML = terceraResponse.data.pais;
            ciudad.innerHTML = terceraResponse.data.ciudad;
            zona_horaria.innerHTML = terceraResponse.data.zona_horaria;
            console.log(terceraResponse.data);
          })
          .catch(error => {
            console.error('Error en la segunda URL:', error);
          });
     } else {
          // Mensaje si la IP no pertenece a North America, Oceania o Africa
          console.log("Tu IP no pertenece a North America, Oceania o Africa");
      }
    } )
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre será ejecutado
    });
};

// Llama al evento load cada vez que se actualiza la página y llama a la función solicitudAPI que tiene la rutina de 
// llamar a la API desde axios
window.onload = solicitudAPI;
