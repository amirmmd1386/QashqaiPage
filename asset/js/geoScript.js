console.log('here');
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

let swiperGeo = (item) => {
    item.forEach(thing => {
        document.querySelector('.swiper-wrapper').innerHTML += `
<div class="swiper-slide">
<div class="card border-0 rounded m-3">
    <img src="${thing.img}" class="card-img-top"  alt="Card 1">
    <div class="card-body text-center">
        <h5 class="card-title">${thing.city}</h5>
        <p class="card-text">${thing.about}</p>
    </div>
</div>
</div>
`
    });
}
fetch('../json/geo.json')
    .then(res => res.json())
    .then(thing => swiperGeo(thing))
let blog = (item) => {
    item.forEach(thing => {
        if (thing.more) {
            document.querySelector('.blogDiv').innerHTML += `
            <div class="blog-card m-3 p-2 rounded d-flex flex-column justify-content-center" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="3000">
                    <img src="${thing.img}" class="object-fit-cover rounded" width="100%" height="300ox"
                        alt="">
                    <div class=" p-4 shadow blog-texts rounded">
                        <h3>${thing.title}</h3>
                        <p>${thing.text}
                        <span class="collapse" id="collapseExample">
                         ${thing.more}
                      </span>
                      <a class="btn btn-warning" onclick="changeText(this)" id="link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">بیشتر</a>
                      </p>
                    </div>
                </div>
    
            `
        }
        else {


            document.querySelector('.blogDiv').innerHTML += `
        <div class="blog-card m-3 p-2 rounded d-flex flex-column justify-content-center" data-aos="fade-right">
                <img src="${thing.img}" class="object-fit-cover rounded" width="100%" height="300ox"
                    alt="">
                <div class=" p-4 shadow blog-texts rounded">
                    <h3>${thing.title}</h3>
                    <p>${thing.text}</p>
                </div>
            </div>
        `
        }
    })
}
fetch('../json/geoPlace.json')
    .then(res => res.json())
    .then(thing => blog(thing));


let changeText= (e) => {
    let chose =e.innerHTML =="بیشتر"? e.innerText = "کمتر": e.innerText = "بیشتر"
    
}