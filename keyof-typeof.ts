// Создайте объект Colors с полями primary: "red" и secondary: "blue".
// Используя операторы typeof и keyof, создайте тип ColorNames, который будет принимать только строки "primary" или "secondary".
const Color = {
  primary: "red",
  secondary: "blue",
};

type ColorNames = keyof typeof Color;
