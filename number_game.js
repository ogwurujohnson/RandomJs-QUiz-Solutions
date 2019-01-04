function number_game(x, y){
  let numbers = [];

  if (x > y){
    for (let i = y; i < x; i++){
      if (i > y){
        numbers.push(i);
      }
    }
  }else{
    for (let i = x; i < y; i++){
      if (i > x){
        numbers.push(i);
    }
  }
}

  const result = numbers.filter(function(num){
    return x > y ? num % 2 === 0: num % 2 === 1;
  });
  return result;
}

console.log(number_game(12,2));