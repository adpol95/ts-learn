function combine(arg1: number, arg2: number): number;
function combine(arg1: string, arg2: string): string {
  if (typeof arg1 === "string" && typeof arg2 === "string") return "asd";
  else return arg1 + arg2;
}

console.log(combine(1, 1));
