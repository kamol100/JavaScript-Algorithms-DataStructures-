function anagram(str1, str2){
   let obj = {}; 
   if (str1.length !== str2.length) return false;
   for(let i = 0; i < str1.length; i++){
       if(str1[i] in obj){
           obj[str1[i]]++
       }else{
        obj[str1[i]] = 1
       }
   }
   for(let j = 0; j < str2.length; j++){
    if(str2[j] in obj && obj[str2[j]] > 0){
        obj[str2[j]] --;
    }else{
        return false;
    }
   }
   return true;
}
let an = anagram("anagram", "nagaram");
console.log(an)