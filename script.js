const showBtn = document.getElementById("showBtn");
const formContainer = document.getElementById("form-container");
const sky = document.getElementById("sky");
const smokeText = document.getElementById("smokeText");

showBtn.addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") {
    alert("Por favor, escribe un nombre 🎈");
    return;
  }

  formContainer.classList.add("hidden");
  sky.classList.remove("hidden");

  // Texto de humo letra por letra
  const message = `HAPPY   BIRDAY     ${name.toUpperCase()}`;
  smokeText.innerHTML = "";

  [...message].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${index * 0.4 + 2}s`;
    smokeText.appendChild(span);
  });
});


