document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const formContainer = document.querySelector(".form-container");

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            formContainer.style.transform = "translateX(-50%)";
        } else {
            formContainer.style.transform = "translateX(0%)";
        }
    });
});
