// linearch Search

// let arr = [34,56,89,2346,754,4567,579,4657,6545];
// let n = 754;

// const linearchSearch = ()=>{
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===n){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(linearchSearch());

// binary search

// let arr = [1,4,6,9,12,15,19,23,26,29,30,34,41,57,59,67,68,70,74,81,85,90,100];
// let n = 4;
// let start = 0;
// let end = arr.length-1;

// const binarySearch = ()=>{    
//     while(start<=end){
//         let mid =  Math.floor(start+(end-start)/2)
//         // console.log(mid);
        
//         if(arr[mid]===n){
//             return mid;
//         }
//         if(arr[mid]>n){
//             end = mid-1;
//         }else{
//             start = mid+1 ;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch());

// bubble sort 

// let arr = [12,34,53,234,562,5656,4563,67,245,556,3345,7,45,1,34,665];

// const bubbleSort = ()=>{
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=0; j<arr.length-1-i; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort());

// selection sort 

// let arr = [12,34,53,234,562,5656,4563,67,245,556,3345,7,45,1,34,665];

// const selectionSort = ()=>{
//     for(let i=0; i<arr.length-1; i++){
//         let minElm = i;
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j]<arr[minElm]){
//                 minElm = j;
//             }
//         }
//         let temp = arr[minElm];
//         arr[minElm] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;
// }

// console.log(selectionSort());

// insertion sort 

// let arr = [12,34,53,234,562,5656,4563,67,245,556,3345,7,45,1,34,665];

// const insertionSort = () =>{
//     for(let i=0; i<arr.length; i++){
//         let sorted = arr[i];
//         let j=i-1;
//         while(j>=0 && arr[j]>sorted){
//             arr[j+1] = arr[j];
//             j=j-1;
//         }
//         arr[j+1] = sorted
//     }
//     return arr;
// }

// console.log(insertionSort());



