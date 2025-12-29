



  
// let clickme=()=>{
//     let display1=document.querySelector("#show")
//     if(display1.style.display==='none'){
//         display1.style.display='block';
//      }
//      else{
//         display1.style.display='none';
//      }
    
// }
// let clickme1=()=>{
//     let display3=document.querySelector("#show1")
//     if(display3.style.display==='none'){
//         display3.style.display='block';
//      }
//      else{
//         display3.style.display='none';
//      }
    
// }
// let clickme2=()=>{
//     let display2=document.querySelector("#show2")
//     if(display2.style.display==='none'){
//         display2.style.display='block';
//      }
//      else{
//         display2.style.display='none';
//      }
    
// }

// let booknow=()=>{
//    if(localStorage.getItem("name")){
//       location.href="bookform.html"
//    }
//    else{
//       Swal.fire({
//          icon: "error",
//          title: "Oops...",
//          text: "Please First Signup !",
//          footer: '<a href="form.html">Go to Signup Page</a>'

//          })
//       }
// }

// let logout=()=>{
//    localStorage.clear();
// }

// let sing=()=>{
//    location.href="form.html"
// }

//  let view=()=>{
//    // location.href="form.html";
//    Swal.fire({
//       icon: "success",
//       title: "Done",
//       text: "Please First Signup !",
//       footer: '<a href="form.html">Go to Signup Page</a>'
//     });
//  }




  
let clickme=()=>{
    let display1=document.querySelector("#show")
    if(display1.style.display==='none'){
        display1.style.display='block';
     }
     else{
        display1.style.display='none';
     }
    
}
let clickme1=()=>{
    let display3=document.querySelector("#show1")
    if(display3.style.display==='none'){
        display3.style.display='block';
     }
     else{
        display3.style.display='none';
     }
    
}
let clickme2=()=>{
    let display2=document.querySelector("#show2")
    if(display2.style.display==='none'){
        display2.style.display='block';
     }
     else{
        display2.style.display='none';
     }
    
}

let booknow=()=>{
   if(localStorage.getItem("name")){
      location.href="bookform.html"
   }
   else{
      Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "Please First Signup !",
         footer: '<a href="form.html">Go to Signup Page</a>'

         })
      }
}

let logout=()=>{
   localStorage.clear();
}

let sing=()=>{
   location.href="form.html"
}

 let view=()=>{
   // location.href="form.html";
   Swal.fire({
      icon: "success",
      title: "Done",
      text: "Please First Signup !",
      footer: '<a href="form.html">Go to Signup Page</a>'
    });
 }

