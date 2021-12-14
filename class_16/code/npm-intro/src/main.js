// Import code from math.js in the current directory
// There's something called add and subtract that are exported
// Make add and subtract accessible in this file
import { add, subtract } from "./maths";

// Get the default export from ./greet.js
// Call it sayHello and make it accessible here
import sayHello from "./greet";

import fetchWeather from "./api";

add(5, 3);
subtract(10, 7);

sayHello();

fetchWeather();
