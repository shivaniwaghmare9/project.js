
let sub=()=>{


let inpname=document.querySelector("#nameinput").value
let inpnumber=document.querySelector("#numberinput").value
let inpemail=document.querySelector("#emailinput").value
let inppassword=document.querySelector("#inputpassword").value
let inpcorpass=document.querySelector("#confirmpassinput").value


let errname=document.querySelector("#nameerror")
let errnumber=document.querySelector("#numbererror")
let erremail=document.querySelector("#emailerror")
let errpassword=document.querySelector("#passworderror")
let errcorpass=document.querySelector("#conpasserror")


if(inpname==""){
    errname.innerHTML="Please Enter Name"
    let naminput=document.querySelector("#nameinput")
      naminput.style.border="1px solid red"
      errname.style.color="red"
    return false;
}
if(inpnumber==""){
  errname.innerHTML=""
   errnumber.innerHTML="Please Enter Number"
   let numinput=document.querySelector("#numberinput")
    numinput.style.border="1px solid red"
  errnumber.style.color="red"
    return false;
}
if(inpemail==""){
  errnumber.innerHTML=""
   erremail.innerHTML="Please Enter E-mail"
  let mailinput=document.querySelector("#emailinput")
  mailinput.style.border="1px solid red"
  erremail.style.color="red"
   return false;
}
if(inppassword==""){
  erremail.innerHTML=""
  errpassword.innerHTML="Please Enter Password"
 let passinput=document.querySelector("#inputpassword")
      passinput.style.border="1px solid red"
  errpassword.style.color="red"
   return false;
}

if(inpcorpass==""){
  errpassword.innerHTML=""
  errcorpass.innerHTML="Please Enter Confirm Password"
  let coninput=document.querySelector("#confirmpassinput")
  coninput.style.border="1px solid red"
  errcorpass.style.color="red"
  return false;
}
else if(inppassword!==inpcorpass){
    
    errcorpass.innerHTML="password does not match please enter the correct password"
    errcorpass.style.color="brown"
    document.querySelector("#confirmpassinput").value=""
    document.querySelector("#confirmpassinput").focus()
    
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

 else if(!(inppassword.match([/123456789/])  && inppassword.match([/!@#$%^&*><.,/])&& inppassword.match([/a-z/]))){
  errpassword.innerHTML="Please Enter Strong Password Write dots,symbols,number,alpha"
  errpassword.style.color="red"
  return false;
}



}