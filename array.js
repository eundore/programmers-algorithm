const arr1 = Array(5).fill(5);
const arr2 = Array.from(Array(5), (_, k) => k + 1);

console.log(arr1);
console.log(arr2);

console.log("-------join, reverse");
console.log(arr2.join(","));
console.log(arr2.reverse());
console.log(arr2);

console.log("-------concat");
console.log(arr1.concat(arr2));

console.log("-------push, pop");
arr2.push(7, 8, 9);
console.log(arr2);
console.log(arr2.pop());
console.log(arr2);

console.log("-------shift, unshift");
arr2.shift();
console.log(arr2);
arr2.unshift(10);
console.log(arr2);

const arr3 = [1, 2, 3, 4, 5];
console.log("-------slice");
console.log(arr3.slice(0, 2)); //0부터 2이전 인덱스값 자른 후 복사
console.log(arr3);

console.log("-------slice");
console.log(arr3.splice(0, 2)); //0부터 2이전 인덱스값 삭제
console.log(arr3);

console.log("-------for of");
for (const item of arr3) {
  console.log(item);
}

console.log("-------Array is Object");
console.log(typeof arr3);
arr3["key"] = "value";
console.log(arr3);
console.log(arr3.length);
