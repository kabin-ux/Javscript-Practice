let scrollContainer = document.querySelector(".gallery");
let backButton = document.querySelector("#back-btn");
let nextButton = document.querySelector("#next-btn");

scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;''
    scrollContainer.style.scrollBehavior
})

nextButton.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
});


backButton.addEventListener("click", () => {

    scrollContainer.scrollLeft -= 900;
});