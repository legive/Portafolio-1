let menuVisible=false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
        
    }
    else{
        document.getElementById("nav").classList="responsive"
        menuVisible=true;
    }
}
function seleccionar(){
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList="" ;
  menuVisible=false; 
}
//Funcion que aplica las animaciones de las habiliadades

function efectoHabilidades(){
    var skills=document.getElementById("skills");
    var distancia_skills=window.innerHeight-skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("mern");
        habilidades[3].classList.add("c");
        habilidades[4].classList.add("vb");
        habilidades[5].classList.add("asp");
        habilidades[6].classList.add("php");
        habilidades[7].classList.add("mysql");
        habilidades[8].classList.add("sql");
        habilidades[9].classList.add("git");

        habilidades[10].classList.add("puntualidad");
        habilidades[11].classList.add("trabajo");
        habilidades[12].classList.add("paciencia");
        habilidades[13].classList.add("responsabilidad");
        habilidades[14].classList.add("resolucion");
        habilidades[15].classList.add("adaptacion");
       
    }

}

//detecto el scrolling para aplicar la animacion de la barra habilidades
window.onscroll=function(){
    efectoHabilidades();
}


document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del DOM
    var playButton1 = document.getElementById('playButton1');
    var proyecto1 = document.getElementById('proyecto1');
    var videoContainer1 = document.getElementById('videoContainer1');
    var volverButton1 = document.getElementById('volverButton1');

    // URL del video de YouTube
    var videoUrl1 = 'https://youtu.be/K-Cd5XGEWXo'; // Reemplaza con tu propio enlace

    // Agregar evento de clic al botón de reproducción
    playButton1.addEventListener('click', function (event) {
      event.preventDefault(); // Evitar que el enlace redireccione

      // Crear el iframe del video de YouTube
      var iframe1 = document.createElement('iframe');
      iframe1.setAttribute('src', 'https://www.youtube.com/embed/' + getYouTubeVideoId(videoUrl1));
      iframe1.setAttribute('frameborder', '0');
      iframe1.setAttribute('allowfullscreen', '');

      // Ocultar la imagen y mostrar el contenedor de video y el botón de volver
      proyecto1.style.display = 'none';
      videoContainer1.style.display = 'block';
      volverButton1.style.display = 'block';

      // Agregar el iframe al contenedor de video
      videoContainer1.innerHTML = ''; // Limpiar el contenedor antes de agregar el nuevo iframe
      videoContainer1.appendChild(iframe1);
    });

    // Agregar evento de clic al botón de volver
    volverButton1.addEventListener('click', function () {
        // Mostrar la imagen y ocultar el contenedor de video y el botón de volver
        proyecto1.style.display = 'block';
        videoContainer1.style.display = 'none';
        volverButton1.style.display = 'none';
    
        // Detener el video al enviar un mensaje al iframe
        event.preventDefault(); // Evitar que el enlace redireccione

        // Crear el iframe del video de YouTube
        var iframe1 = document.createElement('iframe');
        iframe1.setAttribute('src', 'https://www.youtube.com/embed/' + getYouTubeVideoId(videoUrl1));
        iframe1.setAttribute('frameborder', '0');
        iframe1.setAttribute('allowfullscreen', '');
        videoContainer1.innerHTML = ''; // Limpiar el contenedor antes de agregar el nuevo iframe
        videoContainer1.appendChild(iframe1);
    });
    
    

    // Función para obtener el ID del video de YouTube desde la URL
    function getYouTubeVideoId(url) {
      var videoId = '';
      var match = url.match(/[?&]v=([^&#]+)/);
      if (match) {
        videoId = match[1];
      } else {
        // Si el formato de la URL no es reconocido, intenta obtener el ID de la URL completa
        var urlParts = url.split('/');
        videoId = urlParts[urlParts.length - 1];
      }
      return videoId;
    }
  });


