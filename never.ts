enum EVariants {
  MAIN,
  SECOND,
  THIRD,
}
const fn = (variant: EVariants) => {
  switch (variant) {
    case EVariants.MAIN: {
      return variant;
    }
    case EVariants.SECOND: {
      return variant;
    }
    default: {
      const exhaustCheck: never = variant; // За счет него мы ограничиваем доп варианты без проверки типов
      return exhaustCheck;
    }
  }
};

let value3: never;
let str: string = value3;
