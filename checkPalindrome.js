// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.

"acbaa"

function checkPalindrome(check){
  if (check.length <= 1){
    return true;
  }
  for (var i=0; i<=(check.length/2); i++){
      if(check[i] != check[check.length-1-i]){
        return false;
      }
    }
  return true;
}
checkPalindrome("aabaa");