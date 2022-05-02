// write js code here corresponding to favourites.html

var favdata=JSON.parse(localStorage.getItem("favourites"))||[]

displaydata(favdata)


function displaydata(data){
  
   data.forEach(function(ele,index){

     
       
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
      td6.innerText="DeLETE"
      td6.style.color="red"
      td6.style.cursor="pointer"
      td6.addEventListener("click",function(){

         delefav(ele,index)
      })
      var arrofdele=[]
      function delefav(ele,index){
          arrofdele.push(ele)
          arrofdele.splice(index,1)
          window.location.reload();
          

           
       //   localStorage.setItem("favourites",JSON.stringify(arroffav))
      }

      

      tr.append(td1,td2,td3,td4,td5,td6)
      document.querySelector("tbody").append(tr)
   })
}