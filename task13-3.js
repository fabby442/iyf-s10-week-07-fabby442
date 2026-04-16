const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input, textarea");

// ---------- RESTORE SAVED DATA ----------
inputs.forEach(input => {
    const saved = sessionStorage.getItem(`form_${input.name}`);

    if (saved) {
        input.value = saved;
    }
});

// ---------- AUTO SAVE ON TYPING ----------
inputs.forEach(input => {
    input.addEventListener("input", () => {
        sessionStorage.setItem(`form_${input.name}`, input.value);
    });
});

// ---------- CLEAR ON SUBMIT ----------
form.addEventListener("submit", (e) => {
    e.preventDefault();

    inputs.forEach(input => {
        sessionStorage.removeItem(`form_${input.name}`);
    });

    form.reset();

    alert("Form submitted and cleared!");
});