// Создай условный тип IsArray<T>. Если T является массивом, тип должен превращаться в строку "This is array", если нет — в "Not an array".
// Проверь его на примере IsArray<string[]> и IsArray<number>.

type TIsArray<T> = T extends any[] ? "This is array" : "Not an array";

type newOne = TIsArray<string>;
// Конкретно указываем через цепочку условий.
type TIsArray2<T> = T extends any[]
  ? "ARRAY"
  : T extends string
    ? "STRING"
    : "OTHER";

type newOne2 = TIsArray2<string>;

// в TypeScript порядок условий имеет значение, если один тип может "поглотить" другой.
// Хотя в данном случае string и string[] — это разные типы, привычка ставить более специфичные проверки (например, на массивы или объекты) в
// начало помогает избежать ошибок в более сложных цепочках.
