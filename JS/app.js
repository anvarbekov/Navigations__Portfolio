// ================= MOON, SUN CODE START ==============//
const changeThema = document.querySelector('.change-thema')
const changeThemaSun = document.querySelector('.change_thema-sun')

const body = document.querySelector('body');
const header = document.querySelector('.header');
const homeData = document.querySelector('.home__data');
const aboutDescription = document.querySelector('.about__description');
const contactContents = document.querySelectorAll('.contact__content');
 
changeThemaSun.addEventListener('click', () => {
    changeThema.classList.toggle('active');
    changeThemaSun.classList.toggle('active');
    body.classList.toggle('active');
    header.classList.toggle('active')
    homeData.classList.toggle('active')
    aboutDescription.classList.toggle('active');

    contactContents.forEach(contactContent => {
        contactContent.classList.toggle('active')
    })
   
})
changeThema.addEventListener('click', () => {
    changeThema.classList.remove('active');
    changeThemaSun.classList.remove('active');
    body.classList.remove('active');
    header.classList.remove('active')
    homeData.classList.remove('active')
    aboutDescription.classList.remove('active')
    
    contactContents.forEach(contactContent => {
        contactContent.classList.toggle('active')
    })

})

// ================= MOON, SUN CODE END ==============//


// ================= SCROLL REVEAL CODE START ==============//

const ScrollR = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

ScrollR.reveal(`.home__data`)
ScrollR.reveal(`.home__handle`, {delay: 300} )
ScrollR.reveal('.home__social, .home__scroll', {delay: 900, origin: 'bottom'})
ScrollR.reveal('.skills__content-front', {origin: 'left'})
ScrollR.reveal('.skills__content-back', {origin: 'right'})

// ================= SCROLL REVEAL CODE END ==============//

// ================= SERVICES MODAL START ===================//

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');
      
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach(mv => {
            mv.classList.remove('active-modal')
        })
    })
})
// ================= SERVICES MODAL END ===================//



// ================= MAXITUP FILTERS START ===================//

let mixerPortfolio  = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

// ============= LINK ACTIVE ==============//

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work');
}
linkWork.forEach(L=> L.addEventListener('click', activeWork))


// ================= MAXITUP FILTERS END ===================//

// ================ SWIPER JS CODE START =================//

let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

// ================ SWIPER JS CODE END =================//




// ================ SCROLL SECTIONS ACTIVE LINK START =================//

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                  document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
              }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
              }
    })
}

window.addEventListener('scroll', scrollActive);

// ================ SCROLL SECTIONS ACTIVE LINK END =================//




// ================ PWA =================//
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("Sw Registor");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Filed!");
        console.log(error);
    });
}
// ================ PWA =================//


