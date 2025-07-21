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

// Merge sort

let arr = [12,34,53,234,562,5656,4563,67,245,556,3345,7,45,1,34,665];
let left =0 , right = arr.length-1;
const merge = (arr,left,mid,right)=>{
    // find number of elements to be fit in left and right
    let n1 = mid-left+1;
    let n2 = right-mid;

    // creating left and right arr
    let l = new Array(n1);
    let r = new Array(n2);

    // filling values in left and right
    for(let i=0; i<n1; i++){
        l[i] = arr[left+i];
    }
    for(let j=0; j<n2; j++){
        r[j] = arr[mid+1+j];
    }

    let i=0, j=0, k = left
    while(i<n1 && j<n2){
        if(l[i]<=r[j]){
            arr[k] = l[i];
            i++;
        }else{
            arr[k] = r[j]
            j++
        }
        k++;
    }

    // copying remaining elements from left and right

    while(i<n1){
        arr[k] = l[i];
        i++,k++
    }

    while(j<n2){
        arr[k] = r[j];
        j++,k++
    }

}

const MergeSort = (arr,left,right)=>{
    if(left>=right){
        return;
    }
    const mid = Math.floor((left+right)/2);
    MergeSort(arr,left,mid);
    MergeSort(arr,mid+1,right);
    merge(arr,left,mid,right);

}

MergeSort(arr,left,right);
console.log(arr);







