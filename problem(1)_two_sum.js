const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      console.log(nums.indexof(i+1, i))
    }
  }
}

console.log(twoSum([2,7,11,15]),9)