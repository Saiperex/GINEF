const enviar = document.querySelector(".btn-enviar")
enviar.addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const celular = document.getElementById("celular").value;
    const mail = document.getElementById("mail").value;
    const localidad = document.getElementById("localidad").value;
    const selectContacto = document.getElementById("contacto").value
    const horario = document.getElementById("horario").value;

    // Codificar los valores utilizando encodeURIComponent
    const nombreCodificado = encodeURIComponent(nombre);
    const celularCodificado = encodeURIComponent(celular);
    const mailCodificado = encodeURIComponent(mail);
    const localidadCodificada = encodeURIComponent(localidad);
    const contactoCodificado = encodeURIComponent(selectContacto)
    const horarioCodificado = encodeURIComponent(horario);

    // Construir la URL de WhatsApp con los valores
    const urlWhatsApp = `https://wa.me/5493513843451?text=Nombre: ${nombreCodificado}%0A%0A
Celular: ${celularCodificado}%0A%0A
Correo Electrónico: ${mailCodificado}%0A%0A
Localidad: ${localidadCodificada}%0A%0A
Quiere ser contactado por ${contactoCodificado}%0A%0A
Horario de contacto: ${horarioCodificado}`;

    // Abrir la URL de WhatsApp en una nueva ventana o pestaña
    window.open(urlWhatsApp, '_blank');

    document.getElementById("nombre").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("contacto").value = "";
    document.getElementById("horario").value = "";
})