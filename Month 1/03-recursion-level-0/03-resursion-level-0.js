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

// const str = "hello";

// const stringReverse = (str) =>{
//     if(str == ""){
//         return "";
//     }
//     return stringReverse(str.slice(1))+str[0];
// }

// console.log(stringReverse(str));

// 6.) power of 2

// iterative way

// let n;
// let powerOf2= (n)=>{
//     if(n<=0) return false;

//     while(n%2===0){
//         n=n/2;
//     }
//     return n===1;
    
// }

// console.log(powerOf2(3));


// recursive way

// let n;
// let powerOf2 = (n)=>{
//     if(n<=0) return false;
//     if(n===1) return true;
//     if(n%2!==0) return false;

//     return powerOf2(n/2);
    

// }
// console.log(powerOf2(10));

// 7.) count good numbers

// iterative approach

// n=3;
// total = 1;
// const countGoodNumber = (n)=>{
//     for(let i=0; i<n; i++){
//         if(i%2==0){
//             total *= 5
//         }else{
//             total *= 4;
//         }
//     }
//     return total;
// }

// console.log(countGoodNumber(3));


// recursive approach

// n=5;
// total = 1;
// i = 0;
// let MOD = 1e9 +7;
// const countGoodNumber = (n,i,total)=>{
//     if(i>=n){
//         return total;
//     }    
//     let multiplier = (i%2==0 ? 5:4);
//     return countGoodNumber(n,i+1,(total*multiplier)%MOD);
// }

// console.log(countGoodNumber(n,i,total));


// Fibonacci Series

// let n = 4;

// let fibonacciSeries =(n)=>{
//     if(n<=1){
//         return n;
//     }
//     return fibonacciSeries(n-1) + fibonacciSeries(n-2);
// }

// console.log(fibonacciSeries(9));


















