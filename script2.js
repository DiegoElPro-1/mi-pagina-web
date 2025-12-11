document.addEventListener("DOMContentLoaded", () => {

  /* ================= HEADER ================= */
  const header = document.getElementById("header");
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  // menú responsive
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // cambiar color header en scroll
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 80);
  });



  /* ================= SLIDER ================= */
  let index = 0;
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  // automático
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);



  /* ================= BOTÓN SUBIR ================= */
  const topBtn = document.getElementById("topBtn");

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top:0, behavior:"smooth" });
  });



  /* ================= MODO OSCURO ================= */
  const darkBtn = document.getElementById("darkModeBtn");

  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

});