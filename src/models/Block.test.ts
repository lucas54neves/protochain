import { describe } from "@jest/globals"
import { Block } from "./Block"

describe("Block tests", () => {
  test("Should be valid", () => {
    const block = new Block(1, "abc", "This is a test")
    const isValid = block.isValid()
    expect(isValid).toBeTruthy()
  })

  test("Should NOT be valid (hash)", () => {
    const block = new Block(1, "abc", "This is a test")
    block.hash = ""
    const isValid = block.isValid()
    expect(isValid).toBeFalsy()
  })

  test("Should NOT be valid (previousHash)", () => {
    const block = new Block(1, "", "This is a test")
    const isValid = block.isValid()
    expect(isValid).toBeFalsy()
  })

  test("Should NOT be valid (index)", () => {
    const block = new Block(-1, "", "abc")
    const isValid = block.isValid()
    expect(isValid).toBeFalsy()
  })

  test("Should NOT be valid (data)", () => {
    const block = new Block(1, "abc", "")
    const isValid = block.isValid()
    expect(isValid).toBeFalsy()
  })

  test("Should NOT be valid (timestamp)", () => {
    const block = new Block(1, "abc", "This is a test")
    block.timestamp = -1
    const isValid = block.isValid()
    expect(isValid).toBeFalsy()
  })
})
