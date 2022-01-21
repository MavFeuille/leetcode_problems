const lengthOfLongestSubString = (s) => {
  let split = s.split('');
  // console.log("🚀 ~ file: problem3_longest_substring_without_repeating_characters.js ~ line 3 ~ lengthOfLongestSubString ~ split", split)
  let newArr = [];
  for (let i = 0; i < split.length; i++) {
    if (split[i] !== split[i + 1]) {
      newArr.push(split[i])
    }
    console.log("newArr: ", newArr);
  }

}

console.log(lengthOfLongestSubString("abcabcbb"));