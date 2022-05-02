// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",collectinfo)
  
function collectinfo(){
  event.preventDefault();

 
 var arr=JSON.parse(localStorage.getItem("schedule"))||[]

 console.log("yes")

 var obj={

      matchno: masaiForm.matchNum.value,
      teama : masaiForm.teamA.value,
      teamb :masaiForm.teamB.value,
      datee : masaiForm.date.value,
      venuee: masaiForm.venue.value,
 }
 arr.push(obj)
 console.log(arr)
 localStorage.setItem("schedule",JSON.stringify(arr))
}