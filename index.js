// const data = [];
// let count = 0;

//  const f = ()=>{
//     setTimeout(()=>{
//         count++;

//         if(count !== 10){
//             f();    
//             const newDataPoint = {
//                 x: new Date().getTime(),
//                 y: Math.floor(Math.random() * 100)
//             };
//             data.push(
//                 newDataPoint
//             )
//         }
//         else{
//             console.log(data);
//         }
//     },1000)
//  }

// f();
// console.log(data)

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// let x = 3;
// setInterval(()=>{
//     console.log(x);
//     x++;
// },1000)

const a = [1,2,3,4,5]
console.log(a.slice(0,2))
a.shift();
console.log(a)
console.log(Math.min([1,2,3]))