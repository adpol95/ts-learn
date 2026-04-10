// Создай интерфейс User с полями id (число), name (строка) и необязательным полем email. 
// Создай массив таких пользователей и напиши функцию, которая принимает этот массив и возвращает только список их имен.
interface IUser {
  id: number;
  name: string;
  email?: string;
}

const users: IUser[] = [
  { id: 1, name: "sads" },
  { id: 2, name: "sadasdsas" },
];

const onlyNames = (users: IUser[]) => {
  return users.map((el) => el.name);
};
