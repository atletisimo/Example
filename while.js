const frutas=[];
const fruta=prompt("Koe ovosje sakate da go kupite?");
//ova fruta ne e isto so toa vo prompt bidejki vleguva vo for
frutas.push(fruta)

while(confirm("Sakate da dodadete drugo ovosje vo kosnickata?")){
    const fruta=prompt("Ke ovosje sakate da go kupite?");
    frutas.push(fruta)
}

document.write(" Kupivte:");
for(const fruta of frutas){
    document.write(fruta+",");

}