// Ulbi TV версия
interface User {
  name: string;
  age: number;
}
function assertIsUser(data: any): asserts data is User {
  if (typeof data !== "object" || data === null) {
    throw new Error("Object expected");
  }
  if (typeof data.name !== "string") {
    throw new Error("String expected");
  }
  if (typeof data.age !== "number" || data === null) {
    throw new Error("Number expected");
  }
}

function logUser(obj: User) {
  console.log(obj);
}
const obj = {
  name: "Ulbi TV",
};

logUser(obj);

assertIsUser(obj);

logUser(obj);
// Тут видно что после использования asserts TS понимает что это объект у нас
// отсоветует User иначе функция assertIsUser пробросит исключение и до след. строчки дело не дойдет.

// Улучшенная версия без any
interface User2 {
  name: string;
  age: number;
}

// 1. Type Guard: возвращает true/false и "сужает" тип
function isUser2(data: unknown): data is User2 {
  return (
    typeof data === "object" &&
    data !== null &&
    "name" in data &&
    typeof (data as any).name === "string" &&
    "age" in data &&
    typeof (data as any).age === "number"
  );
}

// 2. Assertion Function: использует Guard внутри
function assertIsUser2(data: unknown): asserts data is User2 {
  if (!isUser2(data)) {
    throw new Error("Invalid User object");
  }
}

function assertNotNull(value: unknown): asserts value {
  if (value === null || value === undefined) {
    throw new Error("Value is null or undefined");
  }
}

// Напиши функцию assertIsString, которая проверяет, является ли значение строкой.
// Если это не строка, она должна выбрасывать ошибку new Error("Not a string").

function assertIsString(val: any): asserts val is string {
  if (typeof val !== "string") {
    throw new Error("Not a string");
  }
}

function process(input: any) {
  assertIsString(input);
  // После вызова функции выше, TS должен позволить тебе сделать так:
  console.log(input.toUpperCase());
}
