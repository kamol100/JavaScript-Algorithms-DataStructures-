function callPorint(opt){
    let res = [];
   // console.log(opt);
    for(let i = 0; i < opt.length; i++){
       if(opt[i] === "C"){
        res.pop();
       }else if(opt[i] === "D"){
         let score = res[res.length-1] * 2;
         res[res.length-1] = score;
       }else if(opt[i] === "+"){
           let scor = res[res.length-1] + parseInt(opt[i])
           res.push(scor)
       }else{
        res.push(res.push(parseInt(opt[i])))
       }
    console.log(res)
    }
    return res;
}

console.log(callPorint(["5", "2", "C", "D", "+"]))