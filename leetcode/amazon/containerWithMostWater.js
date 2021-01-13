/**
 *
 * @param height
 *
 * O(n) time | space O(n) - where n is the length of the array.
 */
const maxArea = (height) => {
    let result = 0,
        left = 0,
        right = height.length - 1;

    while(left < right) {
        let smallestSide = Math.min(height[left], height[right]);
        let area = (right - left) * smallestSide;

        if(area > result){
            result = area;
        }
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};