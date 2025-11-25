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

// let arr = [1,3,5,7,9,10,13,15,45,78,90,100,104,143];
// let n;
// const binarySearch = (arr,n)=>{
// let start=0;
// let end=arr.length-1;
//     while (start<=end) {
//         let mid = Math.floor(start+(end-start)/2);
//         if(arr[mid]===n){
//             return mid;
//         }
//         if(arr[mid]>n){
//             end=mid-1;
//         }
//         if(arr[mid]<n){
//             start=mid+1;
//         }
//     } 
//     return -1;
// }

// console.log(binarySearch(arr,100));

// 5.) Bubble sorting

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

// let arr = [12,3,51,54,62,5,62,96,34,62,0];

// const InsertionSort = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//             let j=i;
//         while (j>0 && arr[j-1]>arr[j]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j-1];
//                 arr[j-1] = temp;
//             j--
//         }
//     }
//     return arr;
// }

// console.log(InsertionSort(arr));


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

// 15.) find the missing no. in a sequence from 1 to N.

// let arr = [8, 2, 4, 5, 3, 7, 1];

// const missingNumber = ()=>{
//     let n = arr.length;

//     let sum = 0;
//     for(let num of arr){
//         sum += num;
//     }
    
//     let expectedSum = (n*(n+1))/2;
//     return expectedSum-sum;
// }

// console.log(missingNumber());


// 2 .) hash approach (but takes extra space)

// let arr = [8, 2, 4, 5, 3, 7, 1];

// const missingNumber = ()=>{
//     let n = arr.length+1;
//     let hash = new Array(n+1).fill(0);

//     for(let i=0; i<n-1; i++){
//         hash[arr[i]]++;
//     }

//     for(let i=1; i<n-1; i++){
//         if(hash[i]===0){
//             return i;
//         }
//     }

// }

// console.log(missingNumber());

// 16.) Single number

// let arr = [2,3,3,5,6,5,6];

// const singleNumber = ()=>{
//     let res=0;
//     for(let i=0; i<arr.length; i++){
//         res = res^arr[i];
//     }
//     return res;
// }

// console.log(singleNumber());

//17.) Star Pattern

// const starPattern = ()=>{
//     for(let i=0; i<4; i++){
//         let row="";
//         for(let j=0; j<4; j++){
//             row = row + "*"
//         }
//         console.log(row);
//     }
    
// }
// starPattern();

// const starPattern = ()=>{
//     let n=10 // rows
//     for(let i=1; i<n; i++){
//         let row = "";
//         for(let j=1; j<=1; j++){
//             row = row + "*";
//         }
//         console.log(row);
//     }
// }

// starPattern();

// two Sum using brute force

// let arr = [1,2,4,5,7,8,9,10];
// let n;
// const twoSum = (arr,n)=>{
//     let i=0;
//     let j=1;
//     for(let i=0; i<arr.length-1; i++){
//         for (let j =i+ 1; j <arr.length-1; j++){
//             if(arr[i]+arr[j]===n){
//                 return {i,j}
//             }
//         }
//     }
// }

// console.log(twoSum(arr,15))

// two sum using Two pointers

// const twoSumTwoPointer = (arr,n)=>{
//     let left = 0;
//     let right = arr.length-1;
//     while (left<right) {
//         let sum = arr[left]+arr[right];
//         if(sum===n){
//             return {left,right}
//         }else if(sum>n){
//             right--;
//         }else{
//             left++;
//         }
        
//     }    
// }

// console.log(twoSumTwoPointer(arr,15));




































