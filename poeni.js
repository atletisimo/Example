/* [91-100] 10ka
[81-90] 9ka
[71-80] 8ka
[61-70] 7ka
[5-60] 6ka
[0-50] Ne e polozen*/

let poeni=prompt("Vnesi poeni:");
if (poeni >= 0 && poeni <= 50){
    document.write("Ne e polozen");
}
else if (poeni > 50 && poeni <= 60){
    document.write("6ka");
}
else if (poeni > 60 && poeni <= 70){
    document.write("7ca");

}

else if (poeni > 70 && poeni <= 80){
    document.write("8ca");
}
else if (poeni > 80 && poeni <= 90){
    document.write("9ka");}

    else if (poeni > 90 && poeni <= 100){
        document.write("10ka");
    } 
    else{
   document.write ("Ne validen vlez");}