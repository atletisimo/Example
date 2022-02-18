let num=parseInt(prompt("Vnesi pozitiven cel broj:"));
let flag=true;

if(num===1){
    document.write("Nitu prost nitu slozen");
}
else if(num>1){
    for(let i=2;i<num;i++){
        if(num%i==0){
            flag=false;
            break;
        }
    }
if(flag){
    document.write(`${num} e prost broj`);

}
else{
    document.write(`${num} ne e  prost broj`);
}
}