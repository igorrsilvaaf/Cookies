const cookieBox = document.querySelector(".main"),
    buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    cookieBox.classList.add("show");

    buttons.forEach(button => {
        button.addEventListener("Click", () => {
            cookieBox.classList.remove("show");
        });
    });
};

window.addEventListener("load", executeCodes);

