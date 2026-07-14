let scrollContainer = document.querySelector(".gallery");
let scrollRight = document.getElementById("rightArrow");
let scrollLeft = document.getElementById("leftArrow");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto"; 
})

scrollRight.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

scrollLeft.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
