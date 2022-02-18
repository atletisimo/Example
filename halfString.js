function polaString(str){

  let pola=Math.ceil(str.length/2);
  return str.slice(0,pola);
}

a=prompt();
document.write(polaString(a));