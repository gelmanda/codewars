function getCount(str) {
  var vowelsCount = 0;
  var array = str.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  console.log(array);

  for (var i = 0; i < array.length; i++) {
    if ( vowels.indexOf( array[i] ) >= 0 ) {
      vowelsCount++;
    }
  }

  console.log( vowelsCount );

  return vowelsCount;
}

getCount('abracadabra'); // 5

// --------------
// Best Practices
// --------------

function getCount(str) {
  // return (str.match(/[aeiou]/ig)||[]).length;
}