const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// create trees for testing

    let bstRoot;
    let bstRootBig;
    let bstRootUnbalanced;
    let btRoot;
    let btRootBig;
    let btRootUnbalanced;
    let rootNode;
    let rootNodeUnbalanced;

    //      4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7
    bstRoot = new TreeNode(4);
    bstRoot.left = new TreeNode(2);
    bstRoot.left.left = new TreeNode(1);
    bstRoot.left.right = new TreeNode(3);
    bstRoot.right = new TreeNode(6);
    bstRoot.right.left = new TreeNode(5);
    bstRoot.right.right = new TreeNode(7);

    //         8
    //       /   \
    //      3     10
    //    /   \     \
    //   2     5     11
    //  /    /  \     \
    // 1    4    7    12
    //          /      \
    //         6       15
    //                /
    //              14
    bstRootBig = new TreeNode(8);
    bstRootBig.left = new TreeNode(3);
    bstRootBig.left.left = new TreeNode(2);
    bstRootBig.left.left.left = new TreeNode(1);
    bstRootBig.left.right = new TreeNode(5);
    bstRootBig.left.right.left = new TreeNode(4);
    bstRootBig.left.right.right = new TreeNode(7);
    bstRootBig.left.right.right.left = new TreeNode(6);
    bstRootBig.right = new TreeNode(10);
    bstRootBig.right.right = new TreeNode(11);
    bstRootBig.right.right.right = new TreeNode(12);
    bstRootBig.right.right.right.right = new TreeNode(15);
    bstRootBig.right.right.right.right.left = new TreeNode(14);

    // 1
    //  \
    //   2
    //    \
    //     3
    //      \
    //       4
    //        \
    //         5
    //          \
    //           6
    //            \
    //             7
    bstRootUnbalanced = new TreeNode(1);
    bstRootUnbalanced.right = new TreeNode(2);
    bstRootUnbalanced.right.right = new TreeNode(3);
    bstRootUnbalanced.right.right.right = new TreeNode(4);
    bstRootUnbalanced.right.right.right.right = new TreeNode(5);
    bstRootUnbalanced.right.right.right.right.right = new TreeNode(6);
    bstRootUnbalanced.right.right.right.right.right.right = new TreeNode(7);

    //      1
    //    /   \
    //   2     3
    //  / \   / \
    // 4   5 6   7
    btRoot = new TreeNode(1);
    btRoot.left = new TreeNode(2);
    btRoot.left.left = new TreeNode(4);
    btRoot.left.right = new TreeNode(5);
    btRoot.right = new TreeNode(3);
    btRoot.right.left = new TreeNode(6);
    btRoot.right.right = new TreeNode(7);

    //        13
    //       /  \
    //      2    3
    //    /  \    \
    //   4    5    6
    //  /    / \    \
    // 7    8   9   10
    //         /     \
    //        11     12
    //              /
    //             1
    btRootBig = new TreeNode(13);
    btRootBig.left = new TreeNode(2);
    btRootBig.right = new TreeNode(3);
    btRootBig.left.left = new TreeNode(4);
    btRootBig.left.right = new TreeNode(5);
    btRootBig.right.right = new TreeNode(6);
    btRootBig.left.left.left = new TreeNode(7);
    btRootBig.left.right.left = new TreeNode(8);
    btRootBig.left.right.right = new TreeNode(9);
    btRootBig.right.right.right = new TreeNode(10);
    btRootBig.left.right.right.left = new TreeNode(11);
    btRootBig.right.right.right.right = new TreeNode(12);
    btRootBig.right.right.right.right.left = new TreeNode(1);

    // 4
    //  \
    //   3
    //    \
    //     2
    //      \
    //       1
    //        \
    //         7
    //          \
    //           6
    //            \
    //             5
    btRootUnbalanced = new TreeNode(4);
    btRootUnbalanced.right = new TreeNode(3);
    btRootUnbalanced.right.right = new TreeNode(2);
    btRootUnbalanced.right.right.right = new TreeNode(1);
    btRootUnbalanced.right.right.right.right = new TreeNode(7);
    btRootUnbalanced.right.right.right.right.right = new TreeNode(6);
    btRootUnbalanced.right.right.right.right.right.right = new TreeNode(5);


// Practice problems on binary trees

function findMinBST (rootNode) {
    if(rootNode.left) {    // if there is a left node, traverse <--
        rootNode = rootNode.left;
        return findMinBST(rootNode);
    }
    return rootNode.val;
}

function findMaxBST (rootNode) {    // O(log n) search
    if(rootNode.right) {    // if there is a right node, traverse -->
        return findMaxBST(rootNode.right);
    }
    return rootNode.val;  // when we reach the leaf, return the leaf's value
}

// different from searching BST because it is not ordered,
// must traverse (visit every node) \/ -- O(n) search
function findMinBT (rootNode) {
    let min = rootNode.val;
    // traverse every node and keep track of min value
    if(rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
    if(rootNode.right) min = Math.min(min, findMinBT(rootNode.right));

    return min;
}

function findMaxBT (rootNode) {
    let max = rootNode.val;

    if(rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));
    if(rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));

    return max;
}

// RECURSIVE SOLUTION
// function getHeight (rootNode) {
//     // edge case - empty tree
//     if(!rootNode) return -1;
//     // edge case - root node w no branches
//     if (!rootNode.left && !rootNode.right) return 0;
//     // if there is a left or right node, return that level + recurse while counting the taller side
//     return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
// }

// BREADTH FIRST (DEQUEUE) SOLUTION - ask help
function getHeight (rootNode) {
    const queue = [rootNode];   // start with root
    let levels = 0;
    if(!rootNode) return -1;

    // dequeue an entire row at a time, and enqueue any of their children
    while(queue.length) {
        // print and remove node (print optional)
        let node = queue.shift();   // remove first item in queue
        // if(!node.left && !node.right) return 0;
        console.log(node.val);

        if(node.left) {   // if left node exists, add to queue (back of line)
            queue.push(node.left);
        }   // if right node exists, add to queue (back of line)
        if(node.right) {
            queue.push(node.right);
        }
        // only count once per level jump
        if(node.left || node.right) levels++;
    }
    return levels;
}

// local
console.log(bstRoot);
console.log(getHeight(null)) // -1
console.log(getHeight(bstRoot.right.right)) // 0
console.log(getHeight(bstRoot)); // 2
console.log(getHeight(bstRoot.left)) // 1
console.log(getHeight(bstRootUnbalanced.right)) // 5
console.log(getHeight(bstRootBig.left)) // 3
console.log(getHeight(bstRootBig.right)) // 4

console.log(getHeight(btRoot.left)) // 1
console.log(getHeight(btRootUnbalanced.right)) // 5
console.log(getHeight(btRootBig.left)) // 3
console.log(getHeight(btRootBig.right)) // 4



// let num = 100;
// let char = num.toString();
// console.log(char);
// let arr = char.split('');
// console.log(arr);
// console.log(arr.length);

function balancedTree (rootNode) {

}

function countNodes (rootNode) {   // depth first traversal - pop()
    const stack = [rootNode];   // start with root
    let nodes = 1;
    if(!rootNode) return -1;

    while(stack.length) {
        // print and remove node (print optional)
        let node = stack.pop();   // remove last item in stack
        console.log(node.val);

        // when doing depth / pop, add right first so left pops off first
        if(node.right) {
            stack.push(node.right);
            nodes++;
        }
        if(node.left) {   // if left node exists, push to end / top of stack
            stack.push(node.left);
            nodes++;
        }   // if right node exists, push to end / top of stack
    }
    return nodes;
}

// local testing
// // should return the number of nodes in a Binary Tree
// console.log(countNodes(bstRoot)) // 7)
// console.log(countNodes(bstRootUnbalanced)) // 7)
// console.log(countNodes(bstRootBig)) // 13;
// // should work on a subtree
// console.log(countNodes(btRoot)) // 7)
// console.log(countNodes(btRootUnbalanced)) // 7)
// console.log(countNodes(btRootBig)) // 13;


function getParentNode (rootNode, target) {

}

function inOrderPredecessor (rootNode, target) {
    let curr = rootNode;
    let stack = [];
    let pred = null;

    // while(true) {   // must put return or break statement inside to stop loop

    //     if(curr) {
    //         stack.push(curr);
    //         curr = curr.left;
    //     } else if(!curr && stack.length) {
    //         curr = stack.pop();
    //     }

    // }
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}


module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
