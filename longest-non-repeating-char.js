function lengthOfLongestSubstring(str){

    if(str.length == 0){
        return 0;
    }
    if(str.length == 1){
        return 1;
    }
    let map = [];
    let long = 0;
    for(let i = 0; i < str.length; i++){
         while (map.includes(str[i])){
            map.shift();
         }
         map.push(str[i]);
         if (map.length > long){
            long = map.length;
         }
    }
    return long;
}


console.log(lengthOfLongestSubstring("abcabcbb"))