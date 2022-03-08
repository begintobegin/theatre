const btn = document.querySelector('.header__burger');
const list = document.querySelector('.header__list');
btn.addEventListener('click',()=>{
  list.classList.toggle('active');
  btn.classList.toggle('active');
})
$(document).ready(()=>{
$('.productions__slider').slick({
  arrows: false,
  dots: false,
  infinite: false,
  slidesToScroll: 1,
  variableWidth: true,
  mobileFirst: true,
  responsive: [{
    breakpoint:992,
    settings: 'unslick'
  }]
  
})
})