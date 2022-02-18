var arr=[1,2,3];
arr2=[...arr,5,...arr];
document.write(arr2);//1,2,3,5,1,2,3
document.write("<br>"+arr);
arr2.splice(0,2)//menuva sodrzina na dadena niza,ne kreira nova tuku na dadenata 
//od nulta pozicija da izbriseme 2 elementi
document.write("<br>"+arr2);
arr3=[1,2,3,4,5,6,7,8,9,10];
arr3.splice(2,4,"Nina");
document.write("<br>"+arr3);//1,2,Nina,7,8,9,10
document.write("<br>"+arr3.indexOf("Nina"));//2

document.write("<br>"+arr3.slice(1,4));
document.write("<br>"+arr3.join("-"));

document.write("<br>"+arr3.find(element=>element>4));

