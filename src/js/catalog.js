const firstTab = document.querySelector('.first');

$.getJSON("js/catalog.json", function(json) {
    for (let key in json) {
        // console.log(json[key]['name'])
        firstTab.innerHTML += `
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
                            <div class=" title title__catalog-item-modal">Modal</div>
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
});