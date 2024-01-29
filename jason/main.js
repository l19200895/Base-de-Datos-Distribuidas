let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let ciudad = document.getElementById("ciudad");
let zona_horaria = document.getElementById("zona_horaria");

const solicitudAPI = () => {
  // Hacer una petición para un usuario con ID especifico
  axios.get("https://https://bddcentral.000webhostapp.com/location.examen/index.php")
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response.data);
      ip.innerHTML = response.data.ip;
      pais.innerHTML = response.data.pais;
      continente.innerHTML = response.data.continente;
      ciudad.innerHTML = response.data.ciudad;
      zona_horaria.innerHTML = response.data.zona_horaria;

      // Verifica si el continente es África
      if (response.data.continente === 'Africa') {
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
            ip.innerHTML = response.data.ip;
            pais.innerHTML = response.data.pais;
            ciudad.innerHTML = response.data.ciudad;
            zona_horaria.innerHTML = response.data.zona_horaria;
            console.log(primeraResponse.data);
          })
          .catch(error => {
            console.error('Error en la segunda URL:', error);
          });
      } else if (response.data.continente === 'North America'){
        // Hacer algo con la segunda URL
        axios.get("https://bddcuenta2.000webhostapp.com/location_examen/index.php")
          .then(terceraResponse => {
            // Hacer algo con la respuesta de la segunda URL
            console.log(terceraResponse.data);
            ip.innerHTML = response.data.ip;
            pais.innerHTML = response.data.pais;
            ciudad.innerHTML = response.data.ciudad;
            zona_horaria.innerHTML = response.data.zona_horaria;
            console.log(terceraResponse.data);
          })
          .catch(error => {
            console.error('Error en la segunda URL:', error);
          });
    })
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
