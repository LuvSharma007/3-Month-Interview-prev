// recursion level-0

// 1.)  print numbers

// let n=0;
// let printNumber = (n)=>{
//     if(n>3){
//         return;
//     }
//     console.log("Winding:",n);    
//     printNumber(n+1);
//     console.log("Run this after base case",n);
// }

// printNumber(n);

// 2.)  sum of array 

// iterative way

// let sum =0;
// let arr = [10,20,30,40,50];

// const sumOfArr = (arr,sum)=>{
//     for(let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(sumOfArr(arr,sum));

// recursive way

// let arr = [10,20,30,40,50];
// let sum = 0;
// let i=0;
// let sumOfArray = (sum ,i, arr)=>{
//     if(i>=arr.length){
//         console.log(sum);
//         return;
//     }
//     sumOfArray(sum+arr[i] , i+1, arr);
// }

// sumOfArray(sum , i , arr);


// 3.) sum of first n natural number
// let n
// const firstNaturalNumber = (n)=>{

//     if(n==0) return 0;
//     return n+firstNaturalNumber(n-1);
// }

// console.log(firstNaturalNumber(5));

// 4.) factorial of n

// let n;

// const factorial = (n)=>{
//     if(n==0){
//         return n;
//     }
//     if(n==1){
//         return n;
//     }
//     return n*factorial(n-1);
// }

// console.log(factorial(4));

// 5.) reverse String

const str = "hello";

const stringReverse = (str) =>{
    if(str == ""){
        return "";
    }
    return stringReverse(str.slice(1))+str[0];
}

console.log(stringReverse(str));








