const projectNav = document.querySelectorAll(`.project__btn`);

projectNav.forEach(function (project__btn) {
    project__btn.addEventListener(`click`, function () {
        this.closest(`.project__nav`)
            .querySelector(`.active`)
            .classList
            .remove(`active`);

        this.classList.add(`active`);
    })
})