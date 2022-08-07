 /**
* Singly linkedlist and doubly linked list are same , the difference is the dpubly linkedlist will have another pointer/node which will point to the revious node
*/
class newNode {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class myLinkedList {

  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1
  }
  append(value){
    this.length = this.length + 1;
    const newNode  = {
      value: value,
      next: null,
      prev: null
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  prepend(value){
    this.length = this.length + 1;
    const newNode  = {
      value: value,
      next: this.head,
      prev: null
    }
    this.head = newNode
  }
  printList(){
    let myArray = [];
    let currentNode = this.head;
    while(currentNode !== null){
      myArray.push(currentNode.value);
      currentNode = currentNode.next
    }
    return myArray;
  }

  insert(index , value){
    if(index >= this.length){
      return this.append(value);
    }
    let leader = this.traverseToIndex(index-1);
    //newNode = new newNode(value);
    const newNode  = {
      value: value,
      next: this.head,
      prev: null
    }
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
  }
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index){
    //current node
    let leader = this.traverseToIndex(index-1);
    
    //node we wanted to delete
    let unWanterNode = leader.next;

    //set current's node next of deleted node's next
    leader.next = unWanterNode.next;
    
    this.length--;
  }
}

let ll = new myLinkedList(10);
ll.append(5);
ll.append(16);
ll.append(45);
ll.prepend(1);
ll.insert(2,150);
ll.insert(4,150);
ll.remove(4)
ll.remove(2)
console.log(ll.printList());







// 1. Doubly linked list is good if you dont have any limitation in memory because it requires more space in memory r
console.log('Creating linked list');

class newNode {
  constructor(value){
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class linkedList {
  constructor(value){
    this.head = new newNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    //Node or new block
    let node = new newNode(value);
    //we are appendig node to linked list, so we will SET new block's previous property to linkedlist tail
    node.prev = this.tail;
    //new node added so we set linked list's tail's next property
    this.tail.next = node;

    //its new node so we will set this to tail of linkedlist
    this.tail = node;
    this.length++;
  }
  prepend(value){
    let node = new newNode(value);
    //set head previuos propert/pointer to new node
    this.head.prev = node;
    //set new node next property to linked list head
    node.next = this.head;
    
    // set head of this new node.
    this.head = node;
    this.length++;
  }
  printList(){
    let arr = [];
    let currentNode = this.head;
    while(currentNode !== null){
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  printListTail(){
    let arr = [];
    let currentNode = this.tail;
    while(currentNode !== null){
      arr.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    return arr;
  }
  traverseToIndex(index){
    if(index >= this.length){
      return false;
    }else if(index < 0){
      index = 0;
    }
    let counter = 0;
    let currentNode = this.head;
    while(counter != index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode
  }
  remove(index){
    let node = this.traverseToIndex(index-1);
    if(node == false){
      return "Node Not Found";
    }
    let unWantedNode = node.next;
    node.next = unWantedNode.next;
    unWantedNode.next.prev = node
    this.length = this.length-1;
  }

  insert(index , value){
    if(index >= this.length){
      return this.append(value);
    }else if(index < 1){
      return this.prepend(value);
    }
    let node = this.traverseToIndex(index-1);
    if(node == false){
      return "Node Not Found";
    }
    let nodeNew = new newNode(value);
    this.length++;
    node.next.prev = nodeNew;
    nodeNew.prev = node;
    nodeNew.next = node.next;
    node.next = nodeNew;
  }
  
  reverse(){ 
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    let second = first.next;
    this.tail = this.head;
    while(second) {
      const temp = second.next; 
      second.next = first; 
      first = second; 
      second = temp;
    }
      this.head.next = null; 
      this.head = first;
  }
  
}

ll = new linkedList(10);
ll.append(2);
ll.append(21);
ll.prepend(1);
ll.remove(1);
ll.insert(2,150);
ll.prepend(111);
ll.insert(4,500)
ll.remove(4);
console.log(ll.printList() , ll.length , ll.printListTail());
ll.reverse();
console.log(ll.printList() , ll.length , ll.printListTail());