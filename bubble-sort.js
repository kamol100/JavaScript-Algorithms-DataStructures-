function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        let swap = false;
        for(let j = 0; j < i-1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = true;
            }
        }
        if(!swap){
            break;
        }
            console.log("one pass");
    }
    return arr;

}

console.log(bubbleSort([2,45,0,11,9]))