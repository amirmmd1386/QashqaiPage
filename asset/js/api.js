import { headSwiperPer, handCraft } from "./apiFun.js";

fetch('asset/json/headSwiper.json')
    .then(res => res.json())
    .then(per => headSwiperPer(per))
    .catch(c => console.log(c))


fetch('asset/json/cardHandicarft.json')
    .then(res => res.json())
    .then(thing => handCraft(thing))
    .catch(()=>console.log('error'))
