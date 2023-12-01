submit.disabled = true;
function generateRandomCaptcha() {
    var randomLength = Math.random() * 3;
    while (!(randomLength < 4 && randomLength > 2)) randomLength = Math.random() * 3;

    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < randomLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function isEmpty(obj) {
    return obj.value == "";
}

function firstCaptcha() {
    var captcha = generateRandomCaptcha();
    labelForCaptcha.textContent = "Введите данный текст: " + captcha;
    sendCaptcha.onclick = () => {
        if (isEmpty(captchaInput)) {
            alert("Пустой ввод");
            return;
        }
        if (captchaInput.value == captcha) {
            alert("Поздравляю, вы не робот!");
            submit.disabled = false;
        }
        else {
            alert("Вы похожи на робота, пройдите дополнительную проверку");
            document.querySelector(".firstCaptcha").style.display = "none";
            secondCaptcha();
        }
    }
}
function secondCaptcha() {
    var n = parseInt(Math.random() * 10);
    var m = parseInt(Math.random() * 10);
    const div = document.querySelector(".secondCaptcha");
    labelForSecondCaptcha.textContent = n + " + " + m + " = ";
    div.style.display = "block";
    sendSecondCaptcha.onclick = () => {
        if (isEmpty(secondCaptchaInput)) {
            alert("Пустой ввод");
            return;
        }
        if (secondCaptchaInput.value == n + m) {
            alert("Поздравляю, вы не робот!");
            submit.disabled = false;
        }
        else {
            alert("Все-таки, вы робот(((");

        }
    }
}
firstCaptcha();
