const animated = document.querySelectorAll(".animated");

document.addEventListener("DOMContentLoaded", () => {
    animated.forEach((element) => {
        element.classList.add("fade-left");
    });
});

const closeIcons = document.querySelectorAll(".banner__control");

closeIcons.forEach((closeIcon) => {
    closeIcon.addEventListener("click", () => {
        const bannerWrapper = closeIcon.closest(".banner__wrapper");
        if (bannerWrapper) {
            bannerWrapper.style.display = "none";
        }
    });
});
