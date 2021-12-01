// import data

// convert into array

// instatiate counter

// iterate over array

// each time a value is more than previous one, increment counter


import { readFileSync } from 'fs';

const depths = readFileSync('depths.dat').toString().split("\n").map((x) => {return parseInt(x)});

let increases = 0;
let previous_depth = depths.shift(0);

function noop() {};


function test_depth(x, y, counter) {
  y > x ? increases++ : noop();
  previous_depth = y
}

depths.forEach((x) => test_depth(previous_depth, x, increases))

console.log(increases);
