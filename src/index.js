const NUMBERS_TABLE = {
   '1': 'one',
   '2': 'two',
   '3': 'three',
   '4': 'four',
   '5': 'five',
   '6': 'six',
   '7': 'seven',
   '8': 'eight',
   '9': 'nine',
   '10': 'ten',
   '11': 'eleven',
   '12': 'twelve',
   '13': 'thirteen',
   '14': 'fourteen',
   '15': 'fifteen',
   '16': 'sixteen',
   '17': 'seventeen',
   '18': 'eighteen',
   '19': 'nineteen',
   '20': 'twenty',
   '30': 'thirty',
   '40': 'forty',
   '50': 'fifty',
   '60': 'sixty', 
   '70': 'seventy',
   '80': 'eighty',
   '90': 'ninety',
   '100': 'hundred'
 };
 

function toReadable(number) {
  if (number === 0) {
    return 'zero';
  } else if (number < 20) {
    return NUMBERS_TABLE[`${number}`];
  } else if (number % 10 === 0 && number >= 20 && number < 100) {
    return NUMBERS_TABLE[`${number}`];
  } else if (number % 100 === 0 && number >= 100) {
    return `${NUMBERS_TABLE[`${Math.floor(number / 100) < 2 ? 1 : Math.floor(number / 100)}`]} hundred`;
  } else {
    let result = '';
 
    if (number >= 100) {
      result += `${NUMBERS_TABLE[`${Math.floor(number / 100)}`]} hundred `; 
    }

    if (number % 100 > 0) {
      if (number % 100 <= 20) {
        result += NUMBERS_TABLE[`${number % 100}`];
      } else {
        result += NUMBERS_TABLE[`${Math.floor (number % 100 / 10) * 10}`];

        if (number % 10 > 0) {
          result += ` ${NUMBERS_TABLE[`${number % 10}`]}`;
        }
      }
    }

    return result;
  }
}

console.log(toReadable(919));

module.exports = toReadable;

/* 
    // const hundred = Math.floor(number / 100);
    // const dozen = Math.floor(((number % (hundred * 100)) / 10)) * 10;
    // const unit = number % (hundred * 100) - dozen;

    // const hundred = Math.floor(number / 100) > 0 ? Math.floor(number / 100) : 0;
    // const dozen = hundred > 0 ? Math.floor(((number % (hundred * 100)) / 10)) * 10 : Math.floor(number / 10) * 10;
    // // const unit = hundred > 0 ? (number % (hundred * 100)) - dozen : 0;
    // const unit = dozen > 20 ? (number % (hundred * 100)) - dozen : 0;


    // result += hundred ? `${NUMBERS_TABLE[`${hundred}`]} hundred ` : ''; 
    // result += dozen + unit < 20 ? NUMBERS_TABLE[`${dozen + unit}`] : NUMBERS_TABLE[`${dozen}`];
    // if (hundred > 0) {
    //   result += unit > 0 ? ` ${NUMBERS_TABLE[`${unit}`]}` : ''; 
    // }

    // let hundred = 0,
    //       dozen = 0,
    //       unit = 0;

    // if (number >= 100) {
    //   hundred = Math.floor(number / 100);
    //   dozen = Math.floor((number % (hundred * 100)) / 10) * 10;
    //   unit = (number % (hundred * 100)) - dozen > 0 && dozen > 20 ? (number % (hundred * 100)) - dozen : 0;

    //   result += `${NUMBERS_TABLE[`${hundred}`]} hundred `;
    //   result += dozen + unit < 29 ? NUMBERS_TABLE[`${dozen + unit}`] : NUMBERS_TABLE[`${dozen}`];
    //   result += unit > 0 ? ` ${NUMBERS_TABLE[`${unit}`]}` : '';
    // } 
    // else {
    //   dozen = Math.floor(number / 10) * 10;
    //   unit = number - dozen > 0 ? number - dozen : 0;

    //   result = 
    // }

*/