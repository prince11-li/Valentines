let slideIndex = 0;

function showSlides() {
    let textSlides = document.getElementsByClassName("text-slide");
    let imageSlides = document.getElementsByClassName("image-slide");

    for (let i = 0; i < textSlides.length; i++) {
        textSlides[i].style.display = "none";
        imageSlides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > textSlides.length) { slideIndex = 1; }

    textSlides[slideIndex - 1].style.display = "block";
    imageSlides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}

showSlides();

// Floating Hearts Animation
function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.querySelector(".floating-hearts").appendChild(heart);

    let leftPosition = Math.random() * 100;
    let duration = Math.random() * 3 + 2;

    heart.style.left = leftPosition + "%";
    heart.style.animationDuration = duration + "s";

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 500);
