// level 0 array questions

// 1.) find the second largest element in an array

// let arr = [34,56,78,67,12,67,33,88,46];
// let largest = -Infinity;
// let sLargest = -Infinity;

// function SecondLargest(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>largest){
//             sLargest = largest;
//             largest = arr[i];
//         }else if(arr[i]> sLargest && arr[i]<largest){
//             sLargest = arr[i];
//         }
//     }
//     return sLargest;
// }

// console.log(SecondLargest(arr));


// 2.) Check if number is palindrome or not

// let n;
// function CheckPalindrome(n){
//     let sum = 0 , reminder;
//     let temp = n;
//     while(n>0){
//         reminder = n%10;
//         sum = (sum*10)+reminder;
//         n = Math.floor(n/10);
//     }

//     if(sum===temp){
//         console.log("Palindrome number");
//     }else{
//         console.log("Not a Palindrome number");
//     }

// }

// CheckPalindrome(121);


// 3.) linear search 

// let arr = [10,20,30,40,506,70,80,34,6,8,334,68,5788,3467,836];
// let n=arr.length-1;
// let target = 40;

// function LinearSearch(arr,n,target){
//     for(let i=0; i<n; i++){
//         if(arr[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(LinearSearch(arr,n,target));


// 4.) Binary Search

// let arr = [2,4,5,7,9,14,23,47,52,63,78,81,95,98,102]
// let start = 0;
// let end = arr.length-1;
// let target = 98

// function BinarySearch(arr,target){
//     while(start<end){
//         let mid = Math.floor(start+(end-start)/2);
//         if(arr[mid]===target){
//             return mid;
//         }
//         if(arr[mid]>target){
//             end = mid;
//             end--;
//         }else{
//             start = mid;
//             start++;
//         }
//     }
//     return -1;
// }

// console.log(BinarySearch(arr,target));

// 5.) Binary sorting

// let arr = [670,20,30,40,506,70,80,34,6,8,334,68,5788,3467,836];
// let n=arr.length-1;

// function BubbleSort(arr,n){
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n-i; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(BubbleSort(arr,n));

// 6.) Selection Sort

// let arr = [670,2,30,40,506,70,80,34,6,8,334,68,5788,3467,836];
// let n=arr.length

// function SelectionSort(arr,n){
//     for(let i=0; i<n; i++){
//         let minElm = i;
//         for(let j=i+1; j<n; j++){
//             if(arr[j]<arr[minElm]){
//                 minElm = j;
//             }
//         }
//         let temp = arr[minElm];
//         arr[minElm]  = arr[i];
//         arr[i] = temp
//     }
//     return arr;
// }

// console.log(SelectionSort(arr,n));

// 7) .Insertion sort

// let arr = [670,2,30,40,506,70,80,34,6,8,334,68,5788,3467,836];
// let n = arr.length;

// function InsertionSort(arr,n){
//     for(let i=1; i<n; i++){
//         let firstElm = arr[i];
//         let j=i-1;
//         while(j>=0 && arr[j]>firstElm){
//             arr[j+1] = arr[j];
//             j=j-1;
//         }
//         arr[j+1] = firstElm;
//     }
//     return arr;
// }

// console.log(InsertionSort(arr,n));


// 8.) remove duplicates from array

// let arr = [1,1,2,2,3,3,6,6,8,8,9,9];

// function removeDuplicatesSorted(arr) {

//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[j] !== arr[i]) {
//             i++;              
//             arr[i] = arr[j];
//         }
//     }
//     return i+1;
// }

// console.log(removeDuplicatesSorted(arr));


// 9.) remove elements 
// Given an integer array arr and an integer val, remove all occurrences of val in arr in-place. The order of the elements may be changed. Then return the number of elements in arr which are not equal to val.

// let arr = [2,4,7,47,85,88,78,2,47,27,8,9,47];
// let val = 47;

// function removeElements(arr){
//     let i=0;
//     for(let j=0; j<arr.length; j++){
//         if(arr[j]!==val){
//             arr[i] = arr[j];
//             i++;
//         }
//     }
//     return i;
// }

// console.log(removeElements(arr));


// 10.) reverse string

// let arr = ["h","e","l","l","o"];

// function reverseString(arr){
//     let start = 0;
//     let end = arr.length-1;
//     while(start<end){
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp
//         start++;
//         end--;
//     }
    
//     return arr;
// }

// console.log(reverseString(arr));

// 11.) best time to but and sell stocks

// let arr = [7,1,5,3,6,4];
// let left = 0 , right = 1 , maxProfit = 0;
// // buying day  // selling day
// const MaxProfit = (arr)=>{
//     while(right<arr.length){
//         if(arr[right] > arr[left]){
//             let profit = arr[right] - arr[left];
//             maxProfit = Math.max(maxProfit,profit);
//         }else{
//             left = right;
//         }
//         right++;
//     }
//     return maxProfit;
// }

// console.log(MaxProfit(arr));


// 12.) merge Sorted Array
//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

// let MergeSortedArray = () =>{
//     let i = m-1;
//     let j = n-1;
//     let k = m+n-1;
//     while(i>=0 && j>=0){
//         if(nums1[i]>nums2[j]){
//             nums1[k] = nums1[i]
//             i--
//         }else{
//             nums1[k] = nums2[j];
//             j--
//         }
//         k--;
//     }
//     while(j>=0){
//         nums1[k] = nums2[j];
//         j--;
//         k--;
//     }

//     return nums1;
// }

// console.log(MergeSortedArray());

// 13.) move all zeros 

// let arr = [2,0,4,7,0,47,0,85,0,88,0,78,0,2,0,47,0,0,27,8,0,9,0,0,47];

// const moveAllZeros = (arr)=>{
//     let nonZeroElm = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]!==0){
//             [arr[i],arr[nonZeroElm]] = [arr[nonZeroElm],arr[i]]
//             nonZeroElm++;
//         }
//     }
//     return arr;
// }

// console.log(moveAllZeros(arr));


// 14.) max consecutive ones

// let arr = [3,4,1,1,45,1,1,1,1,1,1,11,78,95,1,1,1,1,5,3];

// const maxOnes=()=>{
//     let count = 0;
//     let maxCount = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===1){
//             count++;
//             if(count > maxCount){
//                 maxCount = count
//             };
//         }
//         else{
//             count = 0;
//         }
//     }
//     return maxCount;
// }
// console.log(maxOnes());























