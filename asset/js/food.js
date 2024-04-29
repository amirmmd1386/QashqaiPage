let tabLinks = document.querySelectorAll(".tablinks");
let tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
});

function openTabs(el) {
    var btnTarget = el.currentTarget;
    var country = btnTarget.dataset.country;

    tabContent.forEach(function (el) {
        el.classList.remove("active");
    });

    tabLinks.forEach(function (el) {
        el.classList.remove("active");
    });

    document.querySelector("#" + country).classList.add("active");

    btnTarget.classList.add("active");
}
let tabSwiper = document.querySelector('.swiper-wrapper')
let headSwiperPer = (per) => {
    per.forEach(element => {
        tabSwiper.innerHTML += `
                              <div class="swiper-slide">
                                    <div class="card mb-3 p-0 m-auto">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src="${element.img}" height="100%" width="100%"
                                                    class="object-fit-cover rounded-end" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">${element.title}</h5>
                                                    <p class="card-text">${element.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
`})
}
fetch('../json/food.json')
    .then(res => res.json())
    .then(per => headSwiperPer(per))
    .catch(c => console.log(c))
