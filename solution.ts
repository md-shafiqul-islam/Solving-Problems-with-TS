// problem - 1
type InputType = string | number | boolean;

const formatValue = (input: InputType): InputType => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return !input;
  }
};

// problem - 2
type InputType1 = string | unknown[];

const getLength = (input: InputType1): number => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
};

// problem - 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// problem - 4
type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
  const filteredArray = items.filter((item) => item.rating >= 4);
  return filteredArray;
};

// problem - 5
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  const activeUsers = users.filter((user) => user.isActive === true);
  return activeUsers;
};

// problem - 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  return console.log(
    `Title: ${book["title"]}, Author: ${book["author"]}, Published: ${book["publishedYear"]}, Available: ${book["isAvailable"] ? "Yes" : "No"}`,
  );
};

// problem - 7
type ArrayType = number | string;

const getUniqueValues = (arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] => {
  const newArray: ArrayType[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!newArray.includes(arr1[i])) {
      newArray.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!newArray.includes(arr2[i])) {
      newArray.push(arr2[i]);
    }
  }

  return newArray;
};

// problem - 8
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (product: Product[]): number => {
  return product.reduce((total, item) => {
    const discount = item.discount ?? 0;
    const itemTotal = item.price * item.quantity * (1 - discount / 100);
    return total + itemTotal;
  }, 0);
};
