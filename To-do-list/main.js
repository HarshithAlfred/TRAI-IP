
function handle(){

const enter=document.querySelector(".enter");
const textu=document.querySelector(".textu");
const hello=document.querySelector(".hello");
const list=document.getElementById("list");
const valv=textu.value
  if(valv===""){alert("type in characters")
  }
  else {
   

  let li=document.createElement("li");
  li.innerHTML=valv;
  savedata();
  list.appendChild(li);
  textu.value="";
  savedata();
  let span=document.createElement("span");
  span.innerHTML="\u00d7";
  li.append(span);
  list.addEventListener("click",function(e){
   
   if (e.target.tagName ==="LI"){
      e.target.classList.toggle("check");
      savedata();
   }
   else if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
      savedata();
    }
  });}}
  function savedata(){
   localStorage.setItem('data',list.innerHTML);
  }
  function showtask(){
   list.innerHTML=localStorage.getItem('data');
  }
  showtask();





