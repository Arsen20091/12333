import _ from 'lodash';

const showInfo = (str) => {
  const lines = str.trim().split('\n').slice(1);

  const data = lines.map((line) => line.split(','));

  console.log(Количество автомобилей: ${lines.length}); // 1

  const probeg = data.map((row) => Number(row[4])); // 2

  const sum = probeg.reduce((acc, autoProb) => acc + autoProb, 0);

  const { length } = probeg;

  const output = sum / length;

  console.log(Средний пробег: ${output});

  const price = data.map((row) => row[7]);

  const maxSum = Math.max.apply(null, price);

  console.log(Стоимость самой дорогой машины: ${maxSum}); // 3

  const noPop = data.map((row) => ({ brand: row[0], model: row[1], god: Number(row[2]) }));

  const auto = noPop.reduce((min, car) => (car.god < min.god ? car : min));

  console.log(Самый старый автомобиль: ${auto.brand} ${auto.model}); // 4
};

export default showInfo;
