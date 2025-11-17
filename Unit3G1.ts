/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-10
 * @fileoverview This program reads a number of cents and converts it
 * into the number of dollars and cents using integer arithmetic.
 */

// constants
const CENTS_IN_DOLLAR: number = 100;

// variables
let totalCentsAsString: string;
let totalCents: number;
let dollars: number;
let cents: number;

// input
totalCentsAsString = prompt("Input the cents please:") || "0";
totalCents = parseInt(totalCentsAsString);

// process
dollars = Math.floor(totalCents / CENTS_IN_DOLLAR);
cents = totalCents % CENTS_IN_DOLLAR;

// output
console.log("That is " + dollars + " dollars and " + cents + " cents");
console.log("\nDone.");
