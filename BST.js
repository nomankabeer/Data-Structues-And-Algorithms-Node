//
console.log('Binary Search Tree');

class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(value){
    this.root = null;
  }
  insert(value){
    if(this.root == null){
      this.root = new Node(value);
    }else{
      // node = this.traverse(value);
      let currentNode = this.root;
      while(true){
        if(currentNode.value < value){
          if(currentNode.right == null){
            currentNode.right = new Node(value);
            break;  
          }
          currentNode = currentNode.right; 
        }else {
          if(currentNode.left == null){
            currentNode.left = new Node(value);
            break;  
          }
          currentNode = currentNode.left; 
        }
        // console.log(currentNode.value , value ); 
      }
    }
  }
  lookup(value){
    let currentNode = this.root;
    if(!this.root){
      return false;
    }
    else{
      while(true){
        if(value == currentNode.value && currentNode.value != null){
          return currentNode;
        }else if(value > currentNode.value && currentNode.right != null){
          currentNode = currentNode.right;
        }else if(value < currentNode.value && currentNode.left != null){
          currentNode = currentNode.left;
        } else {
          return "Node Not Found";
        }
      }
    }
  }
  removemy(value){
    let currentNode = this.root;
    let rightParentNode = null;
    let leftParentNode = null;
    while(true){
      if(value == currentNode.value && currentNode.value != null){
        if(rightParentNode != null){
          rightParentNode.right = currentNode.right;
        }else if(leftParentNode != null){
          leftParentNode.left = currentNode.left;
        }
        return 0;//currentNode;
      }else if(value > currentNode.value && currentNode.right != null){
        rightParentNode = currentNode;
        currentNode = currentNode.right;
      }else if(value < currentNode.value && currentNode.left != null){
        leftParentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        return "Node Not Found";
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
  
  TraverseInorder(root , res = []){
    if(root){
      // Traverse left
      this.TraverseInorder(root.left , res);
      // Traverse root
      res.push(root.value); //console.log(root.value)
      // Traverse right
      this.TraverseInorder(root.right , res);
    }
    return res;
  }

  TraversePreOrder(root , res = []){
    if(root){
      // Traverse root
      res.push(root.value); console.log(root.value)
      // Traverse left
      this.TraversePreOrder(root.left , res);
      // Traverse right
      this.TraversePreOrder(root.right , res);
    }
    // return res;
  }
  
  TraversePostOrder(root , res = []){
    if(root){
      // Traverse left
      this.TraversePostOrder(root.left , res);
      // Traverse right
      this.TraversePostOrder(root.right , res);
      // Traverse root
      res.push(root.value)
    }
    return res;
  }


  
}

bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(20);
bst.insert(1);
bst.insert(6);
bst.insert(15);
bst.insert(170);
/*
        9
    4       20
  1   6   15 170
    
*/
// console.log(bst.lookup(4));
// console.log(bst.remove(4));
// console.log(bst.lookup(4));

// Left Root Right
// 1 4 6 9 15 20 170
// console.log(bst.TraverseInorder(bst.root))

// Root Left Right
// 9 1 4 6 15 20 170
console.log(bst.TraversePreOrder(bst.root))

// Left Right Root
// 1 4 6 15 20 170 9
// console.log(bst.TraversePostOrder(bst.root))