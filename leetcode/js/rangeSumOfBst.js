/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function (root, low, high) {
    let sum = 0;

    const traverse =node => {
        // Check to see if node exists
        if(!node) {
            return;
        }
        // Check node value if it's in value range
        if(node.val >= low && node.val <= high) {
            sum += node.val;
        }
        // Move to next nodes
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return sum;
};