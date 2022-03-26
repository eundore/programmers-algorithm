function solution(s) {
  const arr = s.split("");
  const res = [];

  for (const item of arr) {
    if (item === ")") {
      if (res.length > 0 && res[0] === "(") {
        res.pop();
      } else {
        res.push(item);
      }
    } else if (item === "(") {
      res.push(item);
    }
  }

  if (res.length > 0) {
    return false;
  }

  return true;
}
