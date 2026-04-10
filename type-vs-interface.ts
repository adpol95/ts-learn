// 1. Создайте интерфейс Window и добавьте в него поле title: string. Ниже в коде еще раз объявите интерфейс Window и добавьте поле width: number. 
// Проверьте, что объект типа Window теперь требует оба поля.

// 2. Попробуйте проделать то же самое с type и посмотрите на ошибку компилятора.
interface HomeWindow {
  title: string;
}
interface HomeWindow {
  width: string;
}
const obj: HomeWindow = {
  title: "sad",
  width: "Asd",
};

type HomeWindow2 = {
  title: string;
};
type HomeWindow2 = {
  width: string;
};
const obj2: HomeWindow2 = {
  title: "sad",
};
