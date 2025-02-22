

// let swiper=new Swiper(".swiper",{
//     navigation:{
//         nextE1:".swiper-button-next",
//         prevE1:".swiper-button-prev"
//      },
//     autoplay:{
//         delay:2000,
//     }
   
// })

let swiper1 = new Swiper(".swiper1", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-buuton-prev"
    }
    // autoplay:{
    //   delay:2000
    // }
  });

  // var swiper1= new Swiper(".mySwiper", {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper1-pagination",
  //     clickable: true,
  //   },
  // });