// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

const sortColors = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1]) {
      let temp = nums[i+1];
      nums[i+1] = nums[i];
      nums[i] = temp;
    }
    if (nums[i] < nums[i-1]) {
      let temp = nums[i];
      nums[i] = nums[i-1];
      nums[i-1] = temp;
      i = i-2
    }
  }
}