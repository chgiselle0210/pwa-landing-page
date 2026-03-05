const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn?.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  
  const to = "0210giselle.ch@gmail.com";

  const body =
`Nombre: ${name}
Correo: ${email}

Mensaje:
${message}`;

  const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
});