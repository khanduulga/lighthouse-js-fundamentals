function range(start, end, step){
  let newArray = []
  if(typeof start !== 'undefined' && typeof end !== 'undefined' && typeof step !== 'undefined'){
    if(start > end || step <= 0) {
      return newArray;
    } else {
      while(start <= end) {
        newArray.push(start);
        start += step;
      }
      return newArray;
    }
  } else {
    return newArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0,10,-1));
console.log(range(10,5,2));
console.log(range('undefined',5,1))
