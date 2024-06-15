import { describe } from "@jest/globals"
import { Block } from "./Block"

describe("Block tests", () => {
  test("Should be valid", () => {
    const block = new Block(1, "abc")
    const isValid = block.isValid()

    expect(isValid).toBeTruthy()
  })

  test("Should NOT be valid (hash)", () => {
    const block = new Block(1, "")
    const isValid = block.isValid()

    expect(isValid).toBeFalsy()
  })

  test("Should NOT be valid (index)", () => {
    const block = new Block(-1, "abc")
    const isValid = block.isValid()

    expect(isValid).toBeFalsy()
  })
})
