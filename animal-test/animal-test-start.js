
(() => {
    const ACCESS_KEY = "HC-ANIMAL-2025";
    const form = document.getElementById("access-form");
    const input = document.getElementById("access-key");
    const errorBox = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const providedKey = input.value.trim();

        if (providedKey === ACCESS_KEY) {
            sessionStorage.setItem("animalTestAccessGranted", "true");
            window.location.href = "animal-test.html";
        } else {
            errorBox.textContent = "密钥不正确，请重新输入。";
            input.value = "";
            input.focus();
        }
    });
})();