
  // Write your algorithm here
  function reverseString(word) {
    // TODO: implement string reversing functionality
    let letterOfWords = word.split('') // ['k','u','d']
    word = [...letterOfWords].reverse() // ['d','u','k']
    return word;
  }
  
  function isPalindrome(word) {
    // reverse the input string
   
    const reversedWord = reverseString(word);
    // if the reversed string is the same as the 
    for(let i = 0; i < word.length; i++){
      if(word[i] === reversedWord[i]){
        return true
      }
      else return false;
      
    }
  }

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
