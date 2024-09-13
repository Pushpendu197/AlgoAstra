const COMPARISON = {
    EQUAL: 0,
    SMALLER: -1,
    GREATER: 1,
}

const defaultCompareNumberFn = (a, b) => {
    if (Number(a) == Number(b)) {
        return COMPARISON.EQUAL;
    }

    return Number(a) < Number(b) ? COMPARISON.SMALLER : COMPARISON.GREATER;
};

// ...................................................................................................................
class TreeNode {
    constructor(value, parent) {
        this.value = value.toString();
        this.parent = parent || null
        this.left = null
        this.right = null
    }
    get isLeaf() {
        return this.left === null && this.right === null;
    }
    get hasChildren() {
        return !this.isLeaf
    }

}

class BinarySearchTree {
    root;
    compareFn;
    constructor(compareFn = defaultCompareNumberFn) {
        this.root = null;
        this.compareFn = compareFn;
    }

    insert(value) {
        let node = this.root;
        let insertedNode;
        if (node === null) {
            this.root = new TreeNode(value);
            return this.root
        }

        const nodeInserted = (() => {
            while (true) {
                const comparison = this.compareFn(value, node.value);
                if (comparison === COMPARISON.EQUAL) {
                    insertedNode = node;
                    return node;
                }

                if (comparison === COMPARISON.SMALLER) {
                    if (node.left === null) {
                        insertedNode = new TreeNode(value, node);
                        node.left = insertedNode;
                        return true
                    }
                    node = node.left
                }
                else if (comparison === COMPARISON.GREATER) {
                    if (node.right === null) {
                        insertedNode = new TreeNode(value, node);
                        node.right = insertedNode;
                        return true
                    }
                    node = node.right
                }
            }
        })();
        if (nodeInserted) {
            return insertedNode;
        }

    }

    remove(value, node) {
        // First line: Ensure node is defined, either as passed in or by searching for it.
        // Second line: Return null if node is not found.
        // Third line: Determine if node is the root of the tree.
        // Fourth line: Check if node has both left and right children.
        // Fifth line: Check if node is the left child of its parent(only if it's not the root)


        node = node ? node : this.search(value);
        if (!node) return null;

        // nodeIsRoot: Checks if the node is the root of the tree(i.e., it has no parent).
        // hasBothChildren: Checks if the node has both left and right children.
        // isLeftChild: Checks if the node is the left child of its parent(only relevant if the node is not the root).
        const nodeIsRoot = node.parent === null;
        const hasBothChildren = node.left !== null && node.right !== null;
        const isLeftChild = !nodeIsRoot ? node.parent.left === node : false;


        if (node.leaf) {
            if (nodeIsRoot) {
                this.root = null;
            }
            else if (isLeftChild) {
                node.parent.left = null;
            }
            else {
                node.parent.right = null;
            }
            return node
        }

        // HANDLE NODE WITH ONE CHILDREN .............

        // If the node has only one child:
        // The child is identified as either the left or right child.
        // If the node is the root, the child becomes the new root of the tree.
        // If the node is a left child, the parent's left pointer is updated to point to the child.
        // If the node is a right child, the parent's right pointer is updated to point to the child.
        // The child's parent pointer is updated to point to the node's parent.
        // The method returns the removed node.

        if (!hasBothChildren) {
            const child = node.left !== null ? node.left : node.right;

            if (nodeIsRoot) {
                this.root = child;
            }
            else if (isLeftChild) {
                node.parent.left = child;
            }
            else {
                node.parent.right = child;
            }
            child.parent = node.parent;
            return node
        }


        // HANDLE NODE WITH TWO CHILDREN ........................

        // If the node has two children:
        // The method finds the smallest node in the right subtree(minRightLeaf) using a min method.
        // This smallest node is either a leaf or has no left child, so it is removed by setting its parent's appropriate pointer to null.
        // The value of the node to be removed is replaced with the value of minRightLeaf.
        // The method creates a clone of the original node before the value is replaced, which is returned to indicate the removal.

        const minRightLeaf = this.min(node.right);
        if (minRightLeaf.parent.left === this.minRightLeaf) {
            minRightLeaf.parent.left = null;

        }
        else {
            minRightLeaf.parent.right = null;
        }
        const clone = { ...node };
        node.value = minRightLeaf.value;
        return clone
    }


    // .......................................................................................................................
    search(value) {
        return this.postOrderTraverse().find((node) => node.value === value);
    }
    // ........................................................................................................................
    min(node = this.root) {
        let current = node;
        while (current !== null && current.left !== null) {
            current = current.left
        }
        return current
    }

    max(node = this.root) {
        let current = node;
        while (current !== null && currect.right !== null) {
            current = current.right
        }
        return current
    }
    // ...................................................................................................................
    // Inorder => Left, Root, Right.

    // Preorder => Root, Left, Right.

    // Post order => Left, Right, Root.

    inOrderTraverse(node = this.root, traversed = []) {
        if (node === null) {
            return traversed;
        }
        if (node.left) {
            traversed.push(...this.inOrderTraverse(node.left));
        }
        if (node.right) {
            traversed.push(...this.inOrderTraverse(node.right));
        }
    }
    preOrderTraverse(node = this.root, traversed = []) {
        if (node === null) {
            return traversed
        }
        if (node.left) {
            traversed.push(...this.preOrderTraverse(node.left));
        }
        if (node.right) {
            traversed.push(...this.preOrderTraverse(node.right));
        }

    }
    postOrderTraverse(node = this.root, traversed = []) {
        if (node === null) {
            return traversed;
        }
        if (node.left) {
            traversed.push(...this.postOrderTraverse(node.left));
        }
        if (node.right) {
            traversed.push(...this.postOrderTraverse(node.right));
        }
        traversed.push(node);
        return traversed;

    }

}

export default BinarySearchTree;