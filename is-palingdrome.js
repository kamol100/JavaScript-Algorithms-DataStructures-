function isPalingdrom(str){
   // str.toLowerCase();
  let str2 = ''; 
  for(let i = 0; i < str.length; i++){
    if(str[i].match(/[a-z]/i)){
        str2 += str[i].toLowerCase();
    }

  } 
  let str3 = '';
  for(let j = str2.length-1; j >= 0; j-- ){
      str3 += str2[j];
  }
return str2 === str3 ? true :false;
}

console.log(isPalingdrom("A man, a plan, a canal: 55 Panama"))