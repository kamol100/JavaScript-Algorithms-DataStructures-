function withoutRepeatingCharacter(str, k){
      count = {};
      let l = 0;
      let res = 0
      let maxFrequency = 0;
      for(let i = 0 ; i < str.length; i++){
        if(str[i] in count){
            count[str[i]]++
        }else{
            count[str[i]] = 1
        }
        // console.log(count, Math.max(...Object.values(count)));
         maxFrequency = Math.max(maxFrequency, count[str[i]]);
        if((i-l + 1) - maxFrequency > k){
            count[str[l]]--;
            l++
        }
        res = Math.max(res, i-l+1);
      }

      return res;
}

console.log(withoutRepeatingCharacter("AABABBA",1))