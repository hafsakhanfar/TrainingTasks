const { myFilter, myFind, myMap, myReduce } = require("./arrayMethods.js");

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const items = [
  {
    name: "book",
    price: 50,
    id: "12fa21",
  },
  {
    name: "book2",
    price: 10,
    id: "12fa21",
  },
  {
    name: "book2",
    price: 20,
    id: "12fa21",
  },
  {
    name: "book2",
    price: 30,
    id: "12fa21",
  },
];

// test the lake of parameters in filter function's call

test("(undefined array) parameter in filter function's call with callback ", () => {
  let arr;
  expect(myFilter(arr, () => 0)).toEqual(
    "ERROR function couldn't filter because the array is not itialized"
  );
});

test("(no callback) parameter in filter function's call ", () => {
  expect(myFilter(array)).toEqual(
    "ERROR function couldn't filter because there is no callback function , undefined is not a functoin"
  );
});

test("no parameters in filter function's call ", () => {
  expect(myFilter()).toEqual(
    "ERROR function couldn't filter because there is neither callback function nor array"
  );
});

// test the function acceptance for deffernt types of array
test("string array in filter function ", () => {
  expect(myFilter(words, (word) => word.length > 6)).toEqual(
    words.filter((word) => word.length > 6)
  );
});

test("Object array in filter function ", () => {
  expect(myFilter(items, ({ price }) => price > 20)).toEqual(
    items.filter(({ price }) => price > 20)
  );
});

test("number array in filter function ", () => {
  expect(myFilter(array, (num) => num > 1)).toEqual(
    array.filter((num) => num > 1)
  );
});

// test the lake of parameters in find function's call

test("(undefined array) parameter in find function's call with callback ", () => {
  let arr;
  expect(myFind(arr, () => 0)).toEqual(
    "ERROR function couldn't search to find the element because the array is not itialized"
  );
});

test("(no callback) parameter in find function's call ", () => {
  expect(myFind(array)).toEqual(
    "ERROR function couldn't search to find the element because there is no callback function , undefined is not a functoin"
  );
});

test("no parameters in find function's call ", () => {
  expect(myFind()).toEqual(
    "ERROR function couldn't search to find the element because there is neither callback function nor array"
  );
});

// test the function acceptance for deffernt types of array

test("string array in find function ", () => {
  expect(myFind(words, (word) => word.length > 6)).toEqual(
    words.find((word) => word.length > 6)
  );
});

test("Object array in find function ", () => {
  expect(myFind(items, ({ price }) => price > 20)).toEqual(
    items.find(({ price }) => price > 20)
  );
});

test("number array in find function ", () => {
  expect(myFind(array, (num) => num > 1)).toEqual(array.find((num) => num > 1));
});

// test the lake of parameters in reduce function's call

test("(undefined array) parameter in reduce function's call with callback ", () => {
  let arr;
  expect(myReduce(arr, () => 0)).toEqual(
    "ERROR function couldn't reduce because the array is not itialized"
  );
});

test("(no callback) parameter in reduce function's call ", () => {
  expect(myReduce(array)).toEqual(
    "ERROR function couldn't reduce because there is no callback function , undefined is not a functoin"
  );
});

test("no parameters in reduce function's call ", () => {
  expect(myReduce()).toEqual(
    "ERROR function couldn't reduce because there is neither callback function nor array"
  );
});

// test the function acceptance for deffernt types of array

test("string array in reduce function without initial value ", () => {
  expect(
    myReduce(words, (acc, word) => Math.max(acc.length, word.length))
  ).toBe(words.reduce((acc, word) => Math.max(acc.length, word.length)));
});

test("string array in reduce function with initial value ", () => {
  expect(myReduce(words, (acc, word) => Math.max(acc, word.length), 0)).toBe(
    words.reduce((acc, word) => Math.max(acc, word.length), 0)
  );
});

test("Object array in reduce function without initial value  ", () => {
  expect(
    myReduce(items, (acc, currentItem) => ({
      price: acc.price + currentItem.price,
    }))
  ).toEqual(
    items.reduce((acc, currentItem) => ({
      price: acc.price + currentItem.price,
    }))
  );
});

test("Object array in reduce function with initial value  ", () => {
  expect(myReduce(items, (acc, currentItem) => acc + currentItem, 0)).toEqual(
    items.reduce((acc, currentItem) => acc + currentItem, 0)
  );
});

test("number array in reduce function without initial ", () => {
  expect(myReduce(array, (sum, current) => sum + current)).toEqual(
    array.reduce((sum, current) => sum + current)
  );
});

// test the lake of parameters in map function's call

test("(undefined array) parameter in map function's call with callback ", () => {
  let arr;
  expect(myMap(arr, () => 0)).toEqual(
    "ERROR function couldn't map because the array is not itialized"
  );
});

test("(no callback) parameter in map function's call ", () => {
  expect(myMap(array)).toEqual(
    "ERROR function couldn't map because there is no callback function , undefined is not a functoin"
  );
});

test("no parameters in map function's call ", () => {
  expect(myMap()).toEqual(
    "ERROR function couldn't map because there is neither callback function nor array"
  );
});

// test the function acceptance for deffernt types of array with and without initial value
test("string array in map function ", () => {
  expect(myMap(words, (word) => word + "!!")).toEqual(
    words.map((word) => word + "!!")
  );
});

test("Object array in map function ", () => {
  expect(
    myMap(items, (item) =>
      item.price > 20 ? { ...item, price: item.price * 0.99 } : item
    )
  ).toEqual(
    items.map((item) =>
      item.price > 20 ? { ...item, price: item.price * 0.99 } : item
    )
  );
});

test("number array in map function ", () => {
  expect(myMap(array, (num) => Math.abs(num))).toEqual(
    array.map((num) => Math.abs(num))
  );
});
