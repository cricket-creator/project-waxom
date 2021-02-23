let circleContainer = document.getElementById("sliderCounter");

let circles = circleContainer.getElementsByClassName("slider__circle");

for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}