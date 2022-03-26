const obj = {};

obj["email"] = "eundore@gmail.com";
obj.age = "29";
obj.phone = "01052270151";
console.log(obj);

delete obj.phone;
console.log(obj);

console.log("email" in obj);
console.log("phone" in obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));

for (const key in obj) {
  console.log(key, obj[key]);
}
