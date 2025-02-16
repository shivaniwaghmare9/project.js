

let sub=()=>{



let inpmail=document.querySelector("#inpemail").value
let inppassword=document.querySelector("#inppass").value
let inpcorpass=document.querySelector("#cnfpass").value

let erremail=document.querySelector("#emailerror")
let errpassword=document.querySelector("#passerror")
let errcorpass=document.querySelector("#cnferror")


if(inpmail==""){
    
     erremail.innerHTML="Please Enter E-mail"
    let mailinput=document.querySelector("#inpemail")
    mailinput.style.border="1px solid red"
    erremail.style.color="red"
     return false;
  }
  if(inppassword==""){
    erremail.innerHTML=""
    errpassword.innerHTML="Please Enter Password"
   let passinput=document.querySelector("#inppass")
        passinput.style.border="1px solid red"
    errpassword.style.color="red"
     return false;
  }
  
  if(inpcorpass==""){
    errpassword.innerHTML=""
    errcorpass.innerHTML="Please Enter Confirm Password"
    let coninput=document.querySelector("#cnfpass")
    coninput.style.border="1px solid red"
    errcorpass.style.color="red"
    return false;
  }
  else if(inppassword!==inpcorpass){
      
      errcorpass.innerHTML="password does not match please enter the correct password"
      errcorpass.style.color="brown"
      document.querySelector("#cnfpass").value=""
      document.querySelector("#cnfpass").focus()
      
      return false;
  }
  
  else if(!(inpmail.includes(".com") && inpmail.includes('@'))){
    erremail.innerHTML="Please Enter valid E-mail @,.com"
    erremail.style.color="brown"
    return false;
  }
  



}