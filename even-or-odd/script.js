function findOdd(array) {

  var obj = {};

  for (var i = 0; i < array.length; i++) {
    if (obj[array[i]] === undefined) {
      obj[array[i]] = '';
    }

    obj[array[i]] += array[i] + ' ';

  }

  for (var i in obj) {
    console.log(obj[i].trim().split(' '));

    if ( obj[i].trim().split(' ').length % 2 === 1 ) {

      console.log(i);

      return i * 1;
    }
  }
}

findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]); // 10
// findOdd([5,4,3,2,1,5,4,3,2,10,10]); // 1
// findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]); // 5