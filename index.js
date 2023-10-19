function calculateProportions(total, broken) {
 
  if (typeof total !== 'number' && typeof broken !== 'number' && total <= 0 || broken < 0) {
    return "Неверные входные данные";
  }
  let proportion = (broken / total) * 100;

  return {
    total,
    broken,
    proportion: proportion.toFixed(2) + '%'
  };
}


let totalCars = 150;
let brokenCars = 25;
let result = calculateProportions(totalCars, brokenCars);
console.log("Общее количество машин:" + result.total);
console.log("Количество сломанных машин:" + result.broken);
console.log("Пропорция сломанных машин:" + result.proportion);