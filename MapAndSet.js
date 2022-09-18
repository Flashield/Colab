let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'Bool');
console.log(map.get('1'));
console.log(map.size);

// 可以使用对象作为键值
let john = {name: "John Smith"};
let vistsCountMap = new Map();
vistsCountMap.set(john, john.name);
console.log(vistsCountMap.get(john));

// 使用对象作为键是 Map 最值得注意和重要的功能之一。在 Object 中，我们则无法使用对象作为键。在 Object 中使用字符串作为键是可以的，但我们无法使用另一个 Object 作为 Object 中的键。

// let john = {name: "John Smith1"};
let ben = {name: "Ben Jose"};
let visitsCountObj = {}; //使用对象
visitsCountObj[john] = 123;
visitsCountObj[ben] = 456;
console.log(visitsCountObj[john]);
console.log(visitsCountObj["[object Object]"]);

// 因为 visitsCountObj 是一个对象，它会将所有 Object 键例如上面的 john 和 ben 转换为字符串 "[object Object]"。这显然不是我们想要的结果。

map.set('2', 'str2')
   .set(2, 'num2')
   .set(false, 'Bool2');
console.log(`map size:${map.size}`);

let recipeMap = new Map([
   ['cucumber', 500],
   ['tomato', 350],
   ['onion', 50],
   [1, 'Good'],
]);
console.log(recipeMap.keys());
console.log(map.keys());

// 遍历所有键值
for (let vegetable of recipeMap.keys()) {
   console.log(vegetable);
};
// 遍历所有的值
for (let amount of recipeMap.values()) {
   console.log(amount);
};

// 遍历所有实体
for (let entry of recipeMap) {
   console.log(entry);
};

// forEach方法
recipeMap.forEach((value, key, map) => {
   console.log(`${key}: ${value}`)
});


// Object.entries：从对象创建 Map

let obj = {
   name: "John2",
   age: 30,
};

let map1 = new Map(Object.entries(obj));

console.log(map1);

// Object.fromEntries：从 Map 创建对象
obj2 = Object.fromEntries(recipeMap);
obj3 = Object.fromEntries(recipeMap.entries());
console.log(obj2);
console.log(obj3);

let objPrices = Object.fromEntries([
   ['banana', 1],
   ['orange', 2],
   ['meat', 3],
]);
console.log(objPrices)

// Set

let set = new Set();

let pete = {name: "Pete Bee"};
let mary = {name: "Mary May"};

set.add(john);
set.add(pete);
set.add(john);
set.add(mary);

console.log(set.size);

set.forEach((value, set) => {
   console.log(value);
   // console.log(value2);
});

for (let value of set.values()) {
   console.log(value);
};

for (let user of set) {
   console.log(user.name);
}

// Set 迭代
set.forEach((value, value2, set) => {
   console.log(value);
   // console.log(value2);
});

// Practice

// 1
function unique(arr){
   return Array.from(new Set(arr));
};

let values = [1,2,3,4,5,2,4,2,4,1,];
let uniSet = new Set(values);
// uniSet.fromEntries(values);
// console.log(uniSet.values());
console.log(unique(values));

// 2

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){

   let wordMap = new Map();
   for (let word of arr) {
      let sorted = word.toLowerCase().split("").sort().join("");
      wordMap.set(sorted, word);
   };

   return Array.from(wordMap.values());
};

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


// 3
let map3 = new Map();
map3.set("name", "John");
let key3s = Array.from(map3.keys());
key3s.push("more");
console.log(key3s)