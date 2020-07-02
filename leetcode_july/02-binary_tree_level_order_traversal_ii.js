'use strict';

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
 * @return {number[][]}
 */
const levelOrderBottom = (root) => {
  let ret = [];
  if (root === null) return ret;
  let q = new Queue();
  q.push([root, 0]);
  while (q.peek() !== undefined) {
    const [cur, depth] = q.shift();
    if (cur !== null) {
      q.push([cur.left, depth + 1]);
      q.push([cur.right, depth + 1]);
      if (!ret[depth]) ret[depth] = [];
      ret[depth].push(cur.val);
    }
  }
  return ret.reverse();
};
