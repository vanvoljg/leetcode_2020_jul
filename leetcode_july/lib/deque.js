export class QueueNode {
  constructor(val = null) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class Queue {
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
      node.prev = this.back;
      this.back.next = node;
      this.back = node;
    }
    this.length++;
  }

  // Add to front
  unshift(val) {
    const node = new QueueNode(val);
    if (this.length === 0) {
      this.back = node;
      this.front = this.back;
    } else {
      node.next = this.front;
      this.front.prev = node;
      this.front = node;
    }
    this.length++;
  }

  // Remove from front
  shift() {
    if (this.front) {
      const node = this.front;
      this.front = this.front.next;
      this.front.prev = null;
      this.length--;
      return node.val;
    } else {
      return undefined;
    }
  }

  // Remove from back
  pop() {
    if (this.back) {
      const node = this.back;
      this.back = this.back.prev;
      this.back.next = null;
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

  // Return back value
  peekTail() {
    return this.back !== null ? this.back.val : undefined;
  }
}
