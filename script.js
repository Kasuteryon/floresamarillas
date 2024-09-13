const mensaje = document.getElementById("mensaje");


onload = () => {

   

    // Mostrar el texto centrado y en amarillo
    mensaje.style.display = "block";

};

clicked = () => {
    const audio = document.getElementById("audio");
    const boton = document.getElementById("btn");

        // Reproducir el audio automáticamente
        audio.play().catch(error => {
            console.log("La reproducción automática fue bloqueada: " + error);
        });
        
        mensaje.style.display = "none"; 
        document.body.classList.remove("container"); 
        boton.style.display = "none"; 
}
