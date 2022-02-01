const body=document.body;
//body.append("Hello World","Bye");
//if we use appendChild we cant add string thats the difference
//i kaj appendChild samo 1 rabota moze da se dodade
//KREIRAME ELEMENTI
const div=document.createElement('div');
//sega treba da go dodademe vo nasiot html code
body.innerText="Hello Tamara";
body.append(div);

document.querySelector("div")

//da kreirame element koj ke bide boldiran
const boldiran=document.createElement("p");
boldiran.innerHTML="<strong>Element koj go kreiravme da bide boldiran</strong>"
body.append(boldiran);