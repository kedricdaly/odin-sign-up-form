

function validate_password() {
    const password = document.querySelector("#password");
    const pw_confirm = document.querySelector("#pw_confirm");
    const pw_notify = document.querySelector(".pw_notify")


    if (password.value != pw_confirm.value & (password.value != "") & (pw_confirm.value != "")) {
        if (! pw_confirm.classList.contains("error")) {
            pw_confirm.classList.add("error");
            pw_notify.style.visibility = "visible";
        }

        if (! password.classList.contains("error")) {
            password.classList.add("error");
            pw_notify.style.visibility = "visible";
        }

    } else {
        if (pw_confirm.classList.contains("error")) {
            pw_confirm.classList.remove("error");
            pw_notify.style.visibility = "hidden";
        }

        if (password.classList.contains("error")) {
            password.classList.remove("error");
            pw_notify.style.visibility = "hidden";
        }
    }
}

const password = document.querySelector("#password");
const pw_confirm = document.querySelector("#pw_confirm");

password.addEventListener("keyup", validate_password)
pw_confirm.addEventListener("keyup", validate_password)
