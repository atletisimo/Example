const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");



//document.getElementById("btn").addEventListener("click",function (){
//grandparent.innerHTML="HELLO ELEMENT"  ;
//})

document.getElementById("btn").addEventListener("click",myFunction);

function myFunction(){
    grandparent.innerHTML="<strong>Hello element</strong>";

}