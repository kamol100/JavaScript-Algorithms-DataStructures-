let arr = [5, 4, 4, 2, 2, 8];

function cutTheSticks(arr){
    let len = [];
   
    function cut(filters){
         let min = Math.min(...filters);
    len.push(filters.length);   
    let i = 0;
    while(i < filters.length){
        let reduse = filters[i] - min;
        filters[i] = reduse;
        i++;
      }
     filters = filters.filter((item)=>{
         return item > 0;
     });
     if(filters.length === 0){
         return;
     }
        cut(filters);
    }
    cut(arr);
    return len;
}
cutTheSticks(arr);