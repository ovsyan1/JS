// function areArraysSame(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1.length !== arr2.length) {
//             return false
//         }
//         for (let k = 0; k < arr2.length; k++) {
//             if (arr1[i] === arr2[k]) {
//                 return true
//             } else return false
//         }
//     }
// }
// console.log(areArraysSame([1, 2, 3], [2, 3, 5]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]))
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4, 5, 6]));
// function evenLast(numbers) {
//     //   if(numbers == ''){
//     //     return 0 
//     //   }
//       let sum = 0;
//        let lastIndex = numbers.pop();
//       for(let i = 0; i < numbers.length;i++){
//         sum += numbers[i]
//       }
//       return sum *= lastIndex
//     }
//    console.log(evenLast([5,4,3,2]))
var words = [
  'javascript',
  'monkey',
  'amazing',
  'pancake'
];
var word = words[Math.floor(Math.random() * words.length)];
console.log(word)
var answerArray = [];
for(let i = 0; i < word.length;i++){
  answerArray[i] = '_';
}
var remainingLetters = word.length;
while(remainingLetters > 0){
  alert(answerArray.join(' '))
  var guess = prompt('Guess a letter, or click Cancel to stop playnig.');
  if(guess === null){
    break;
  }else if(guess.length !== 1){
    alert('Please enter a single letter.')
  }else{
    for(var j =  0;j < word.length;j++){
      if(word[j] == guess.toLowerCase()){
        answerArray[j] = guess.toLowerCase();
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(' '));
alert('Good job! The answer was ' + word);