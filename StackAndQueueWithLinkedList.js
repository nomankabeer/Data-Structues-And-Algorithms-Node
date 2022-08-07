// Stack: Last in first out.
// Queues: first in first out.
console.log('Stack and Queues');



class newNode {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

//========Stack=implementation=with=linked=list================
class Stack {
  constructor(value){
    this.top = new newNode(value);
    this.bottom = this.top;
    this.length = 1;
  }
  // peek will return the very first/top element/node in stack
  peek(){
    return this.top;
  }
  // push will add new node in stack on top
  push(value){
    let node = new newNode(value);
    node.next = this.top;
    this.top = node;
    this.length++;
  }
  // pop will delete first/top node from stack
  pop(){
    if(!this.isEmpty()){
      this.top = this.top.next;
      this.length--;
      if(this.length == 0){
        this.bottom = null;
      }
    }
  }
  //check if stack is empty or not 
  isEmpty(){
    if(this.length == 0){
      return true
    }else{
      return false;
    }
  }
}

stack = new Stack(10);
stack.push(9);
stack.push(4);
stack.pop();
stack.pop();
stack.pop();
//console.log(stack)



//========Queue=implementation=with=linked=list================
class Queue {
  constructor(value){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  
  // peek will return the very first node in queue
  peek(){
    return this.first;
  }
  // enqueue will add new node in queue on top
  enqueue(value){
    let newnode = new newNode(value);
    if(this.length === 0){
     this.first =  newnode
      this.last = newnode; 
    }else{
      this.last.next = newnode;
      this.last = newnode;
    }
    this.length++;
  }
  
  // dequeue will delete first entered node or last node from queue
  dequeue(){
    if(!this.isEmpty()){
      this.first = this.first.next;
      this.length--; 
      if(this.isEmpty()){
        this.last = null;
      }
    }
  }
  //check if queue is empty or not 
  isEmpty(){
    if(this.length == 0){
      return true
    }else{
      return false;
    }
  }
}

queue = new Queue();
queue.enqueue(10);
queue.enqueue(4);
queue.enqueue(2);
queue.enqueue(28);
queue.dequeue();
queue.dequeue();
console.log(queue)


