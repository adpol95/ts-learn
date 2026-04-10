interface Car {
  color: string;
  type: string;
  powerInHorse: number;
}
interface Building {
  color: string;
  type: string;
  floors: number;
}
interface Book {
  color: string;
  type: string;
  size: string;
}

// type WithoutType<T> = {
//   [K in keyof T as Exclude<K, "type">]: T[K]; // За счет такой констуркции мы удаляем type.
// };

type UpperCase<T> = {
  [K in keyof T as `${Capitalize<string & K>}`]: T[K]; // Так же мы можем преобразвоать свойсвта так как нам нужно, например сделать все ключи с заглавной.
};
const a: UpperCase<Car> = {
  color: "red",
  powerInHorse: 123,
};

// Создай сопоставленный тип OptionalFlags<T>, который принимает объект, где все значения — boolean, и делает все его поля необязательными.
// Жду твои варианты! Эти темы — фундамент для создания по-настоящему гибких библиотек и приложений. 🚀

type OptionalFlags<T> = { [K in keyof T]?: T[K] };
type Flags = {
  one: true;
  two: true;
};

type NewFlag = OptionalFlags<Flags>;
