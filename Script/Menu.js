function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function comprar() {
    alert("Compra simulada com sucesso!");
}

let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // Descendo → esconde
        navbar.style.top = "-80px";
    } else {
        // Subindo → mostra
        navbar.style.top = "0";
    }

    lastScroll = currentScroll;
});

let index = 0;
const images = document.querySelectorAll(".carousel img");

setInterval(() => {
    images[index].classList.remove("active");

    index = (index + 1) % images.length;

    images[index].classList.add("active");
}, 2000); // troca a cada 2s

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

    if (senha.type === "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}