// const isLetter = (c) => c.toLowerCase() !== c.toUpperCase();
// let letters = [...str].filter(c => isLetter(c));
// let reversed = [...str].map((c) => isLetter(c) ? letters.pop() : c).join('');
function rev(s){
    let letters = [...s].filter(c =>{
      return !/[^a-zA-Z]/.test(c)
    }).reverse();
    
    [...s].filter((c, i) =>{
      if(/[^a-zA-Z]/.test(c)){
        letters.splice(i, 0, c)
      }
    });

    return letters.join('');
}

//console.log(rev("ab-cd"))
//console.log(rev("jz*<Z"))
console.log(rev("a-bC-dEf=ghlj!!"))