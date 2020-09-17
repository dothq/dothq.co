export const makeId = () => {
  var a = "";

  for (let i = 0; i < 5; i++) {
    a += Math.random().toString(16).slice(2, 8);
  }

  return a;
}