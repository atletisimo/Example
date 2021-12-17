let frutas=["manzana","platano","para"];
//for (let i=0;i<frutas.length;i++){
    //document.write(i);//gi pecati indeksite
  //  document.write(frutas[i]+ ",");
let ime="Tamara";
//for of za elementite vo nizata
for(let fruta of frutas){//funkcionira samo za stringovi i arrays tie se ,objeto literal =objeto cuyas propiedades estan declaradas textualmente en el codigo
    document.write(fruta+ ",");//manzana,platano,para,

}
//for(let bukva of ime){
 //   document.write(bukva)//celoto ime ke go pecati
//}
for (let i=0;i<ime.length;i++) {
    document.write("<br>"+ime[i]);//bukva po bukva
}
//for in za indeksi
for(let a in ime){
    document.write(a);//indeksite ke gi pecati
    document.write(ime);//ke go pecati imeto kolku sto ima indeksi
}