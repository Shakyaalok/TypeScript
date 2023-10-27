/*
const numElement1 = document.getElementById('num1') as HTMLInputElement;
const numElement2 = document.getElementById('num2') as HTMLInputElement;
const AddButton = document.getElementById('addButton')


AddButton.addEventListener('click',()=>{
   const num1 = numElement1.value
   const num2 = numElement2.value
   const result = add(+num1,+num2);
   console.log(result)
})


function add(num1:number,num2:number){
    return num1+num2
}

console.log(add(1,2))

// console.log(add('1','2')) throw error \

*/
// union types
/*
const numElement1 = document.getElementById('num1') as HTMLInputElement;
const numElement2 = document.getElementById('num2') as HTMLInputElement;
const AddButton = document.getElementById('addButton')!


AddButton.addEventListener('click',()=>{
   const num1 = numElement1.value
   const num2 = numElement2.value
   const result = add(num1,num2);
   console.log(result)
})


function add(num1:number|string,num2:number|string){
   if(typeof num1==='number' && typeof num2==='number'){
    return num1+num2;
   }else if(typeof num1==='string' && typeof num2==='string'){
    return num1+" "+num2;
   }else{
    return +num1 + +num2;
   }
}

console.log(add(1,2))

// console.log(add('1','2')) throw error

*/
// object and array
var numElement1 = document.getElementById('num1');
var numElement2 = document.getElementById('num2');
var AddButton = document.getElementById('addButton');
var numResult = [];
var textResult = [];
AddButton.addEventListener('click', function () {
    var num1 = numElement1.value;
    var num2 = numElement2.value;
    var result = add(+num1, +num2);
    numResult.push(result);
    var stringResult = add(num1, num2);
    textResult.push(stringResult);
    console.log(result);
    prinResult({ val: result, timestamp: new Date() });
    console.log(numResult, stringResult);
});
function prinResult(resultObj) {
    console.log(resultObj.val);
}
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + " " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
console.log(add(1, 2));
