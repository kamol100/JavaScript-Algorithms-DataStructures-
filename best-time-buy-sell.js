function maxProfit(arr){
     let maxProfit = 0;
     let buy = 0;
     let sell = 1;
     while(sell < arr.length){
        if(arr[sell] > arr[buy]){
            profit = arr[sell] - arr[buy];
            maxProfit = Math.max(profit, maxProfit)
        }else{
            buy = sell
        }
        sell++;
     }
     return maxProfit;
}


console.log(maxProfit([7,1,8,5,3,6,4]))