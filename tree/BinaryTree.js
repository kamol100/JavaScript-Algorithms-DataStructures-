"use strict";
class BNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let newNode = new BNode(data);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        else {
            let current = this.root;
            while (data !== current.data) {
                if (data < current.data) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
                else if (data > current.data) {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    DFSPreOrder() {
        let current = this.root;
        let data = [];
        function traverse(current) {
            data.push(current.data);
            if (current.left)
                traverse(current.left);
            if (current.right)
                traverse(current.right);
        }
        traverse(current);
        return data;
    }
}
let bst = new BinaryTree();
bst.insert(1);
bst.insert(2);
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(6);
console.log(bst);
