let ip=document.getElementById("ip");
let pais=document.getElementById("pais");
let continente=document.getElementById("continente");
let ciudad=document.getElementById("ciudad");
let zona_horaria=document.getElementById("zona_horaria");

const solicitudAPI = () => {
 // Hacer una petición para un usuario con ID especifico
axios.get("https://progwebform.000webhostapp.com/location-examen/index.php")
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
  })
  .finally(function () {
    // siempre sera executado
  }); 
};

// Llama al evento load cada vez que se actualiza la pagina y llama a la funcion
// solicitudAPI que tiene la rutina de llamar a la API desde axios
window.onload = solicitudAPI;
