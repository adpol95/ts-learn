interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

const isFish0 = (pet: Bird | Fish): pet is Fish => {
  return (pet as Fish).swim !== undefined;
};

interface Bird1 {
  flySpeed: number;
}

interface Fish1 {
  swimSpeed: number;
}

function isBird1(animal: Bird1 | Fish1): animal is Bird1 {
  return "flySpeed" in animal;
}

function move1(animal: Bird1 | Fish1) {
  console.log(isBird1(animal) ? animal.flySpeed : animal.swimSpeed);
}
// ТВОЯ ЗАДАЧА:
// Напиши функцию-защитник isFish, которая позволит нам
// безопасно вызвать метод .swim() внутри условия if.

function isFish(pet: Bird | Fish): pet is Fish {
  // Напиши проверку здесь (подсказка: используй оператор 'in' или проверку свойства type)
  return "swim" in pet;
}

// Пример использования:
function move(pet: Bird | Fish) {
  if (isFish(pet)) {
    pet.swim(); // Здесь TS должен понять, что это Fish
  } else {
    pet.fly(); // А здесь — что это Bird
  }
}
