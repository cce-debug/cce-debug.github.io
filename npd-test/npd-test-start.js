(() => {
    const ACCESS_KEY = "HC-NPD-2025";
    const form = document.getElementById("access-form");
    const input = document.getElementById("access-key");
    const errorBox = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const providedKey = input.value.trim();

        if (providedKey === ACCESS_KEY) {
            sessionStorage.setItem("npdTestAccessGranted", "true");
            window.location.href = "npd-test.html";
        } else {
            errorBox.textContent = "密钥不正确，请重新输入。";
            input.value = "";
            input.focus();
        }
    });
})();