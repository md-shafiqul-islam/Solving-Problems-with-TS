## 1. What are some differences between interfaces and types in TypeScript?
- Typescript-এ আমরা অবজেক্টের টাইপ ডিফাইন করতে type-alias বা interface ব্যাবহার করি। কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে:

### i) Declaration Merging
- **Interface**: একাধিকবার declare করা যায়, TypeScript তাদের একত্রিত করে।
- **Type alias**: একবার declare করার পর আবার declare করলে error দেয়।
### ii) Extending / Implementing
- **Interface**: সহজে extend করা যায় এবং class implement করতে পারে। 
- **Type alias**: extend করা যায়, কিন্তু class implement করতে হলে interface ব্যবহার বেশি practical।
### iii) Complex Types
- **Interface**: মূলত অবজেক্ট বা class এর structure define করার জন্য।
- **Type alias**: union, intersection, tuple, primitive সব ধরনের type বানানো যায়।

## 2. What is the use of the keyof keyword in TypeScript?
- keyof ব্যবহার করা হয় কোন অবজেক্ট টাইপের সমস্ত key-গুলোকে type হিসেবে বের করতে।

উদাহরণ:
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; 
// PersonKeys হবে "name" | "age"

const key1: PersonKeys = "name"; // Right
const key2: PersonKeys = "age"; // Right
const key3: PersonKeys = "gender"; // Wrong


### ব্যবহারিক সুবিধা:
- keyof দিয়ে আমরা type-safe ভাবে অবজেক্টের key নির্বাচন বা dynamic access করতে পারি।

উদাহরণ:
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person: Person = { name: "Rafiq", age: 25 };
const personName = getProperty(person, "name"); // type: string

## 3. Explain the difference between any, unknown, and never types in TypeScript.
### i) any
- any হল “আমি টাইপ জানি না, TypeScript কে কিছু বলার দরকার নেই” টাইপ।
- কোনো ধরনের value assign করা যায়, কোনো restrictions নেই।
- type safety হারায়।

### ii) unknown
- unknown হল safer version of any।
- unknown টাইপের variable ব্যবহার করার আগে TypeScript-কে নিশ্চিত করতে হবে যে আপনি কোন operation করতে চান।
- Type-checking প্রয়োজন।

### iii) never
- never ব্যবহার করা হয় এমন function বা variable এর জন্য যা কখনো return করে না।

## 4. What is the use of enums in TypeScript?
- enum ব্যবহার করা হয় সংজ্ঞায়িত সেটের নাম/সংখ্যা assign করতে।

### i) Numeric enum
উদাহরণ:
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Direction.Up);    // 1
console.log(Direction.Right); // 4 (automatically incremented)

### ii) String enum
উদাহরণ:
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

console.log(Color.Red);   // "RED"
console.log(Color.Green); // "GREEN"

- Numeric enums auto increment করে, string enums explicit assign করা লাগে।
- Enums type-safe constant values দেয়।

## 5. Provide an example of using union and intersection types in TypeScript.
### i) Union type ( | )
- Union type মানে একাধিক টাইপের যেকোনো একটি হতে পারে।

উদাহরণ:
type ID = string | number;

let userId: ID;
userId = "abc123";
userId = 456;

### ii) Intersection type ( & )
- Intersection type মানে সব টাইপের combined property থাকতে হবে।

উদাহরণ:
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staff1: Staff = {
  name: "Rafiq",
  employeeId: 101
}; // must have both name and employeeId
