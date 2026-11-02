function openSurprise() {
    const content = document.getElementById("content");

    content.classList.remove("hidden");

    content.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();
}

function openLetter() {
    document.getElementById("letter").classList.toggle("show");
}

function secretMessage() {
    document.getElementById("secret").classList.toggle("show");
    createConfetti();
}

// MUSIC
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "♫ Music On";
    } else {
        music.pause();
        musicBtn.textContent = "♫ Music Off";
    }
});

// FLOATING HEARTS
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 12 + "px";
    heart.style.animationDuration = Math.random() * 4 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 700);

// CONFETTI
function createConfetti() {
    const symbols = ["♥", "♡", "✦", "✧"];

    for (let i = 0; i < 35; i++) {
        const item = document.createElement("span");

        item.textContent = symbols[
            Math.floor(Math.random() * symbols.length)
        ];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-20px";
        item.style.color = "#c47c93";
        item.style.fontSize = "20px";
        item.style.zIndex = "999";
        item.style.pointerEvents = "none";
        item.style.transition = "transform 3s, opacity 3s";

        document.body.appendChild(item);

        setTimeout(() => {
            item.style.transform = "translateY(110vh) rotate(500deg)";
            item.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            item.remove();
        }, 3200);
    }
}