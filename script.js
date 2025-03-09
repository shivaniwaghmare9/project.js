

// VANTA.NET({
//    el: "#contact",
//    mouseControls: true,
//    touchControls: true,
//    gyroControls: false,
//    minHeight: 200.00,
//    minWidth: 200.00,
//    scale: 1.00,
//    scaleMobile: 1.00,
//    color: 0xb03838,
//    backgroundColor: 0x8070d
//  })


  
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

 let demoss=()=>{
   location.href="index.html";
//    Swal.fire({
//       icon: "success",
//       title: "Done",
//       text: "Are u interested !",
//       footer: '<a href="index.html">Why do I have this issue?</a>'
//     });
 }
