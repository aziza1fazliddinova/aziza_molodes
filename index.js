// function calculateProportions(total, broken) {
 
//   if (typeof total !== 'number' && typeof broken !== 'number' && total <= 0 || broken < 0) {
//     return "Неверные входные данные";
//   }
//   let proportion = (broken / total) * 100;

//   return {
//     total,
//     broken,
//     proportion: proportion.toFixed(2) + '%'
//   };
// }

// let totalCars = 150;
// let brokenCars = 25;
// let result = calculateProportions(totalCars, brokenCars);
// console.log("Общее количество машин:" + result.total);
// console.log("Количество сломанных машин:" + result.broken);
// console.log("Пропорция сломанных машин:" + result.proportion);


//находит самую большую цифру
// function minimalsifrA(...sifri){
//   let mini = ""
//   for( let sifra of sifri){
//     if(sifra> mini){
//       mini= sifra
//     }
//     return mini
//   }
// }
// console.log(
//   minimalsifrA( 122 , 234 , 333 , 47 , 590, 68, 76 ,865)
// );


function fibonachi (k){
  let a = [ 1 , 2]
  if (k <= 2) {
    return a.slice(1, k)
  }
  for(let i = 2; i < k; i++){
    let next= a[i - 1] + a[i - 2]
    a.push(next);
  }
  return a
} 

let num = prompt("Введите число:")
let b = fibonachi(num);
console.log( b );

