/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-10
 * @fileoverview This program reads a number of cents and converts it
 * into the number of dollars and cents using integer arithmetic.
 */

// Constants
const CENTS_IN_DOLLAR: number = 100;

// Variables
let totalCentsAsString: string;
let totalCents: number;
let dollars: number;
let cents: number;

// Input
totalCentsAsString = prompt("Input the cents please:") || "0";
totalCents = parseInt(totalCentsAsString);

// Process
dollars = Math.floor(totalCents / CENTS_IN_DOLLAR);
cents = totalCents % CENTS_IN_DOLLAR;

// Output
console.log("That is " + dollars + " dollars and " + cents + " cents");
console.log("\nDone.");
