type TSuperType = {
  name: string;
};

type TSubType = {
  age: number;
  name: string;
};

const all: TSubType = {
  name: "Jon",
  age: 2,
};

const newOne: TSuperType = all; // Можно, саб тип может присваиваться супер типу, лишние типы уйдут

console.log(newOne.name); // ОК: "Jon"
// @ts-expect-error
console.log(newOne.age); // Ошибка TS: свойство 'age' не существует в типе 'TSuperType'

console.log(JSON.stringify(newOne)); // Выведет {"name":"Jon","age":2} — поле никуда не делось

// Это называется структурной подтипизацией (или duck typing): если объект выглядит как
// TSuperType (у него есть как минимум поле name), то он может считаться этим типом.

const onlyName: TSuperType = {
  name: "Jon",
};
const newOne2: TSubType = onlyName; // Нельзя так делать, тут именно не достает типа age
