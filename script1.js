

//==============================================FORM JS========================================================================================
let sub=()=>{
let inpname=document.querySelector("#nameinput").value
let inpnumber=document.querySelector("#numberinput").value
let inpemail=document.querySelector("#emailinput").value
let inppass=document.querySelector("#inputpassword").value
let inpcorpass=document.querySelector("#confirmpassinput").value


let errname=document.querySelector("#nameerror")
let errnumber=document.querySelector("#numbererror")
let erremail=document.querySelector("#emailerror")
let errpassword=document.querySelector("#passworderror")
let errcorpass=document.querySelector("#conpasserror")


if(inpname==""){
    errname.innerHTML="Please Enter Name"
    let naminput=document.querySelector("#nameinput")
      naminput.style.border="1px solid black"
      errname.style.color="red"
    return false;
}
if(inpnumber==""){
  errname.innerHTML=""
   errnumber.innerHTML="Please Enter Number"
   let numinput=document.querySelector("#numberinput")
    numinput.style.border="1px solid black"
  errnumber.style.color="red"
    return false;
}
if(inpemail==""){
  errnumber.innerHTML=""
   erremail.innerHTML="Please Enter E-mail"
  let mailinput=document.querySelector("#emailinput")
  mailinput.style.border="1px solid black"
  erremail.style.color="red"
   return false;
}
if(inppass==""){
  erremail.innerHTML=""
  errpassword.innerHTML="Please Enter Password"
 let passinput=document.querySelector("#inputpassword")
      passinput.style.border="1px solid black"
  errpassword.style.color="red"
   return false;
}

if(inpcorpass==""){
  errpassword.innerHTML=""
  errcorpass.innerHTML="Please Enter Confirm Password"
  let coninput=document.querySelector("#confirmpassinput")
  coninput.style.border="1px solid black"
  errcorpass.style.color="red"
  return false;
}
else if(inppass!==inpcorpass){
    
    errcorpass.innerHTML="password does not match please enter the correct password"
    errcorpass.style.color="red"
    document.querySelector("#confirmpassinput").value=""
    document.querySelector("#confirmpassinput").focus()
    
    return false;
}

else if(!(inpemail.includes(".com") && inpemail.includes('@'))){
  erremail.innerHTML="Please Enter valid E-mail @,.com"
  erremail.style.color="red"
  return false;
}

else if(isNaN(inpnumber)){
    errnumber.innerHTML="please enter only number"
    errnumber.style.color="red"
    return false;
 }
 else if(inpnumber.length!==10){
    errnumber.innerHTML="Enter 10 digit"
    errnumber.style.color="red"
    return false;
 }



    localStorage.setItem("name",inpname)
    localStorage.setItem("number",inpnumber)
    localStorage.setItem("email",inpemail)
    localStorage.setItem("pass",inppass)
    localStorage.setItem("password",inpcorpass)
    
     location.href="login.html"
     return false;
}
//===============================================LOGIN JS======================================================================================================
let login=()=>{

  let inpmail=document.querySelector("#mail").value
  let inppassword=document.querySelector("#password").value
 
  let localemail= localStorage.getItem("email",inpmail)
  let localpass=localStorage.getItem("pass",inppassword)

  if(inpmail==localemail && inppassword==localpass){
    location.href="home.html";
    return false;
}
else {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
  
    //alert("invalid Email or password")
   // errorpass.innerHTML="invalid "
}
return false;
}
//============================================(login)Location=====================================================================
// let lock=()=>{
//   let change=document.querySelector("#list")
//   if(!change) return;
//   if(change.style.display==="none" || change.style.display===""){
//     change.style.display="block";
//   }
//   else{
//     change.style.display="none";
//   }
// }
//=========================================(login)destination====================================================================
// let show=()=>{
//   let change1=document.querySelector("#desti")
//   if(!change1) return;
//   if(change1.style.display==="none" || change1.style.display===""){
//     change1.style.display="block";
//   }
//   else{
//     change1.style.display="none";
//   }
// }
// //=================================================================CONTACTUS============================================
let CON=()=>{
  let inpname=document.querySelector("#nameinput").value
  let inpnumber=document.querySelector("#numberinput").value
  let inpemail=document.querySelector("#emailinput").value
  let inppass=document.querySelector("#inputpassword").value
 
   let errname=document.querySelector("#nameerror")
  let errnumber=document.querySelector("#numbererror")
  let erremail=document.querySelector("#emailerror")
  let errpassword=document.querySelector("#passworderror")
 
   if(inpname==""){
      errname.innerHTML="Please Enter Name"
      let naminput=document.querySelector("#nameinput")
        naminput.style.border="1px solid black"
        errname.style.color="red"
      return false;
  }
  if(inpnumber==""){
    errname.innerHTML=""
     errnumber.innerHTML="Please Enter Number"
     let numinput=document.querySelector("#numberinput")
      numinput.style.border="1px solid black"
    errnumber.style.color="red"
      return false;
  }
  if(inpemail==""){
    errnumber.innerHTML=""
     erremail.innerHTML="Please Enter E-mail"
    let mailinput=document.querySelector("#emailinput")
    mailinput.style.border="1px solid black"
    erremail.style.color="red"
     return false;
  }
  if(inppass==""){
    erremail.innerHTML=""
    errpassword.innerHTML="Please Enter Password"
   let passinput=document.querySelector("#inputpassword")
        passinput.style.border="1px solid black"
    errpassword.style.color="red"
     return false;
  }
  
  else if(!(inpemail.includes(".com") && inpemail.includes('@'))){
    erremail.innerHTML="Please Enter valid E-mail @,.com"
    erremail.style.color="brown"
    return false;
  }
  
  else if(isNaN(inpnumber)){
      errnumber.innerHTML="please enter only number"
      errnumber.style.color="red"
      return false;
   }
   else if(inpnumber.length!==10){
      errnumber.innerHTML="Enter 10 digit"
      errnumber.style.color="red"
      return false;
   }
  
      localStorage.setItem("name",inpname)
      localStorage.setItem("number",inpnumber)
      localStorage.setItem("email",inpemail)
      localStorage.setItem("pass",inppass)
      
      
       location.href="login.html"
       return false;
  }

