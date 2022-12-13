const lenghtSlider = document.querySelector(".pass-lenght input");
const generateBtn = document.querySelector(".generate-btn");
const options = document.querySelectorAll(".option input");
const passwordInput = document.querySelectorAll(".input-box input");
const textInput = document.querySelector("#text-input");

const characters = {
    lowercase: "abdefghijklmnopqrstuvwxyz",
    uppercase: "ABDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^%$#@!&*(){}|[]:;<>,~",
};

const generatePassword = () => {
    let staticPassword = "",
        randomPassword = "",
        excludeDuplicate = false,
        passLenght = lenghtSlider.value;

    options.forEach((option) => {
        if (option.checked) {

            if (option.id !== "exc-deplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id];
            } else if (option.id === "spaces") {
                staticPassword += `  ${staticPassword}`
            } else {
                excludeDuplicate = true;
            }

        }
    });

    for (let i = 0; i < passLenght; i++) {
        let randomChar = randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];



    }
    textInput.value = randomPassword;
    console.log(textInput.value);



};

const updateSlider = () => {
    document.querySelector(".pass-lenght span").innerText = lenghtSlider.value;




};

updateSlider();

lenghtSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
