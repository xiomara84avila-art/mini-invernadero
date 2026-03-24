const USUARIO = "ITLB";
const PASSWORD = "ELECTRONICA123";

// Verificar sesión al cargar
window.onload = function () {
    if (localStorage.getItem("sesion") === "activa") {
        mostrarSistema();
    }
};

// LOGIN
function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;

    if (user === USUARIO && pass === PASSWORD) {
        localStorage.setItem("sesion", "activa");
        mostrarSistema();
    } else {
        document.getElementById("error").innerText = "Datos incorrectos";
    }
}

// Mostrar sistema después de login
function mostrarSistema() {
    document.getElementById("login").style.display = "none";
    document.querySelectorAll(".seccion").forEach(sec => {
        sec.classList.add("oculto");
    });
    document.getElementById("inicio").classList.remove("oculto");
}

// Cambiar secciones
function mostrarSeccion(id) {
    if (!verificarSesion()) return;

    document.querySelectorAll(".seccion").forEach(sec => {
        sec.classList.add("oculto");
    });

    document.getElementById(id).classList.remove("oculto");
}

// Verificar sesión
function verificarSesion() {
    if (localStorage.getItem("sesion") !== "activa") {
        alert("Debes iniciar sesión");
        return false;
    }
    return true;
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("sesion");
    location.reload();
}

// Simulación de envío de comandos
function enviarComando(comando) {
    if (!verificarSesion()) return;

    alert("Comando enviado: " + comando);

    // Aquí puedes conectar con Arduino (ESP32)
    // Ejemplo:
    // fetch("http://IP_DEL_ESP32/" + comando);
}
