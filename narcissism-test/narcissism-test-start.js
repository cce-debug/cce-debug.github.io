// Narcissism start page access control
(() => {
    const ACCESS_KEY = "HC-NARCISSISM-2025";
    const form = document.getElementById("access-form");
    const input = document.getElementById("access-key");
    const errorBox = document.getElementById("error-message");

    if (!form || !input || !errorBox) {
        return;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        const providedKey = input.value.trim();

        if (providedKey === ACCESS_KEY) {
            sessionStorage.setItem("narcissismTestAccessGranted", "true");
            window.location.href = "narcissism-test.html";
        } else {
            errorBox.textContent = "密钥不正确，请重新输入。";
            input.value = "";
            input.focus();
        }
    });
})();
