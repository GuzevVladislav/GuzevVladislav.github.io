document.addEventListener('DOMContentLoaded', () => {

    $('.slider__content').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/prev-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/next-arrow.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: false
            }
        }]
    });

    //CONSTANTS

    // buyBtn = document.querySelectorAll('.button__catalog-item'),
    // modal = document.querySelectorAll('.catalog-item-modal'),








    goodsEntire();


    //TABS FUNCTIONS
    const tabs = document.querySelectorAll('.catalog__tab'),
        catalogContent = document.querySelectorAll('.catalog__content');


    tabs.forEach((item, i) => {
        item.addEventListener('click', () => {
            tabs.forEach((item) => {
                item.classList.remove('catalog__tab_active');
            })
            tabs[i].classList.add('catalog__tab_active');
            catalogContent.forEach((item) => {
                item.classList.remove('catalog__content_active');

            })
            catalogContent[i].classList.add('catalog__content_active')
        })


    });



    // FUCTIONS


    // ACTIONS WITH MODAL





    function modalClick() {
        const modal = document.querySelectorAll('.catalog-item-modal'),
            closeBtn = document.querySelectorAll('.modal__close'),
            overlay = document.querySelector('.overlay'),
            buyBtnModal = document.querySelectorAll('.button__buy'),
            modalOrder = document.querySelector('.modal-consultation__window'),
            currentSofa = document.querySelectorAll('.title__catalog-item-modal'),
            sofa = document.querySelector('.subtitle__order');
        document.querySelectorAll('.button__catalog-item').forEach((item, i) => {
            item.addEventListener('click', () => {
                console.log("work");
                modal[i].classList.add('catalog-item-modal_active')
                overlay.classList.add('overlay_active');
                document.body.style.overflow = 'hidden';
                const temp = modal[i].querySelectorAll('.catalog-item-modal__image img');
                temp.forEach((item) => {
                    item.addEventListener('click', () => {
                        let mainImg = modal[i].querySelector('.catalog-item-modal__main-image');
                        mainImg.innerHTML = `<img src="${item.src}" alt="">`;
                        console.log(mainImg)
                    })
                })
            })
        });

        const closeModal = () => {
            closeModalfunc();
            closeConsModal();
        }

        function closeModalfunc() {
            modal.forEach((item) => {
                item.classList.remove('catalog-item-modal_active');
            })
            overlay.classList.remove('overlay_active');
            document.body.style.overflow = '';
        }

        function closeConsModal() {
            modalOrder.classList.remove('modal-consultation__window_active')
        }

        function openConsultationModal() {
            buyBtnModal.forEach((item, i) => {
                item.addEventListener('click', function() {
                    closeModalfunc();
                    overlay.classList.add('overlay_active');
                    modalOrder.classList.add('modal-consultation__window_active');
                    sofa.innerHTML = `<div class="subtitle subtitle__order">${currentSofa[i].textContent}</div>`

                })
            });
        }
        // METHODS

        closeBtn.forEach(item => {
            item.addEventListener('click', () => {
                closeModal();
            })
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
                closeConsModal();
            }
        })

        document.addEventListener('keydown', (e) => {
            modal.forEach((item) => {
                if (e.code === 'Escape' && item.classList.contains('catalog-item-modal_active')) {
                    closeModal();
                    closeConsModal();
                }
            })
        })
        openConsultationModal();

    }




    //Goods Entire 

    function goodsEntire() {
        const firstTab = document.querySelector('.first'),
            secondTab = document.querySelector('.second'),
            thirdTab = document.querySelector('.third');

        $.getJSON("js/catalog.json", function(json) {
            for (let key in json) {

                if (json[key]["category"] == 1) {
                    addContent(firstTab);
                }
                if (json[key]["category"] == 2) {
                    addContent(secondTab);
                }
                if (json[key]["category"] == 3) {
                    addContent(thirdTab);
                }

                function addContent(tab) {
                    tab.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__content catalog-item__content_active">
                        <div class="catalog-item__wrapper">
                            <img src="${json[key]['photos']['first']}" alt="">
                            <div class="title title__catalog-item">${json[key]["name"]}</div>
                            <div class="catalog-item__descr subtitle subtitle__catalog-item">${json[key]["subtitle"]}</div>
                            <hr>
                            <div class="catalog-item__footer-wrapper">
                                <div class="catalog-item__price">
                                    <div class="catalog-item__old-price">
                                    ${json[key]["oldPrice"]} руб.
                                    </div>
                                    <div class="catalog-item__new-price">
                                        ${json[key]["newPrice"]} руб.
                                    </div>
                                </div>
                                <button class="button button__catalog-item">Подробнее</button>
                            </div>
                        </div>
                    </div>

                    <div class="catalog-item-modal">
                        <div class="modal__close">&times;</div>
                        <div class="catalog-item-modal__wrapper">
                            <div class="catalog-item-modal__image-block">
                                <div class="catalog-item-modal__main-image">
                                    <img src="${json[key]["photos"]['first']}" alt="">
                                </div>
                                <div class="catalog-item-modal__images">

                                    <div class="catalog-item-modal__image">
                                        <img src="${json[key]["photos"]['first']}" alt="">
                                    </div>
                                    <div class="catalog-item-modal__image">
                                        <img src="${json[key]["photos"]['second']}" alt="">
                                    </div>
                                    <div class="catalog-item-modal__image">
                                        <img src="${json[key]["photos"]['third']}" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="catalog-item-modal__content">
                                <div class=" title title__catalog-item-modal">${json[key]["name"]}</div>
                                <div class="catalog-item-modal__descr">${json[key]["description"]}</div>
                                <div class="catalog-item-modal__size">
                                    <span class="title title__size">
                                        размеры:
                                        </span>
                                    <div class="actual-size catalog-item-modal__actual-size">
                                        <div>сложенный: ${json[key]["size"]["folded"]}</div>
                                        <div>разложенный: ${json[key]["size"]["decomposed"]}</div>
                                        <div>спальное место: ${json[key]["size"]["sleepingPlace"]}</div>
                                    </div>
                                </div>

                                <button class="button button__form button__buy">купить</button>
                            </div>
                        </div>
                    </div>
                </div>`
                }


            }
            modalClick();
        });

    }




    // ACTIONS WITH FORMS

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: 'POST',
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function() {
            $(this).find('input').val('');


            $('form').trigger('reset');
            closeModal();
        });
        return false;
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите хотя бы {0} символа")
                },
                email: {
                    required: "Введите свой E-mail",
                    email: "Такого E-mail не существует"
                },
                phone: "Введите свой номер"
            }
        });
    }




    // PLUGINS
    //Form Validate
    validateForms('.modal-consultation__window .feed-form');
    validateForms('.consultaion .feed-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});