function even_or_odd(number) {
  console.log( number % 2 === 0 ? 'Even' : 'Odd' );

  return number % 2 === 0 ? 'Even' : 'Odd';
}


even_or_odd(10);
even_or_odd(11);
even_or_odd(1);
even_or_odd(2);

// Test.assertEquals(even_or_odd(2), "Even")
// Test.assertEquals(even_or_odd(0), "Even")
// Test.assertEquals(even_or_odd(7), "Odd")
// Test.assertEquals(even_or_odd(1), "Odd")