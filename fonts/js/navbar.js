var open = false;
    
    function toggleMenu() {
    var menuCon = document.querySelectorAll(".menu-con");

    if (open) {
        closeMenu(menuCon);
        open = false;
    } else {
        openMenu(menuCon);
        open = true;
    }
}

function openMenu(menuCon) {
    for (var i = 0; i < menuCon.length; i++) {
        menuCon[i].classList.add("open");
    }
}

function closeMenu(menuCon) {
    for (var i = 0; i < menuCon.length; i++) {
        menuCon[i].classList.remove("open");
    }
}
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3, // Adjust as needed
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  });
  
  const elementsToAnimate = document.querySelectorAll('.scale-up');
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
  
  // 
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  