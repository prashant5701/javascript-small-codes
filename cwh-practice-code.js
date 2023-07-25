// const obj = {
//     "name":"abc",
//     'reg no ':21,
//     'Available?':true,
//     'Branch':undefined,
//     'Marks':null
// }

// obj['name']='xyz';
// obj['pnoneno']=123456
// console.log(obj);


// let age=155;
// switch(age){
//     case 12 :
//         console.log('your age is 12 ');
//         break;
//     case 13 :
//         console.log('your age is 13');
//         break;
//     case 14 :
//         console.log('your age is 14');
//         break;
//     case 15 :
//         console.log('your age is 15');
//         break;
//     case 16 :
//         console.log('your age is 16');
//         break;
//     default:
//         console.log('Invalid number');
//         break;
// }

// console.log('Done');

// let age = 15;
// if(age<18 ? console.log ('you can not drive '):console.log('you can drive'));

// let age = 15;
// let a = age>18?"you can drive":'you can not drive';
// console.log(a);


// let a =null;
// const array = 'abcd';
// for(a in array){
//         console.log(a)
// }

// let a= 0;
// while(a<10){
//     console.log(a);
//     a++;
// }
// do {
//     console.log(a);
//     a++;
// }while(a<10)


// const obj = {
//         "name":"abc",
//         'reg no ':21,
//         'Available?':true,
//         'Branch':undefined,
//         'Marks':null
//     }
//     const a = Object.keys(obj)
//     console.log(a)

// for(let i=0;i<Object.keys(obj).length;i++){
   
//    console.log(Object.keys(obj)[i] );
// }



// for(key in obj){
//     console.log(key +' '+ obj[key]);
// }


// console.log(typeof 'jhon');


// let a = " 1.2";
// a=parseInt(a);
// console.log(a)


// const name = 'this is my string';

// const str = `This is "a" ${name} string,s' ok`;
// let str = name.replace(" is "," on ");
// let str = name.concat(' ok',' done');
// console.log(str);
// console.log(name[0]);

// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr.length);
// let arrstr = arr.toString();
// console.log(arrstr);
// console.log(arrstr.length);

// let arrstr = arr.join(" and ");
// console.log(arrstr);

// delete arr[0];
// console.log(arr);
// let x = arr[0];
// console.log(x)
// let compare= (a,b)=>{
//     console.log('a and b are : ' +a+' '+b)
// return(a-b);
// }

// let nums1 = [31,4,5,68,8];
// let nums2 = [-1,-2];

// let arr = nums1.concat(nums2);
// arr.sort(compare);

// console.log(arr);
// let arrlen = arr.length;
// console.log(arr.length);

// if (arrlen % 2 == 0) {
//     let medianIndex1 = arrlen / 2;
//     let medianIndex2 = medianIndex1 - 1;
//     let median = (arr[medianIndex1] + arr[medianIndex2]) / 2;
//     console.log(median);
//     return median;
// }
// else {

//     let medianIndex = Math.floor(arrlen / 2);
//     let median = arr[medianIndex];
//     console.log(median);
//     return median;
// }



// let arr =[1,20,30,40,5];

// arr.splice(2,1,50,60)
// console.log(arr)


// for (let key in arr){
//     console.log(key)
// }
// for (let x of arr){
//     console.log(x)
// }

// const prompt =  require('prompt-sync')();

// let arr = [];
// let a = 1;
// while(a!=0){
//    a=(prompt('Enter number : '))
//    arr.push(a);
// } 
// console.log(arr);

let arr = [1,2,3,4,5];

// let n = arr.filter((x)=>{
//     return x%10==0;
// })
// console.log(n)

// let n = arr.map((value)=>{
//     return value*value
// })

// console.log(n)

// let a= 4;

// let n = arr.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log(n)