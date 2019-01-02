function accum(s) {
  var array = s.split('');
  var count = 1;
  var result = '';

  for (var i = 0; i < array.length; i++) {
    var currentChar = array[i].toLowerCase();

    for (var j = 0; j < i; j++) {
      array[i] += currentChar;
    }

    array[i] = array[i].split('');
    array[i][0] = array[i][0].toUpperCase();

    if (i < array.length - 1) {
      array[i].push('-');
    }

    array[i] = array[i].join('')
  }

  result = array.join('');

  console.log(array);
  console.log(result);

  return result;
}

// Переделать с помощью .repeat()

accum('ZpglnRxqenU');