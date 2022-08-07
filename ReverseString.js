function reverseString(str){
  let strArr = str.split('');
  let strLen = str.length;
  let reverseStr = "";
  for (let i = strLen; i > 0; i--){
    reverseStr += str[i-1];
  }
  return reverseStr
}

function reserve2(str){
  return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');

const str = "Mass is neither be created nor be destroyed";
console.log(reverseString(str));
console.log(reserve2(str));
console.log(reverse3(str));
console.log(reverse4(str));