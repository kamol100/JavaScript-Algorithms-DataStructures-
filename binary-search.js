function binarySearch(arr, item){
       let l = 0;
       let r = arr.length -1;
       while(l < r){
        let mid = (r+l) / 2;
          if(item === arr[mid]){
            return mid;
          }
          if (item > arr[mid]){
            l = mid + 1;
          }
          if( item < arr[mid]){
            r = mid - 1;
          }
       }
}

console.log(binarySearch([1,3,4,5,6,8,10], 5))