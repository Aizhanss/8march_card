let images = document.querySelectorAll(".gallery img");
let message = document.querySelector(".message");
let button = document.querySelector(".surprise-btn");
let music = document.getElementById("backgroundMusic");
let currentIndex = 0;

function startSurprise() {
    button.style.opacity = "0"; // Кнопка исчезает плавно
    setTimeout(() => button.style.display = "none", 1000);

    music.play();
    message.style.transition = "opacity 2s"; 
    message.style.opacity = "0"; // Исчезает поздравление

    // Анимация сердечек
    createHearts();

    setTimeout(() => {
        message.style.display = "none";
        showNextImage();
    }, 2000);
}

function showNextImage() {
    if (currentIndex < images.length) {
        let img = images[currentIndex];
        img.classList.remove("hidden");
        img.style.opacity = "1"; // Фото остается видимым
        img.style.animation = "fadeIn 2s ease-in-out";
        currentIndex++;
        setTimeout(showNextImage, 2500);
    }
}

// Функция создания сердечек
function createHearts() {
    let heartContainer = document.createElement("div");
    heartContainer.classList.add("hearts");
    document.body.appendChild(heartContainer);

    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartContainer.appendChild(heart);
    }

    setTimeout(() => heartContainer.remove(), 4000); // Удаление после анимации
}