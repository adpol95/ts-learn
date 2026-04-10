type Color = "red" | "green" | "blue" | "yellow";
type Status = "success" | "error" | "warning";

const colorsArrayPart: Partial<Record<Color, string[]>> = {
  blue: ["123"],
};
const colorsArrayAll: Record<Color, string[]> = {
  blue: ["123"],
  green: ["123"],
  yellow: ["123"],
  red: ["123"],
};

// Создай новый тип UserPreview, который содержит только name и email, и при
// этом эти поля должны быть только для чтения. Используй комбинацию двух утилитарных типов.
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface UserPreview extends Readonly<Pick<User, "name" | "email">> {}

const obj2: UserPreview = {
  name: "asd",
  email: " asdsa",
};

type Status2 = "loading" | "success" | "error" | "idle";

type ActiveStatus = Exclude<Status2, "idle">;
