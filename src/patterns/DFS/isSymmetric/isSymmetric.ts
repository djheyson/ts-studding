import { TreeNode } from "../../binarySearch/TreeNode";

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
 * @return {boolean}
 */
export const isSymmetric = function (root: TreeNode): boolean {
  if (!root) return false;

  const dfs = (nodeLeft: TreeNode, nodeRight: TreeNode): boolean => {
    if (!nodeLeft && !nodeRight) return true;
    if (!nodeLeft || !nodeRight || nodeLeft.val !== nodeRight.val) return false;

    return (
      dfs(nodeLeft.left, nodeRight.right) && dfs(nodeLeft.right, nodeRight.left)
    );
  };

  return dfs(root.left, root.right);
};
