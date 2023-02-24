gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
   ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 1.5,
      effects: true,
   })

   gsap.fromTo('.header', { opacity: 1 }, {
      opacity: 0,
      scrollTrigger: {
         trigger: '.header',
         start: 'center',
         end: '1300',
         scrub: true
      }
   })
   let itemsL = gsap.utils.toArray('.content-galety__left .content-galety__item')
   itemsL.forEach(el => {
      gsap.fromTo(el, { x: -60, opacity: 0 }, {
         opacity: 1,
         x: 0,
         scrollTrigger: {
            trigger: el,
            // start: 'center',
            // end: '1300',
            scrub: true
         }
      })
   });
   let itemsR = gsap.utils.toArray('.content-galety__right .content-galety__item')
   itemsR.forEach(el => {
      gsap.fromTo(el, { x: 60, opacity: 0 }, {
         opacity: 1,
         x: 0,
         scrollTrigger: {
            trigger: el,
            // start: 'center',
            // end: '1300',
            scrub: true
         }
      })
   });

   gsap.fromTo('.content-galety__text', { y: 100, opacity: 0 }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
         trigger: '.content-galety__text',
         start: '-600',
         end: '-100',
         scrub: true
      }
   })
}

const swiper = new Swiper('.content-swiper__slider', {
   freeMode: true,
   parallax: true,
   centeredSlides: true,
   mousewheel: true,
   slideToClickedSlide: true,
   breakpoints: {
      0: {
         slidesPerView: 1,
         spaceBetween: 25,
      },
      500: {
         slidesPerView: 2,
         spaceBetween: 25,
      },
      930: {
         slidesPerView: 3.5,
         spaceBetween: 60,
      }
   },
});

const swiper_bg = new Swiper('.content-swiper__slider_bg', {
   parallax: true,
   centeredSlides: true,
   mousewheel: true,
   spaceBetween: 60,
   slidesPerView: 3.5
});
swiper.controller.control = swiper_bg

let text = document.querySelector('.content-swiper__text')
const slides = document.querySelectorAll('.swiper-slide')
swiper.on('slideChange', e => {
   swiper.activeIndex > 0 ? text.classList.add('_hidden') : text.classList.remove('_hidden')
})
slides.forEach(el => {
   el.addEventListener('click', function () {
      for (let index = 0; index < slides.length; index++) {
         const element = slides[index];
         if (element !== el) {
            element.classList.remove('_opened')
         }
      }
      el.classList.toggle('_opened')
   })
});
const blur_items = document.querySelectorAll('.content-galety__image').forEach(el => {
   let image = el.querySelector('img').outerHTML
   el.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="content-galety__blur">
         ${image}
      </div>
      `
   )
});