// Test.assertEquals(getMiddle("test"),"es");
// Test.assertEquals(getMiddle("testing"),"t");
// Test.assertEquals(getMiddle("middle"),"dd");
// Test.assertEquals(getMiddle("A"),"A");

function getMiddle(s) {
  var stringLength = s.length;
  var midleChar = stringLength / 2;

  if (stringLength % 2 === 0) {
    console.log( s.substring( midleChar - 1, midleChar + 1) );

    return s.substring( midleChar - 1, midleChar + 1);

  } else {
    console.log( s.substring( midleChar, midleChar + 1) );

    return s.substring( midleChar, midleChar + 1);
  }

}

getMiddle('test');
getMiddle('testing');
getMiddle('middle');
getMiddle('A');