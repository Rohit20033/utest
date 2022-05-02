// write js code here corresponding to matches.html  

var masaidata=JSON.parse(localStorage.getItem("schedule"))||[]

displaydata(masaidata)
  
function changebyvenue(){

var value= document.querySelector("#filterVenue").value

 var fliter= masaidata.filter(function(ele){
     
     return  ele.venuee==value
     
 })
  displaydata(fliter)
}


var arroffav=JSON.parse(localStorage.getItem("favourites"))||[]
function displaydata(data){
 document.querySelector("tbody").innerHTML=""
   data.forEach(function(ele){

     
       
      var tr= document.createElement("tr")

      var td1 = document.createElement("td")
      td1.innerText=ele.matchno
      var td2 = document.createElement("td")
      td2.innerText=ele.teama
      var td3 = document.createElement("td")
      td3.innerText=ele.teamb
      var td4 = document.createElement("td")
      td4.innerText=ele.datee
      var td5 = document.createElement("td")
      td5.innerText=ele.venuee
      var td6 = document.createElement("td")
      td6.innerText="Add as Favourites"
      td6.style.color="green"
      td6.style.cursor="pointer"
      td6.addEventListener("click",function(){

         addtofav(ele)
      })
      function addtofav(ele){
           arroffav.push(ele)
         localStorage.setItem("favourites",JSON.stringify(arroffav))
      }

      

      tr.append(td1,td2,td3,td4,td5,td6)
      document.querySelector("tbody").append(tr)
   })
}