var a = prompt('wpisz a');
var b = prompt('wpisz b');
var value = (a * a) + (2 * a * b) - (b * b);

console.log('Wynik działania (a * a) + (2 * a * b) - (b * b) wynosi: ' + value);
console.log(value === 0 ? 'Wynik 0' : (value > 0 ? 'Dodatni' : 'Ujemny' ));