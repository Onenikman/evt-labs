const pizzaButtons = document.querySelectorAll('.menu__item-buy');
const pizzaField = document.querySelector('.order__input--pizza');

// По клику на соответствующую кнопку в форме в поле будет название выбранной пиццы
pizzaButtons.forEach(button => {
    button.addEventListener('click', () => {
        switch(button.classList[1]) {
            case 'menu__item-buy--margarita':
                pizzaField.value = 'Маргарита';
                break;

            case 'menu__item-buy--hawaiin':
                pizzaField.value = 'Гавайская';
                break;

            case 'menu__item-buy--mexican':
                pizzaField.value = 'Мексиканская';
                break;
        }
    })
});



// Валидация формы
const inputs = document.querySelectorAll('.order__input');
const form = document.querySelector('.order__form');
const formErrorMessage = document.querySelector('.order__error');
let validaionError = false;

form.addEventListener('submit', (event) => {
    formErrorMessage.classList.add('hidden');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('order__input--error');
    }

    for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            inputs[i].classList.add('order__input--error');
            validaionError = true;
        }
    }

    if(validaionError) {
        event.preventDefault();
        formErrorMessage.classList.remove('hidden');
    }
});


// Скролл к нужному месту страницы по нажатию на ссылки в шапке сайта
$(function() {
    function scrolling(scrollTo, time, offset = 1) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top + offset
        }, time);
    }

    $('.header__nav-link--why').on('click', function (e) {
        e.preventDefault();
        scrolling('.why', 500);
    });

    $('.header__nav-link--menu').on('click', function (e) {
        e.preventDefault();
        scrolling('.menu', 500);
    });

    $('.header__nav-link--delivery').on('click', function (e) {
        e.preventDefault();
        scrolling('.delivery', 1000);
    });

    $('.header__nav-link--reviews').on('click', function (e) {
        e.preventDefault();
        scrolling('.reviews', 1000);
    });
});

// Анимация по скроллу
$(function() {
    $(window).scroll(function () {
        useAnimation('.why__header');
        useAnimation('.why__item-icon');
        useAnimation('.why__item-text');
        useAnimation('.menu__header');
        useAnimation('.menu__item');
        useAnimation('.delivery__header');
        useAnimation('.delivery__text');
        useAnimation('.delivery__image');
        useAnimation('.order__header');
        useAnimation('.order__note');
        useAnimation('.order__input');
        useAnimation('.order__submit');
    });

    function useAnimation(objectClass) {
        $(objectClass).each(function () {
            var itemPos = $(this).offset().top;
            var border = $(window).scrollTop() + $(window).height();
            if (itemPos < border) {
                $(this).addClass(`${$(this).data('animation')}`);
            }
        });
    }
});


// Инициализация слайдера
$(function() {
    $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="slick-prev" aria-label="Предыдущий слайд"></button>',
        nextArrow: '<button type="button" class="slick-next" aria-label="Следующий слайд"></button>'
    });
});