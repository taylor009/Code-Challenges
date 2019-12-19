let height = [1,8,6,2,5,4,8,3,7];

const maxArea = height => {
    let largestArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        if (area > largestArea) {
            largestArea = area;
        }
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return largestArea;
};

maxArea(height);