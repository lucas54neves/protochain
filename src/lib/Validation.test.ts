import { describe, test, expect } from "@jest/globals"
import Validation from "./Validation"

describe("Validation tests", () => {
  test("Should create a new Validation instance with default values", () => {
    const validation = new Validation()
    expect(validation.success).toBeTruthy()
    expect(validation.message).toBe("")
  })

  test("Should create a new Validation instance with custom values", () => {
    const success = false
    const message = "Validation failed"
    const validation = new Validation(success, message)
    expect(validation.success).toBe(success)
    expect(validation.message).toBe(message)
  })
})
