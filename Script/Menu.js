function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function comprar() {
    alert("Compra simulada com sucesso!");
}

// Navbar esconde ao descer, aparece ao subir
let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.style.top = "-200px";
    } else {
        navbar.style.top = "0";
    }

    lastScroll = currentScroll;
});

// Carrossel
let index = 0;
const images = document.querySelectorAll(".carousel img");

setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}, 2000);

// Login
function abrirLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function fecharLogin() {
    document.getElementById("loginModal").style.display = "none";
}

const emailsValidos = [
    "murilo@email.com",
    "arthur@email.com",
    "teste@vibeway.com"
];

function validarLogin() {
    const email = document.querySelector('input[type="email"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    if (!emailsValidos.includes(email)) {
        alert("Email não cadastrado!");
        return;
    }

    if (senha.length < 4) {
        alert("Senha inválida!");
        return;
    }

    alert("Login realizado com sucesso!");
}

function toggleSenha() {
    const senha = document.getElementById("senha");
    senha.type = senha.type === "password" ? "text" : "password";
}

// Menu hamburguer
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("aberto");
    navMenu.classList.toggle("aberto");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("aberto");
        navMenu.classList.remove("aberto");
    });
});
