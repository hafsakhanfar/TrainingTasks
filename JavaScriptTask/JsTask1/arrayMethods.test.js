const { myFilter, myFind, myMap, myReduce } = require("./arrayMethods.js");

const { array, words, items } = require("./assest.js");

describe("Test cases for myFilter function", () => {
  test("(Undefined array) parameter in filter function's call with callback ", () => {
    expect(() => {
      myFilter(undefined, () => 0);
    }).toThrow(
      "ERROR function couldn't filter because the array is not itialized"
    );
  });

  test("(No callback) parameter in filter function's call ", () => {
    expect(() => {
      myFilter(array);
    }).toThrow(
      "ERROR function couldn't filter because there is no callback function , undefined is not a functoin"
    );
  });

  test("No parameters in filter function's call ", () => {
    expect(() => {
      myFilter();
    }).toThrow(
      "ERROR function couldn't filter because there is neither callback function nor array"
    );
  });

  test("(Object) parameter in filter function's call with callback ", () => {
    expect(() => {
      myFilter({}, () => 0);
    }).toThrow("Filter function don't accept any object other than array");
  });

  test("Empty array in filter function ", () => {
    const actualOutCome = myFilter([], (word) => word.length > 6);
    const expectedOutCome = [];

    expect(actualOutCome).toEqual(expectedOutCome);
  });

  test("String array in filter function ", () => {
    const actualOutCome = myFilter(words, (word) => word.length > 6);
    const expectedOutCome = words.filter((word) => word.length > 6);

    expect(actualOutCome).toEqual(expectedOutCome);
  });

  test("Object array in filter function ", () => {
    const actualOutCome = myFilter(items, ({ price }) => price > 20);
    const expectedOutCome = items.filter(({ price }) => price > 20);

    expect(actualOutCome).toEqual(expectedOutCome);
  });

  test("Number array in filter function ", () => {
    actualOutCome = myFilter(array, (num) => num > 1);
    expectedOutCome = array.filter((num) => num > 1);

    expect(actualOutCome).toEqual(expectedOutCome);
  });
});

describe("Test cases for myFind function", () => {
  test("(Undefined array) parameter in find function's call with callback ", () => {
    expect(() => {
      myFind(undefined, () => 0);
    }).toThrow(
      "ERROR function couldn't search to find the element because the array is not itialized"
    );
  });

  test("(No callback) parameter in find function's call ", () => {
    expect(() => {
      myFind(array);
    }).toThrow(
      "ERROR function couldn't search to find the element because there is no callback function , undefined is not a functoin"
    );
  });

  test("No parameters in find function's call ", () => {
    expect(() => {
      myFind();
    }).toThrow(
      "ERROR function couldn't search to find the element because there is neither callback function nor array"
    );
  });

  test("(Object) parameter in find function's call with callback ", () => {
    expect(() => {
      myFind({}, () => 0);
    }).toThrow("Find function don't accept any object other than array");
  });

  test("Empty array in find function ", () => {
    actualOutCome = myFind([], (word) => word.length > 6);

    expect(actualOutCome).toBeUndefined();
  });
  test("String array in find function ", () => {
    const actualOutCome = myFind(words, (word) => word.length > 6);
    const expectedOutCome = words.find((word) => word.length > 6);

    expect(actualOutCome).toBe(expectedOutCome);
  });

  test("Object array in find function ", () => {
    const actualOutCome = myFind(items, ({ price }) => price > 20);
    const expectedOutCome = items.find(({ price }) => price > 20);

    expect(actualOutCome).toEqual(expectedOutCome);
  });

  test("Number array in find function ", () => {
    const actualOutCome = myFind(array, (num) => num > 1);
    const expectedOutCome = array.find((num) => num > 1);

    expect(actualOutCome).toBe(expectedOutCome);
  });
});

describe("Test cases for myReduce function", () => {
  test("(Undefined array) parameter in reduce function's call with callback ", () => {
    expect(() => {
      myReduce(undefined, () => 0);
    }).toThrow(
      "ERROR function couldn't reduce because the array is not itialized"
    );
  });

  test("(No callback) parameter in reduce function's call ", () => {
    expect(() => {
      myReduce(array);
    }).toThrow(
      "ERROR function couldn't reduce because there is no callback function , undefined is not a functoin"
    );
  });

  test("No parameters in reduce function's call ", () => {
    expect(() => {
      myReduce();
    }).toThrow(
      "ERROR function couldn't reduce because there is neither callback function nor array"
    );
  });

  test("(Object) parameter in reduce function's call with callback ", () => {
    expect(() => {
      myReduce({}, () => 0);
    }).toThrow("Reduce function don't accept any object other than array");
  });

  test("Empty array in reduce function without initial value ", () => {
    expect(
      myReduce([], (acc, word) => Math.max(acc.length, word.length))
    ).toBeUndefined();
  });

  test("Empty array in reduce function with initial value ", () => {
    expect(
      myReduce([], (acc, word) => Math.max(acc.length, word.length), 0)
    ).toBe(0);
  });

  test("String array in reduce function without initial value ", () => {
    const actualOutCome = myReduce(words, (acc, word) =>
      Math.max(acc.length, word.length)
    );
    const expectedOutCome = words.reduce((acc, word) =>
      Math.max(acc.length, word.length)
    );

    expect(actualOutCome).toBe(expectedOutCome);
  });

  test("String array in reduce function with initial value ", () => {
    const actualOutCome = myReduce(
      words,
      (acc, word) => Math.max(acc, word.length),
      0
    );
    const expectedOutCome = words.reduce(
      (acc, word) => Math.max(acc, word.length),
      0
    );

    expect(actualOutCome).toBe(expectedOutCome);
  });

  test("Object array in reduce function without initial value  ", () => {
    const actualOutCome = myReduce(items, (acc, currentItem) => ({
      price: acc.price + currentItem.price,
    }));
    const expectedOutCome = items.reduce((acc, currentItem) => ({
      price: acc.price + currentItem.price,
    }));

    expect(actualOutCome).toEqual(expectedOutCome);
  });

  test("Object array in reduce function with initial value  ", () => {
    const actualOutCome = myReduce(
      items,
      (acc, currentItem) => acc + currentItem,
      0
    );
    const expectedOutCome = items.reduce(
      (acc, currentItem) => acc + currentItem,
      0
    );

    expect(actualOutCome).toEqual(expectedOutCome);
  });

  test("Number array in reduce function without initial ", () => {
    const actualOutCome = myReduce(array, (sum, current) => sum + current);
    const expectedOutCome = array.reduce((sum, current) => sum + current);

    expect(actualOutCome).toEqual(expectedOutCome);
  });
});

describe("Test cases for myMap function", () => {
  test("(Undefined array) parameter in map function's call with callback ", () => {
    expect(() => {
      myMap(undefined, () => 0);
    }).toThrow(
      "ERROR function couldn't map because the array is not itialized"
    );
  });

  test("(No callback) parameter in map function's call ", () => {
    expect(() => {
      myMap(array);
    }).toThrow(
      "ERROR function couldn't map because there is no callback function , undefined is not a functoin"
    );
  });

  test("No parameters in map function's call ", () => {
    expect(() => {
      myMap();
    }).toThrow(
      "ERROR function couldn't map because there is neither callback function nor array"
    );
  });

  test("(Object) parameter in map function's call with callback ", () => {
    expect(() => {
      myMap({}, () => 0);
    }).toThrow("Map function don't accept any object other than array");
  });

  test("Empty array in filter function ", () => {
    const actualOutCome = myMap([], (word) => word + "!!");
    const expectedOutCome = [];

    expect(actualOutCome).toEqual(expectedOutCome);
  });

  test("String array in map function ", () => {
    actualOutCome = myMap(words, (word) => word + "!!");
    expectedOutCome = words.map((word) => word + "!!");

    expect(actualOutCome).toEqual(expectedOutCome);
  });

  test("Object array in map function ", () => {
    const actualOutCome = myMap(items, (item) =>
      item.price > 20 ? { ...item, price: item.price * 0.99 } : item
    );
    const expectedOutCome = items.map((item) =>
      item.price > 20 ? { ...item, price: item.price * 0.99 } : item
    );

    expect(actualOutCome).toEqual(expectedOutCome);
  });

  test("Number array in map function ", () => {
    const actualOutCome = myMap(array, (num) => Math.abs(num));
    const expectedOutCome = array.map((num) => Math.abs(num));

    expect(actualOutCome).toEqual(expectedOutCome);
  });
});
