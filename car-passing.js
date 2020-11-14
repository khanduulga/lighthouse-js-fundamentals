function carPassing(cars, speed) {
  const newCar = {
    time: Date.now();
    speed: speed,
  }
  cars.push(newCar);
  return cars;   // an array including all elements in cars and new element
}

