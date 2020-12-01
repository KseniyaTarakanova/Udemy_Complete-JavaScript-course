function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtns = document.querySelectorAll(".description-btn");

    function showModal() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    }

    more.addEventListener("click", showModal);

    close.addEventListener("click", hideModal);

    for(let i = 0; i < descriptionBtns.length; i++) {
        let btn = descriptionBtns[i];
        btn.addEventListener("click", showModal);
    }
}

module.exports = modal;