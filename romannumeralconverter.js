function convertToRoman(num) {
  // TEST IF NUMBER
  if (isNaN(num)) {
    return 'Please ENTER A NUMBER';
  }

  // CREATE A ROMAN OBJECT FOR CONVERSION
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanStr = '';

  for (let key of Object.keys(roman)) {
    let x = Math.floor(num / roman[key]);
    num -= x * roman[key];
    romanStr += key.repeat(x);
  }

  return romanStr;
}

console.log(convertToRoman(36));
