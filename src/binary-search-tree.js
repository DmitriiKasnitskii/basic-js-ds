const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data)
    {
      if (node.left === null) {
        node.left = newNode;
      }
      else {
        this.insertNode(node.left, newNode);
      }
    }
    else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right,newNode);
      }
    }
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      const tmp = this.findMinNode(node.right);
      node.data = tmp.data;

      node.right = this.removeNode(node.right, tmp.data);
      return node;
    }
  }

  searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  findMaxNode(node) {
    if (node.right === null) {
      return node;
    }
    else {
      return this.findMaxNode(node.right);
    }
  }

  root() {
    return this.head;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.head === null)
      this.head = newNode;
    else
      this.insertNode(this.head, newNode);
  }

  has(data) {
    return this.searchNode(this.head, data) !== null;
  }

  find(data) {
    return this.searchNode(this.head, data)
  }

  remove(data) {
    this.removeNode(this.head, data);
  }

  min() {
    return this.findMinNode(this.head).data;
  }

  max() {
    return this.findMaxNode(this.head).data;
  }
}

module.exports = {
  BinarySearchTree
};