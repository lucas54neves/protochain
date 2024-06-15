import { describe, test, expect } from "@jest/globals"
import Blockchain from "./Blockchain"
import { Block } from "./Block"

describe("Blockchain tests", () => {
  test("Should has genesis block", () => {
    const blockchain = new Blockchain()
    expect(blockchain.blocks.length).toEqual(1)
  })

  test("Should be valid (genesis)", () => {
    const blockchain = new Blockchain()
    expect(blockchain.isValid()).toBeTruthy()
  })

  test("Should be valid (two blocks)", () => {
    const blockchain = new Blockchain()
    const block = new Block(1, blockchain.blocks[0].hash, "This is a test")
    blockchain.addBlock(block)
    expect(blockchain.isValid()).toBeTruthy()
    expect(blockchain.blocks.length).toBe(2)
  })

  test("Should NOT be valid (two blocks)", () => {
    const blockchain = new Blockchain()
    const block = new Block(1, blockchain.blocks[0].hash, "This is a test")
    blockchain.addBlock(block)
    blockchain.blocks[1].data = "This is a hack"
    expect(blockchain.isValid()).toBeFalsy()
    expect(blockchain.blocks.length).toBe(2)
  })

  test("Should add a new block to the blockchain", () => {
    const blockchain = new Blockchain()
    const block = new Block(1, blockchain.blocks[0].hash, "This is a test")
    const result = blockchain.addBlock(block)
    expect(result).toBeTruthy()
    expect(blockchain.blocks).toContain(block)
  })

  test("Should NOT add a new block to the blockchain", () => {
    const blockchain = new Blockchain()
    const block = new Block(-1, blockchain.blocks[0].hash, "This is a test")
    const result = blockchain.addBlock(block)
    expect(result).toBeFalsy()
  })
})
