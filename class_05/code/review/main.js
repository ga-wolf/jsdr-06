function add(x, y) {
  let res = x + y;
  return res;
}

let result = add(10, 5); // call-site

function reduce(nums) {
  // Turn the nums array into a single value by adding the items
  // Create a variable (called total) that starts at the number 0
  // Iterate through the nums array and add the current number to total
  let total = 0;
  for (let i = 0; i < nums.length; i += 1) {
    let currentNum = nums[i];
    total += currentNum;
  }
  console.log(total);
}

reduce([1, 2, 3]);
reduce([5, 6, 7, 8]);

let personOne = {
  firstName: "David",
  middleName: "Frederick",
  lastName: "Attenborough",
};

let personTwo = {
  firstName: "Jane",
  lastName: "Goodall",
};

function printFullName(person) {
  // let middle = "";
  // if (person.middleName) {
  //   middle = person.middleName;
  // }
  let middle = person.middleName || "";
  let name = person.firstName + " " + middle + " " + person.lastName;
  console.log(name);
}

printFullName(personOne);
printFullName(personTwo);
printFullName({
  firstName: "Robert",
  lastName: "Brown",
});
printFullName({
  firstName: "Jack",
  middleName: "E",
  lastName: "Jeffress",
});
