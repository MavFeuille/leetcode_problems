const lengthOfLongestSubString = (s) => {
  // Initialize placeholders to store the running characters and longest length
  let arr = [];
  let longestLength = 0;

  // Loop through the provided string
  for (let i = 0; i < s.length; i ++) {
    // Get the current character's position in newString
    const currentCharacterPosition = arr.indexOf(s[i]);

    // Check if current character exists in incoming string
    if (currentCharacterPosition !== -1) {
      // Chop off the array after the occurrence of the character
      arr.splice(0, currentCharacterPosition + 1);
    }
    // Add the current character to the newString
    arr.push(s[i]);
    // Store the current string length if bigger than the existing record
    longestLength = Math.max(longestLength, arr.length);
  }
  return longestLength;
}

console.log(lengthOfLongestSubString("abcabcbb"));
console.log(lengthOfLongestSubString("bbbbb"));
console.log(lengthOfLongestSubString("pwwkew"));
