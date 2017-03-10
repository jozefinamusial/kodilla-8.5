var a = 1,
    b = 3,
    value;
    
value = (a * a) + (2 * a * b) - (b * b);

console.log('Wynik działania (a * a) + (2 * a * b) - (b * b) wynosi: ' + value);

if (value > 0) {
  console.log('Wynik jest dodatni');
} else if (value < 0) {
  console.log('Wynik jest ujemny');
}
if (value == 0) {
  console.log('WYnik jest rowny zero');
} else {
  console.log('Wynik nie jest rowny zero');
}