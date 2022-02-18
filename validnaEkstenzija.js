let filename = prompt("Vnesete ime na dokument");

function validnaEkstenzija(str) {
  let pozicija = str.indexOf(".")+1;
  let ekstenzija = str.slice(pozicija);
  let validniFormati = ["doc","html","css","ptt","txt","odt","java","py","cpp","mp4"]
  if(validniFormati.includes(ekstenzija)){
  	return 'Ekstenzijata e validna'
  }else {
  	return 'Nevalidna ekstenzija'
  }
}

let result = validnaEkstenzija(filename);
document.write(result);