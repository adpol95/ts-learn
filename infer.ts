function fn(arg1: number, arg2: string) {
  return "";
}
function fn2(arg1: number) {
  return "";
}

type MyParameters1<T> = T extends (arg: infer U) => any ? U : never;
type MyParameters2<T> = T extends (...arg: infer U) => any ? U : never;

type FnArg1 = MyParameters1<typeof fn2>;
type FnArg2 = MyParameters2<typeof fn>;

type MyReturnType<T> = T extends (...arg: any) => infer U ? U : never;