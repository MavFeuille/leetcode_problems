const twoSum = (nums, target) => {
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       console.log([i, j])
  //       return [i, j];
  //     }
  //   }
  // }

  let numObject = {};
  
  for (let i = 0; i < nums.length; i ++) {
   let anotherNum = target - nums[i];
   if (numObject[anotherNum] !== undefined) {
     return [numObject[anotherNum], i];
   }
   numObject[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15]),9)
