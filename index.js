// function a(x){
// 	return function b(y){
//   	let x = 7;
//     return function c(z){
//     	y = 5; 
//     	return function d(n){
//       	return x + y + z + n
//       }
//     }
//   }
// }

// let k = a(2);
// let t = k(8);
// let e = t(3);
// let p = e(5);
// console.log(p);

console.log(this)