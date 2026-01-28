
// let displaydata= async()=>{
//     let url= "http://localhost:3000/carrentall"
//     let replay= await fetch(url,{method:"GET"})
//     let store= await replay.json()
//     console.log(store);

//     pagination(store)

// }
// let searchh= async()=>{
//     let inpp=document.querySelector("#inp").value.toLowerCase()
//     let url= "http://localhost:3000/carrentall"
//     let replay= await fetch(url,{method:"GET"})
//     let store= await replay.json()

//     let filterdata= store.filter((e)=>{
//         return e.name.toLowerCase().includes(inpp)
//     })
//     pagination(filterdata)
   

// }


// let pagination=(store)=>{
//      $('#pagin').pagination({
//         dataSource: store,
//         pageSize: 5,
//         showGoInput: true,
//         showGoButton: true,
//         callback: function(store, pagination) {
//             seedata(store)
//         }
//     })
// }

// let seedata=(store)=>{
//     let see=document.querySelector("#showme")
//     see.innerHTML=""
//     store.map((e)=>{
//         see.innerHTML+=
//         `
//        <tr id="element">
//          <td id="nme">${e.name}</td>
//          <td>${e.mobile}</td>
//          <td>${e.aadhhar}</td>
//          <td>${e.licence}</td>
//           <td>${e.pickdate}</td>
//          <td>${e.dropedate}</td>
//          <td>${e.desti}</td>
//          <td>${e.location}</td>
//          <td>${e.car}</td>
//          <td>${e.price}</td>
//          <td onclick="suree('${e.id}')">Cancel</td>
//          <td onclick="editt('${e.id}')">Update</td>

//       </tr>
//         `

//     })
// }

// //===============================================delete(sure) funtion====================================================================

// let suree=(id)=>{
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//       }).then((result) => {
//         if (result.isConfirmed) {
//             remove(id)
//           Swal.fire({
//             title: "Deleted!",
//             text: "Your file has been deleted.",
//             icon: "success"
//           });
//         }
//       });
//  }
// //=================================================(REMOVE) function================================================================

// let remove=(id)=>{
//     let url=`http://localhost:3000/carrentall/${id}`;
//     fetch(url,{method:"DELETE"});

// }

// //================================================(FULLFILL{FORM}) FUNCTION=============================================================================================


// let fill=()=>{

//     let fillname=document.querySelector("#name").value
//     let fillnumber=document.querySelector("#mobile").value
//      let fillaadhhar=document.querySelector("#aadhhar").value
//      let filllicence=document.querySelector("#licence").value
//      let fillpickdate=document.querySelector("#pickdate").value
//      let filldate=document.querySelector("#dropedate").value
//      let filldesti=document.querySelector("#desti").value
//      let filllocation=document.querySelector("#location").value
//      let fillcar=document.querySelector("#car").value



//     let errname=document.querySelector("#name")
//      let errnumber=document.querySelector("#mobile")
//      let erraadhhar=document.querySelector("#aadhhar")
//      let errlicence=document.querySelector("#licence")
//      let errpickdate=document.querySelector("#pickdate")
//      let errdate=document.querySelector("#dropedate")


//      let errdesti=document.querySelector("#errordesti")
//      let errlocation=document.querySelector("#errorlocation")
//      let errcar=document.querySelector("#errorcar")


//     if(fillname==""){
  
//         errname.style.border="3px solid red"
//         errname.placeholder=" Enter The Name"
//         errname.style.color="red"
//         return false;
//         }

    
    
//      if(fillnumber==""){
//          errnumber.style.border="3px solid red" 
//          errnumber.placeholder=" Enter The Age" 
//          errnumber.style.color="red" 
//           return false;
//     }

//     if(fillaadhhar==""){
  
//           erraadhhar.style.border="3px solid red"
//           erraadhhar.placeholder=" Enter The Aadhhar"
//            erraadhhar.style.color="red"
//           return false;
//    }
   
//     if(filllicence==""){
  
//         errlicence.style.border="3px solid red"
//          errlicence.placeholder=" Enter The Licence-Number"
//          errlicence.style.color="red"
//          return false;
//     }
//     if(fillpickdate==""){
  
//         errpickdate.style.border="3px solid red"
//         errpickdate.placeholder=" Enter The Age"
//         errpickdate.style.color="red"
//         return false;
// }
//      if(filldate==""){
  
//          errdate.style.border="3px solid red"
//          errdate.placeholder=" Enter The Destination"
//          errdate.style.color="red"
//          return false;
//     }
//     if(filldesti==""){
  
//         errdesti.style.border="3px solid red"
//         errdesti.innerHTML=" Enter The Destination"
//         errdesti.style.color="red"
//         return false;
//    }

//     if(filllocation==""){
  
//         errlocation.style.border="3px solid red"
//         errlocation.innerHTML=" Enter The Location"
//         errlocation.style.color="red"
//         return false;
//    }

//    if(fillcar==""){
  
//     errcar.style.border="3px solid red"
//     errcar.innerHTML=" Choose Car type"
//     errcar.style.color="red"
//     return false;
//   }
//   else if(fillnumber.length!==10){
//     errnumber.innerHTML="Enter 10 digit"
//     errnumber.style.color="red"
//     return false;
//  }
// else if(fillaadhhar.length!==12){
//     erraadhhar.placeholder="Enter 12 digit"
//     erraadhhar.style.color="red"
//     return false;
//  }
//  else if(filllicence.length!==16){
//     errlicence.placeholder="Enter valid digit Number"
//     errlicence.style.color="red"
//     return false;
//  }
 

//  let url='http://localhost:3000/carrentall'
//  fetch(url,{
//     method:"POST",

//     headers:{
//         "Content-type":"application/json"
//     },

//     body:JSON.stringify(
//         {
//             "name":fillname,
//             "mobile":fillnumber,
//             "aadhhar":fillaadhhar,
//             "licence":filllicence,
//             "pickdate":fillpickdate,
//             "dropedate":filldate,
//             "desti":filldesti,
//             "location":filllocation,
//             "car":fillcar,
//             "price":900
//         }
//     )
//  })
//  location.href="booktbl.html"
//  return false

// }

// let editt= async(id)=>{
//     let url=`http://localhost:3000/carrentall/${id}`
//     let replay= await fetch(url,{method:"GET"})
//     let store=await replay.json()
//     console.log(store);


//     let datastore=`

//     <center>
//         <form id="form2">
                         
    
//                  <input type="text"  placeholder="Enter-Name" id="uppname" value="${store.name}"><br><br>
//                  <input type="number"  placeholder="Mobile-number "  id="uppmoblie" value="${store.mobile}"><br><br>
//                  <input type="number"  placeholder="Aadhhar-number"  id="uppaadhhar" value="${store.aadhhar}"><br><br>
//                  <input type="number"  placeholder="driving-licence"  id="upplicence" value="${store.licence}"><br><br>
//                   <input type="date"  placeholder="date-pickup"  id="upppickdate" value="${store.pickdate}"><br><br>
//                  <input type="date" placeholder="Date" id="uppdropedate" value="${store.dropedate}"><br><br>
//                  <p id="errordesti"></p>
//                  Destination:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select  id="uppdesti">
//                     <option value="bhopal">Bhopal</option>
//                     <option value="indore">Indore</option>
//                     <option value="pune">Pune</option>
//                     <option value="delhi">Delhi</option>
//                     <option value="betul">Betul</option>
//                 </select><br><br>
//                  <p id="errorlocation"></p>
//                 Location:  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select  id="upplocation">
//                     <option value="bhopal">Bhopal</option>
//                     <option value="indore">Indore</option>
//                     <option value="pune">Pune</option>
//                     <option value="delhi">Delhi</option>
//                     <option value="betul">Betul</option>
//                 </select><br><br>
//                 <p id="errorcar"></p>
//                 Car type:  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select  id="uppcar">
//                     <option value="AUDI">audi</option>
//                     <option value="KIA">kia</option>
//                     <option value="LUXURY">luxury</option>
//                     <option value="TOYOTA">toyota</option>
//                     <option value="BMW">bmw</option>
//                 </select><br><br>
    
//                 <input type="submit" value="Update" onclick="return fullfill('${store.id}')" id="submit">
//        </form>
    
//     </center>
//  `
//  document.querySelector("#data1").innerHTML=datastore


// }

// let fullfill=(id)=>{

//     let fillname=document.querySelector("#uppname").value
//     let fillnumber=document.querySelector("#uppmoblie").value
//      let fillaadhhar=document.querySelector("#uppaadhhar").value
//      let filllicence=document.querySelector("#upplicence").value
//      let fillpickdate=document.querySelector("#upppickdate").value
//      let filldate=document.querySelector("#uppdropedate").value
//      let filldesti=document.querySelector("#uppdesti").value
//      let filllocation=document.querySelector("#upplocation").value
//      let fillcar=document.querySelector("#uppcar").value

//      let url=`http://localhost:3000/carrentall/${id}`

//      fetch(url,{
//         method:"PUT",

//         headers:{
//             "Content-type":"application/json"
//         },

//         body:JSON.stringify(
//             {
//                 "name":fillname,
//                 "mobile":fillnumber,
//                 "aadhhar":fillaadhhar,
//                 "licence":filllicence,
//                 "pickdate":fillpickdate,
//                 "dropedate":filldate,
//                 "desti":filldesti,
//                 "location":filllocation,
//                 "car":fillcar,
//                 "price":900
//             }
//         )
//      })
//      return false;

// }




let displaydata= async()=>{
    let url= "http://localhost:3000/carrentall"
    let replay= await fetch(url,{method:"GET"})
    let store= await replay.json()
    console.log(store);

    pagination(store)

}
let searchh= async()=>{
    let inpp=document.querySelector("#inp").value.toLowerCase()
    let url= "http://localhost:3000/carrentall"
    let replay= await fetch(url,{method:"GET"})
    let store= await replay.json()

    let filterdata= store.filter((e)=>{
        return e.name.toLowerCase().includes(inpp)
    })
    pagination(filterdata)
   

}


let pagination=(store)=>{
     $('#pagin').pagination({
        dataSource: store,
        pageSize: 5,
        showGoInput: true,
        showGoButton: true,
        callback: function(store, pagination) {
            seedata(store)
        }
    })
}

let seedata=(store)=>{
    let see=document.querySelector("#showme")
    see.innerHTML=""
    store.map((e)=>{
        see.innerHTML+=
        `
       <tr id="element">
         <td id="nme">${e.name}</td>
         <td>${e.mobile}</td>
         <td>${e.aadhhar}</td>
         <td>${e.licence}</td>
          <td>${e.pickdate}</td>
         <td>${e.dropedate}</td>
         <td>${e.desti}</td>
         <td>${e.location}</td>
         <td>${e.car}</td>
         <td>${e.price}</td>
         <td onclick="suree('${e.id}')">Cancel</td>
         <td onclick="editt('${e.id}')">Update</td>

      </tr>
        `

    })
}

//===============================================delete(sure) funtion====================================================================

let suree=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            remove(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
 }
//=================================================(REMOVE) function================================================================

let remove=(id)=>{
    let url=`http://localhost:3000/carrentall/${id}`;
    fetch(url,{method:"DELETE"});

}

//================================================(FULLFILL{FORM}) FUNCTION=============================================================================================


let fill=()=>{

    let fillname=document.querySelector("#name").value
    let fillnumber=document.querySelector("#mobile").value
     let fillaadhhar=document.querySelector("#aadhhar").value
     let filllicence=document.querySelector("#licence").value
     let fillpickdate=document.querySelector("#pickdate").value
     let filldate=document.querySelector("#dropedate").value
     let filldesti=document.querySelector("#desti").value
     let filllocation=document.querySelector("#location").value
     let fillcar=document.querySelector("#car").value



    let errname=document.querySelector("#name")
     let errnumber=document.querySelector("#mobile")
     let erraadhhar=document.querySelector("#aadhhar")
     let errlicence=document.querySelector("#licence")
     let errpickdate=document.querySelector("#pickdate")
     let errdate=document.querySelector("#dropedate")


     let errdesti=document.querySelector("#errordesti")
     let errlocation=document.querySelector("#errorlocation")
     let errcar=document.querySelector("#errorcar")


    if(fillname==""){
  
        errname.style.border="3px solid red"
        errname.placeholder=" Enter The Name"
        errname.style.color="red"
        return false;
        }

    
    
     if(fillnumber==""){
         errnumber.style.border="3px solid red" 
         errnumber.placeholder=" Enter The Age" 
         errnumber.style.color="red" 
          return false;
    }

    if(fillaadhhar==""){
  
          erraadhhar.style.border="3px solid red"
          erraadhhar.placeholder=" Enter The Aadhhar"
           erraadhhar.style.color="red"
          return false;
   }
   
    if(filllicence==""){
  
        errlicence.style.border="3px solid red"
         errlicence.placeholder=" Enter The Licence-Number"
         errlicence.style.color="red"
         return false;
    }
    if(fillpickdate==""){
  
        errpickdate.style.border="3px solid red"
        errpickdate.placeholder=" Enter The Age"
        errpickdate.style.color="red"
        return false;
}
     if(filldate==""){
  
         errdate.style.border="3px solid red"
         errdate.placeholder=" Enter The Destination"
         errdate.style.color="red"
         return false;
    }
    if(filldesti==""){
  
        errdesti.style.border="3px solid red"
        errdesti.innerHTML=" Enter The Destination"
        errdesti.style.color="red"
        return false;
   }

    if(filllocation==""){
  
        errlocation.style.border="3px solid red"
        errlocation.innerHTML=" Enter The Location"
        errlocation.style.color="red"
        return false;
   }

   if(fillcar==""){
  
    errcar.style.border="3px solid red"
    errcar.innerHTML=" Choose Car type"
    errcar.style.color="red"
    return false;
  }
  else if(fillnumber.length!==10){
    errnumber.innerHTML="Enter 10 digit"
    errnumber.style.color="red"
    return false;
 }
else if(fillaadhhar.length!==12){
    erraadhhar.placeholder="Enter 12 digit"
    erraadhhar.style.color="red"
    return false;
 }
 else if(filllicence.length!==16){
    errlicence.placeholder="Enter valid digit Number"
    errlicence.style.color="red"
    return false;
 }
 

 let url='http://localhost:3000/carrentall'
 fetch(url,{
    method:"POST",

    headers:{
        "Content-type":"application/json"
    },

    body:JSON.stringify(
        {
            "name":fillname,
            "mobile":fillnumber,
            "aadhhar":fillaadhhar,
            "licence":filllicence,
            "pickdate":fillpickdate,
            "dropedate":filldate,
            "desti":filldesti,
            "location":filllocation,
            "car":fillcar,
            "price":900
        }
    )
 })
 location.href="booktbl.html"
 return false

}

let editt= async(id)=>{
    let url=`http://localhost:3000/carrentall/${id}`
    let replay= await fetch(url,{method:"GET"})
    let store=await replay.json()
    console.log(store);


    let datastore=`

    <center>
        <form id="form2">
                         
    
                 <input type="text"  placeholder="Enter-Name" id="uppname" value="${store.name}"><br><br>
                 <input type="number"  placeholder="Mobile-number "  id="uppmoblie" value="${store.mobile}"><br><br>
                 <input type="number"  placeholder="Aadhhar-number"  id="uppaadhhar" value="${store.aadhhar}"><br><br>
                 <input type="number"  placeholder="driving-licence"  id="upplicence" value="${store.licence}"><br><br>
                  <input type="date"  placeholder="date-pickup"  id="upppickdate" value="${store.pickdate}"><br><br>
                 <input type="date" placeholder="Date" id="uppdropedate" value="${store.dropedate}"><br><br>
                 <p id="errordesti"></p>
                 Destination:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select  id="uppdesti">
                    <option value="bhopal">Bhopal</option>
                    <option value="indore">Indore</option>
                    <option value="pune">Pune</option>
                    <option value="delhi">Delhi</option>
                    <option value="betul">Betul</option>
                </select><br><br>
                 <p id="errorlocation"></p>
                Location:  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select  id="upplocation">
                    <option value="bhopal">Bhopal</option>
                    <option value="indore">Indore</option>
                    <option value="pune">Pune</option>
                    <option value="delhi">Delhi</option>
                    <option value="betul">Betul</option>
                </select><br><br>
                <p id="errorcar"></p>
                Car type:  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select  id="uppcar">
                    <option value="AUDI">audi</option>
                    <option value="KIA">kia</option>
                    <option value="LUXURY">luxury</option>
                    <option value="TOYOTA">toyota</option>
                    <option value="BMW">bmw</option>
                </select><br><br>
    
                <input type="submit" value="Update" onclick="return fullfill('${store.id}')" id="submit">
       </form>
    
    </center>
 `
 document.querySelector("#data1").innerHTML=datastore


}

let fullfill=(id)=>{

    let fillname=document.querySelector("#uppname").value
    let fillnumber=document.querySelector("#uppmoblie").value
     let fillaadhhar=document.querySelector("#uppaadhhar").value
     let filllicence=document.querySelector("#upplicence").value
     let fillpickdate=document.querySelector("#upppickdate").value
     let filldate=document.querySelector("#uppdropedate").value
     let filldesti=document.querySelector("#uppdesti").value
     let filllocation=document.querySelector("#upplocation").value
     let fillcar=document.querySelector("#uppcar").value

     let url=`http://localhost:3000/carrentall/${id}`

     fetch(url,{
        method:"PUT",

        headers:{
            "Content-type":"application/json"
        },

        body:JSON.stringify(
            {
                "name":fillname,
                "mobile":fillnumber,
                "aadhhar":fillaadhhar,
                "licence":filllicence,
                "pickdate":fillpickdate,
                "dropedate":filldate,
                "desti":filldesti,
                "location":filllocation,
                "car":fillcar,
                "price":900
            }
        )
     })
     return false;

}



