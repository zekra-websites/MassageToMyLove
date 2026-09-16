/* ================= الباسورد ================= */

const correctPassword = "love";


function checkPassword() {

    const input = document.getElementById("passwordInput");
    const message = document.getElementById("passwordMessage");

    const loginScreen = document.getElementById("loginScreen");
    const mainContent = document.getElementById("mainContent");


    if (input.value === correctPassword) {

        loginScreen.style.display = "none";

        mainContent.classList.remove("hidden");

        startMusic();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        message.textContent = "الباسورد غلط 😂❤️";

        input.classList.remove("wrong");

        void input.offsetWidth;

        input.classList.add("wrong");

        input.value = "";

    }

}


/* ================= دخول بالـ Enter ================= */

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("passwordInput");

    if (input) {

        input.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                checkPassword();

            }

        });

    }

});


/* ================= الموسيقى ================= */

function startMusic() {

    const music = document.getElementById("music");

    const button = document.getElementById("musicButton");

    if (!music) return;


    music.play()
        .then(function () {

            button.innerHTML = "🔊";

        })
        .catch(function () {

            button.innerHTML = "🎵";

        });

}


function toggleMusic() {

    const music = document.getElementById("music");

    const button = document.getElementById("musicButton");

    if (!music) return;


    if (music.paused) {

        music.play()
            .then(function () {

                button.innerHTML = "🔊";

            });

    } else {

        music.pause();

        button.innerHTML = "🔇";

    }

}


/* ================= العداد ================= */

const startDate = new Date("2026-02-15T00:00:00");


function updateCounter() {

    const now = new Date();

    let difference = now - startDate;


    if (difference < 0) {

        difference = 0;

    }


    const seconds = Math.floor(difference / 1000);


    const days = Math.floor(
        seconds / 86400
    );


    const hours = Math.floor(
        (seconds % 86400) / 3600
    );


    const minutes = Math.floor(
        (seconds % 3600) / 60
    );


    const remainingSeconds =
        seconds % 60;


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (daysElement) {

        daysElement.textContent = days;

    }


    if (hoursElement) {

        hoursElement.textContent = hours;

    }


    if (minutesElement) {

        minutesElement.textContent = minutes;

    }


    if (secondsElement) {

        secondsElement.textContent = remainingSeconds;

    }

}


updateCounter();

setInterval(updateCounter, 1000);
