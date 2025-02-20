

let sub=()=>{

    let inpmail=document.querySelector("#mail").value
    let inppassword=document.querySelector("#password").value
   
    // let erremail=document.querySelector("#emailerror")
    // let errpassword=document.querySelector("#passerror")
    
    // if(inpmail==""){
        
    //      erremail.innerHTML="Please Enter E-mail"
    //     // let mailinput=document.querySelector("#email")
    //     // mailinput.style.border="1px solid red"
    //     erremail.style.color="red"
    //      return false;
    //   }
    //   if(inppassword==""){
    //     erremail.innerHTML=""
    //     errpassword.innerHTML="Please Enter Password"
    // //    let passinput=document.querySelector("#pass")
    // //         passinput.style.border="1px solid red"
    //     errpassword.style.color="red"
    //      return false;
    //   }
      
    //  else if(!(inpmail.includes(".com") && inpmail.includes('@'))){
    //     erremail.innerHTML="Please Enter valid E-mail @,.com"
    //     erremail.style.color="brown"
    //     return false;
    //   }


     let localemail= localStorage.getItem("email",inpmail)
      let localpass=localStorage.getItem("pass",inppassword)

      if(inpmail==localemail && inppassword==localpass){
        location.href="index.html"
    }
    else {
        alert("invalid Email or password")
       // errorpass.innerHTML="invalid "
}
    return false;
    
      
      
}