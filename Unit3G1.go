// Author: William Provost
// Version: 1.0.0
// Date: 2025-11-10
// Fileoverview: This program reads a number of cents and converts it
// into the number of dollars and cents using integer arithmetic.

package main

import "fmt"

func main() {
    // constants
    const CENTSINDOLLAR int = 100

    // variables
    var totalCents int
    var dollars int
    var cents int

    // input
    fmt.Print("Input the cents please: ")
    fmt.Scan(&totalCents)

    // process
    dollars = totalCents / CENTSINDOLLAR
    cents = totalCents % CENTSINDOLLAR

    // output
    fmt.Printf("That is %d dollars and %d cents\n", dollars, cents)
    fmt.Println("\nDone.")
}

