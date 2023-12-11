
let intRate = 0.15
let cashFlow = [1000,2000,3000,4000]


function npv(i,t){
  let arr = []
 
    
    for(let x = 1; x <= t; x++){
        arr.push((1+i)**-x)
    }
    let fill = arr.map(x=> x.toFixed(4) )
    return fill
    
}
console.log(npv(0.15,5))
