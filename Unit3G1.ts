/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-10
 * @fileoverview This program reads a number of cents and converts it
 * into the number of dollars and cents using integer arithmetic.
 */

// Constants
const CENTS_IN_DOLLAR: number = 100;

// Process
const totalCentsAsString: string = prompt("Input the cents please:") || "0";
const totalCents: number = parseInt(totalCentsAsString);
const dollars: number = Math.floor(totalCents / CENTS_IN_DOLLAR);
const cents: number = totalCents % CENTS_IN_DOLLAR;

// Output
console.log("That is " + dollars + " dollars and " + cents + " cents");
console.log("\nDone.");
