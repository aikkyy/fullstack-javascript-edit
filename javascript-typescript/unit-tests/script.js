export function sum(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function operation(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    default:
      throw new Error("Operation not supported");
  }
}
