function containeMostWater(arr){
    res = 0;
    l = 0;
    r = arr.length -1;
    while(l < r){
        let area = (r - l) * Math.min(arr[l], arr[r]);
        res = Math.max(area, res);
        if(arr[r] > arr[l]){
            l++;
        }else{
            r--;
        }
    }
    return res;
}
console.log(containeMostWater([1,8,6,2,5,4,8,3,7]))

function containeMostWaterBruteForce(arr){
     res = 0;
     for(let i = 0; i < arr.length; i++){
        for(j = 1; j < arr.length; j++){
            min = Math.min(arr[i], arr[j]);
            temp = (j -i) * min;
            res = Math.max(res, temp);
        }
     }
     return res;
}

console.log(containeMostWaterBruteForce([1,8,6,2,5,4,8,3,7]))