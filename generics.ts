// Напиши функцию getLength<T>, которая принимает аргумент типа T и возвращает его длину (.length).
// Ограничь T так, чтобы функция работала только с теми типами, у которых есть свойство length (например, строки или массивы).

// 1 вариант
const getLength1 = <T extends any[] | string>(arg: T) => {
  return arg.length;
};

// Однако есть еще более универсальный способ: ограничить T объектом, у которого
// обязательно есть свойство length: number.
// Это позволит функции работать не только со строками и массивами, но
// и, например, с TypedArray или твоими собственными объектами.
interface IWithLength {
  length: number;
}

const getLength2 = <T extends IWithLength>(arg: T) => {
  return arg.length;
};

type AppConfig = {
  apiEndpoint: string;
  port: number;
  retries: number;
  debugMode: boolean;
};

//Мы хотим создать тип, который описывает значения только для числовых настроек этой конфигурации.

// Если мы напишем type NumericSettings = AppConfig["port" | "retries"], какой тип данных в итоге получится у NumericSettings? 🧐

// Вариант 1: Прямое перечисление (как мы обсуждали)
type NumericSettings = AppConfig["port" | "retries"];
// Результат: number. (Так как оба поля имеют тип number).

// Вариант 2: Динамический (через Mapped Types)
// Если мы не хотим перечислять ключи вручную, мы можем попросить TypeScript: "Найди все ключи, значения которых являются числами".
// Это чуть более продвинутая тема, но она выглядит примерно так:

type OnlyNumbers<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type NumericKeys = OnlyNumbers<AppConfig>; // Получим "port" | "retries"
type FinalType = AppConfig[NumericKeys]; // Получим number

// Почему K не объявлен в <T>?
// Представь обычный цикл for...in в JavaScript:

// for (let key in user) { ... }

// Ты ведь не объявляешь переменную key заранее во всей программе? Она рождается прямо внутри цикла и существует только там.
// В TypeScript [K in keyof T] — это такой же "цикл внутри типа":
// keyof T — это список всех ключей (например, "id" | "name").
// in — это команда "пройдись по каждому элементу этого списка".
// K — это временная переменная, которая по очереди принимает значение каждого ключа.
