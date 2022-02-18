function vowel(str){
	let vowels = ["a","e","i","o","u"];
  let brVowel=0;
  for(let i=0; i<str.length;i++){
    if(vowels.includes(str[i])){
    	brVowel++;
    }
  }
  return brVowel;
}

document.write(vowel("Makedonija"));

