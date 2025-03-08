document.addEventListener("DOMContentLoaded", function () {
    let greeting = document.getElementById("greeting");
    let gallery = document.getElementById("gallery");
    let button = document.getElementById("start-slideshow");
    let slides = document.querySelectorAll(".slide");
    let music = document.getElementById("background-music");

    button.addEventListener("click", function () {
        greeting.style.opacity = "0"; // Исчезновение поздравления
        setTimeout(function () {
            greeting.style.display = "none";
            gallery.style.display = "block";

            let row = 0; // Счётчик рядов
            let col = 0; // Счётчик колонок
            let maxColumns = 3; // Сколько фото в одном ряду (можно изменить)

            slides.forEach(function (slide, index) {
                setTimeout(function () {
                    try {
                        let photoWidth = slide.width || 250; // Размер фото (по умолчанию 250px)
                        let photoHeight = slide.height || 200; // Высота фото (по умолчанию 200px)

                        let x = col * photoWidth; // Координата X (без отступов)
                        let y = row * photoHeight; // Координата Y (без отступов)

                        slide.style.position = "absolute";
                        slide.style.left = x + "px";
                        slide.style.top = y + "px";
                        slide.style.opacity = "1";
                        slide.style.transition = "opacity 1.5s ease-in-out"; // Медленное появление

                        col++; // Увеличиваем колонку
                        if (col >= maxColumns) { // Если колонок слишком много, переносим на новую строку
                            col = 0;
                            row++;
                        }
                    } catch (error) {
                        console.error("Ошибка при установке позиции:", error);
                    }
                }, index * 2000); // Каждое фото появляется через 2 секунды (2000 мс)
            });
        }, 1000);
    });

    // Включаем музыку, если браузер блокирует autoplay
    document.body.addEventListener("click", function () {
        music.play();
    });
});