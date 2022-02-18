var a=["Carlos","Caesar","Alex","Manuel"];
document.write("Tiene "+a.length+" elementos"+"<br>");
document.write(a.push("Fernando","Luis","Pablo")+"<br>");//dodava elementi na kraj
a.pop();//go brise posledniot element
var b=["Nina","Anna","Hanna"];
var c=a.concat(b);
document.write(c+"<br>");//Carlos,Caesar,Alex,Manuel,Fernando,Nina,Anna,Hanna
document.write(a.join(" : "));
document.write("<br>"+c.join(" : "));
var ordenados=a.sort();
document.write("<br>"+ordenados+"<br>");
document.write("<br>"+ordenados.shift());

var datum=2511996;
var den=Math.round(datum/100000%100);
var mesec=Math.floor((datum/1000)%100);
var godina=Math.round(datum%1000);
document.write("<br>"+den+"<br>");
document.write("<br>"+mesec+"<br>");
document.write("<br>"+godina+"<br>");

