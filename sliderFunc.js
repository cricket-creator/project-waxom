const sliderCounter = document.querySelectorAll(`.slider__circle`);

sliderCounter.forEach(function (slider__circle) {
    slider__circle.addEventListener(`click`, function () {
        this.closest(`.slider__counter`)
            .querySelector(`.active`)
            .classList
            .remove(`active`);

        this.classList.add(`active`);
    })
})