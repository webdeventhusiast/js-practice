let isPalindrome = (str) => {
  str = str.toLowerCase();
  str = str.replace(/\W/g, '');
  let strArray = [];
  let strReverseArray = [];
  
  strArray = str.split('');
  //strReverseArray = strArray.reverse();
  
  //console.log(strArray);
  //console.log(strReverseArray);
  
  
  /*
  for (let j = 0; j < strArray.length; j++) {
    if (strArray[j] == ' ' || strArray[j] == '_' || strArray[j] == "," || strArray[j] == "." || strArray[j] == "-") {
      let myArr = strArray.splice(strArray.indexOf(strArray[j]), 1);
      console.log(strArray.length + "| " + strArray[j] + "| " + strArray.indexOf(strArray[j]) + "; j - " + j);
      //console.log(j);
      //console.log(strArray.indexOf(strArray[j]) + " - " + myArr);
    }
  }
  */
  
  let newArray = [];
  
  for (let a = 0; a < strArray.length; a++) {
    if (strArray[a] != '_') {
      newArray.push(strArray[a]);
    }
  }
  //sconsole.log(newArray);
  //console.log(strArray);
  
  for (let i = 0; i < newArray.length; i++) {
    //console.log(newArray[newArray.length - 1 - i] + " - " + newArray[i])
    if (newArray[i] !== newArray[newArray.length - 1 - i]){
      return false;
    }

  }
  
  return true;
}

/*
console.log(isPalindrome("eye"));
console.log(isPalindrome("nope"));
*/

//console.log(isPalindrome("not a palindrome"));
//console.log(isPalindrome("never odd or even"));
//console.log(isPalindrome("0_0 (: /-\ :) 0-0"));


console.log(isPalindrome("eye"));
console.log(isPalindrome("_eye"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("not a palindrome"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("never odd or even"));
console.log(isPalindrome("nope"));
console.log(isPalindrome("almostomla"));
console.log(isPalindrome("My age is 0, 0 si ega ym."));
console.log(isPalindrome("1 eye for of 1 eye."));
console.log(isPalindrome("0_0 (: /-\ :) 0-0"));
console.log(isPalindrome("five|\_/|four"));


/*

palindrome("eye")should return a boolean.
palindrome("eye")should return true.
palindrome("_eye")should return true.
palindrome("race car")should return true.
palindrome("not a palindrome")should return false.
palindrome("A man, a plan, a canal. Panama")should return true.
palindrome("never odd or even")should return true.
palindrome("nope")should return false.
palindrome("almostomla")should return false.
palindrome("My age is 0, 0 si ega ym.")should return true.
palindrome("1 eye for of 1 eye.")should return false.
palindrome("0_0 (: /-\ :) 0-0")should return true.
palindrome("five|\_/|four")should return false.

*/