


// let swiper1 = new Swiper(".swiper1", {
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     },
//     navigation:{
//       nextEl:".swiper-button-next",
//       prevEl:".swiper-buuton-prev",
//     },
//     autoplay:{
//       delay:2000
//     }
//   });

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // let swiper3 = new Swiper("Swiper3", {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });