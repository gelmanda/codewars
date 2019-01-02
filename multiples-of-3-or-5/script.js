// 10 => 23

function solution(number){
  var result = 0;

  for (var i = 0; i < number; i++) {

    if (i % 3 === 0) {
      result += i;
    }

    if (i % 5 === 0 && i % 3 !== 0) {
      result += i;
    }
  }

  console.log(result);
  return result;
}


solution(10);