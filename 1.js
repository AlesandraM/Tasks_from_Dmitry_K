class ChangingStrings {
  constructor(string) {
    this.string = string;
  }

  lowerСase() {
    let str = '';
    let b = this.string.split('');
    for (let i = 0; i < b.length; i++) {
      if(i == 0) {
        b[i] = b[i].toUpperCase();
      } else {
        b[i] = b[i].toLowerCase();
      }
      str += b[i];
    }
    return str;
  }
  
  space() {
    let string = this.string.split('.').join('. ');
    string = string.replace('.', '. ');
    string = string.split(' .').join('. ');
    string = string.split(',').join(', ');
    string = string.split(' ,').join(', ');
    let str = string.replace(/\s+/g, ' ');

    return str;
  }

  wordCount() {
    let arr = this.string.split(' ');
    let num = arr.length; 

    return num;
  }

  uniqueWord() {
    let string = this.string.toLowerCase();
    let words = string.split(" ");
    let wordsCount = words.reduce(function (arr, i) {
      if(arr[i]) {
        arr[i] += 1
      } else {
        arr[i] = 1;
      }
 
  return arr; }, {});
  
  let str = '';
  for (let i in wordsCount) str += (i + ' - ' + wordsCount[w] + ' раз, ');

  return str;
  }
}