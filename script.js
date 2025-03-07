

VANTA.NET({
   el: "#contact",
   mouseControls: true,
   touchControls: true,
   gyroControls: false,
   minHeight: 200.00,
   minWidth: 200.00,
   scale: 1.00,
   scaleMobile: 1.00,
   color: 0xb03838,
   backgroundColor: 0x8070d
 })


   function img1(){
    let changeimg= document.querySelector("#box");
    let change=document.querySelector("#textcontent");
    changeimg.style.backgroundImage="url('./project.images/luxury-collection-img-1.jpg5.jpg')";
     change.innerHTML="<h1>SPORTS CAR</h1>"  

   }
   function img2(){
    let changeimg= document.querySelector("#box");
    changeimg.style.backgroundImage="url('./project.images/luxury-collection-img-2.jpg3.jpg')";
    let change=document.querySelector("#textcontent");
    change.innerHTML="<h1>CONVERTIBLE CAR</h1>" 
    
   }
   function img3(){
    let changeimg= document.querySelector("#box");
    changeimg.style.backgroundImage="url('./project.images/luxury-collection-img-3.jpg2.jpg')";
    let change=document.querySelector("#textcontent");
    change.innerHTML="<h1>SEDAN CAR</h1>"  

   }
   function img4(){
    let changeimg= document.querySelector("#box");
    changeimg.style.backgroundImage="url('./project.images/luxury-collection-img-4.jpg')";
    let change=document.querySelector("#textcontent");
    change.innerHTML="<h1>LUXURY CAR</h1>"  

}


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
         footer: '<a href="#">Why do I have this issue?</a>'

         })
      }
   
}


