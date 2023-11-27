let root=document.querySelector(".root")
let con=document.querySelector(".con");
let image=document.querySelector(".image");
let next=document.querySelector(".next");
let pre=document.querySelector(".previous");

// con.addEventListener("wheel",(evt)=>{
//     evt.preventDefault();
//     con.scrollLeft+=evt.deltaY;
// });

next.addEventListener("click",()=>{
    con.scrollLeft+=900;
});
pre.addEventListener("click",()=>{
    con.scrollLeft-=900;
});
