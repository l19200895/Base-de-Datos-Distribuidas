let ip=document.getElementById("ip");
let pais=document.getElementById("pais");
let continente=document.getElementById("continente");
let ciudad=document.getElementById("ciudad");
let zona_horaria=document.getElementById("zona_horaria");

const solicitudAPI = () => {
 // Hacer una petición para un usuario con ID especifico

  if (pais === "Mexico") {
  // Hacer la petición a la URL determinada
  axios.get("https://progwebform.000webhostapp.com/location-examen/index.php")
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
     }else if(pais === "Canada") {
      axios.get("https://bddcuenta2.000webhostapp.com/location_examen/index.php")
    .then(function (response) {
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
    }else if(pais === "korea") {
      axios.get("https://bddcuenta3.000webhostapp.com/location_examen/index.php")
     .then(function (response) {
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
  }

};
    window.onload = solicitudAPI;
