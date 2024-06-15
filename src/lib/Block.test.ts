import { describe } from "@jest/globals"
import { Block } from "./Block"

describe("Block tests", () => {
  let genesis: Block

  beforeAll(() => {
    genesis = new Block(0, "000000000", "Genesis Block")
  })

  test("Should be valid", () => {
    const block = new Block(1, genesis.hash, "This is a test")
    const isValid = block.isValid(genesis.hash, genesis.index)
    expect(isValid.success).toBeTruthy()
  })

  test("Should NOT be valid (hash)", () => {
    const block = new Block(1, genesis.hash, "This is a test")
    block.hash = ""
    const isValid = block.isValid(genesis.hash, genesis.index)
    expect(isValid.success).toBeFalsy()
  })

  test("Should NOT be valid (previousHash)", () => {
    const block = new Block(1, "", "This is a test")
    const isValid = block.isValid(genesis.hash, genesis.index)
    expect(isValid.success).toBeFalsy()
  })

  test("Should NOT be valid (index)", () => {
    const block = new Block(-1, genesis.hash, "abc")
    const isValid = block.isValid(genesis.hash, genesis.index)
    expect(isValid.success).toBeFalsy()
  })

  test("Should NOT be valid (data)", () => {
    const block = new Block(1, genesis.hash, "")
    const isValid = block.isValid(genesis.hash, genesis.index)
    expect(isValid.success).toBeFalsy()
  })

  test("Should NOT be valid (timestamp)", () => {
    const block = new Block(1, genesis.hash, "This is a test")
    block.timestamp = -1
    block.hash = block.getHash()
    const isValid = block.isValid(genesis.hash, genesis.index)
    expect(isValid.success).toBeFalsy()
  })
})
