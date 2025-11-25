const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const max = 250;

textarea.addEventListener("input", () => {
    let length = textarea.value.length;

    // Actualizar contador
    counter.textContent = `${length} / ${max}`;

    // Si llega al límite: borde rojo + texto rojo
    if (length >= max) {
        textarea.classList.add("error");
        counter.classList.add("error-text");
    } else {
        textarea.classList.remove("error");
        counter.classList.remove("error-text");
    }
});
