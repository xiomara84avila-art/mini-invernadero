const USUARIO = "ITLB";
const PASSWORD = "ELECTRONICA123";

// CONFIGURACIÓN GLOBAL
const BASE_IP = "192.168.1.10"; // ← SOLO cambias esto
const BASE_URL = "http://" + BASE_IP + "/";

// LOGIN
function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;

    if (user === USUARIO && pass === PASSWORD) {
        localStorage.setItem("sesion", "activa");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Datos incorrectos";
    }
}

// PROTEGER HOME
function protegerPagina() {
    if (localStorage.getItem("sesion") !== "activa") {
        window.location.href = "login.html";
    }
}

// CAMBIO DE SECCIONES (igual que antes)
function mostrarSeccion(id) {
    document.querySelectorAll(".seccion").forEach(sec => {
        sec.classList.add("oculto");
    });

    document.getElementById(id).classList.remove("oculto");
}

// CERRAR SESIÓN
function cerrarSesion() {
    localStorage.removeItem("sesion");
    window.location.href = "login.html";
}

function enviarComando(comando) {
    fetch(BASE_URL + comando)
    .then(response => response.text())
    .then(data => {
        mostrarRespuesta(data);
    })
    .catch(error => {
        mostrarRespuesta("Error: " + error);
    });
}