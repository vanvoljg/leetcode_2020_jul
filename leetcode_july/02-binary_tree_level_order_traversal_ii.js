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

class QueueNode {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = this.front;
    this.length = 0;
  }

  // Add to back
  push(val) {
    const node = new QueueNode(val);
    if (this.length === 0) {
      this.front = node;
      this.back = this.front;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.length++;
  }

  // Remove from front
  shift() {
    if (this.length > 0) {
      const node = this.front;
      this.front = this.front.next;
      this.length--;
      return node.val;
    } else {
      return undefined;
    }
  }

  // Return front value
  peek() {
    return this.front !== null ? this.front.val : undefined;
  }
}
