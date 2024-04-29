let headSwiperPer = (per) => {
    per.forEach(element => {
        document.querySelector('.headSwiper .swiper-wrapper').innerHTML += `
        <div class="swiper-slide d-flex justify-content-around align-items-center mt-3 mb-3">
          <div class="nav_photo p-3 rounded">
             <img src="${element.img}" class="rounded" height="100%" width="100%" alt="">
          </div>
          <div class="header-info d-flex align-items-start flex-column justify-content-center">
              <p>${element.name}</p>
              <p class="fw-bolder fs-6 text-white">${element.subAbout}</p>
              <a class="btn btn-warning" href="?${element.name}">بیشتر بدانیم</a>
          </div>
        </div>
        `
    });
}
let handCraft = (thing) => {
    thing.forEach(element => {
        document.querySelector('.hands').innerHTML += `
        <div class="card border border-3 HandicraftsCards" data-aos="zoom-out">
             <img src="${element.img}" class="card-img-top" alt="...">
             <div class="card-body HandicraftsCard">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.about}
                </p>
                 <a href="#" class="btn btn-warning">بیشتر</a>
            </div>
        </div>
        `
    })
}
export { headSwiperPer, handCraft }