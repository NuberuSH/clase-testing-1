import { describe, it, expect } from "vitest";
import { calculateSum } from "./src/calculateSum.js"

describe("Calculate string sum", () =>{
  it("when you only pass 1 number returns the number", () =>{
    const result = calculateSum("1")
    expect(result).toEqual(1);
  });

  it("when you pass two numbers returns the sum of them", () => {
    const result = calculateSum("1,2")
    expect(result).toEqual(3);
  });

  it("when you pass two numbers returns the sum of them", () => {
    const result = calculateSum("2,2")
    expect(result).toEqual(4);
  });

  it("when you pass three numbers returns the sum of them", () => {
    const result = calculateSum("1,2,3")
    expect(result).toEqual(6);
  });

  it("when you pass four numbers returns the sum of them", () => {
    const result = calculateSum("2,6,9,5")
    expect(result).toEqual(22);
  });

  it("when you pass any numbers returns the sum of them", () => {
    const result = calculateSum("2,6,9,5,7,4,8")
    expect(result).toEqual(41);
  });

  it("when you pass any numbers returns the sum of them, no matters if the are sepparated by commas or new lines", () => {
   const result = calculateSum("1\n2,3")
   expect(result).toEqual(6);
  });


})


// calculateSum("1") => 1
// calculateSum("1,2") => 3
// calculateSum("2,2") => 4

/**
Allow the Add method to handle new lines between numbers (instead of commas).
the following input is ok: “1\n2,3” (will equal 6)
the following input is NOT ok: “1,\n” (not need to prove it - just clarifying)

calculateSum("1\n2,3") -> 6
 */