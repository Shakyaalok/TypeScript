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
/*
const numElement1 = document.getElementById('num1') as HTMLInputElement;
const numElement2 = document.getElementById('num2') as HTMLInputElement;
const AddButton = document.getElementById('addButton')!

const numResult:number[] = [];
const textResult:string[] = []

AddButton.addEventListener('click',()=>{
   const num1 = numElement1.value
   const num2 = numElement2.value
   const result = add(+num1,+num2);
   numResult.push(result as number)
   
   const stringResult = add(num1,num2);
   textResult.push(stringResult as string)
   console.log(result)
   prinResult({val:result as number,timestamp:new Date()})
   console.log(numResult,stringResult)
})

function prinResult(resultObj:{val:number; timestamp:Date}){
    console.log(resultObj.val)
}

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
*/



// type Aliases and interfaces

const numElement1 = document.getElementById('num1') as HTMLInputElement;
const numElement2 = document.getElementById('num2') as HTMLInputElement;
const AddButton = document.getElementById('addButton')!

const numResult:number[] = [];
const textResult:string[] = []

type StrOrNum = number | string
type Result = {val:number; timestamp:Date}
// or
interface ResultObj{
    val:number; timestamp:Date
}


AddButton.addEventListener('click',()=>{
   const num1 = numElement1.value
   const num2 = numElement2.value
   const result = add(+num1,+num2);
   numResult.push(result as number)
   
   const stringResult = add(num1,num2);
   textResult.push(stringResult as string)
   console.log(result)
   prinResult({val:result as number,timestamp:new Date()})
   console.log(numResult,stringResult)
})

// function prinResult(resultObj:Result){
//     console.log(resultObj.val)
// }
function prinResult(resultObj:ResultObj){
    console.log(resultObj.val)
}

function add(num1:StrOrNum,num2:StrOrNum){
   if(typeof num1==='number' && typeof num2==='number'){
    return num1+num2;
   }else if(typeof num1==='string' && typeof num2==='string'){
    return num1+" "+num2;
   }else{
    return +num1 + +num2;
   }
}

console.log(add(1,2))
