function mergeSrot(arr){
    if(arr.length <= 1){
        return arr;
    }
     let mid = Math.floor(arr.length/2); 
     let left = mergeSrot(arr.slice(0,mid));
     let right = mergeSrot(arr.slice(mid, arr.length));
   return  merge(left, right);
}

function merge(arr1, arr2){
     let result = [];
     let l = 0;
     let r = 0;
     while( l < arr1.length && r < arr2.length){
           if(arr1[l] < arr2[r]){
              result.push(arr1[l]);
              l++;
           }
           if(arr2[r] < arr1[l]){
            result.push(arr2[r])
            r++;
           }

     }
     while(l < arr1.length){
        result.push(arr1[l]);
        l++;
     }
     while(r < arr2.length){
        result.push(arr2[r]);
        r++;
     }
     return result;
}

console.log(mergeSrot([6,5,12,10,9,1]))