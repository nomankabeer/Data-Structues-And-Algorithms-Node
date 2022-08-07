// console.log('sdfsdf');
class MyArray {
  
  constructor (){
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(val){
    this.data[this.length] = val;
    this.length += 1;
    return this.length;
  }

  update(val,newVal){
    //O(n)
    // console.log(val,newVal)f
    for(let i = 0; i< this.length; i++){
      if(val == this.data[i]){
       this.data[i] = newVal; 
        break;
      }
    }
  }

  addIn(val,newVal){
    // console.log(val,newVal)
    for(let i = 0; i< this.length; i++){
      if(val == this.data[i]){
        // this.data[i+1] = newVal;
        this.shiftItemsForAddInFunction(i+1);
        this.data[i+1] = newVal;
        break;
      }
    }
  }

  shiftItemsForAddInFunction(index){
    this.length +=1;
    var lastItem = this.data[index];
    for(let i = index+1 ; i < this.length; i++){
      var cItem = this.data[i];
      this.data[i] = lastItem;// this.data[i];
      lastItem = cItem;
    }
  }

  pop(){
    const lasttem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length -= 1;
    return lasttem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItemsForDeleteFunction(index);
  }

  shiftItemsForDeleteFunction(index){
    for(let i = index ; i < this.length -1; i++){
      this.data[i] = this.data[i+1];
    }
   delete this.data[this.length-1]
   this.length -=1;
  }

}

const myArray = new MyArray();
myArray.push('mass')
myArray.push('is')
myArray.push('neither')
myArray.pop()
myArray.push('be')
myArray.push('created')
myArray.push('nor')
myArray.push('be')
//myArray.pop()
//myArray.delete(0)
myArray.delete(3)
myArray.update('is','created');
myArray.addIn('be','createdVal');
myArray.push('destroyed')
myArray.push('during')
myArray.push('a')
myArray.push('chemical')
myArray.addIn('during','WOW');
myArray.update('chemical','AHO Working');
console.log(myArray, myArray.get(0));