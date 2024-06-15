import { describe, test, expect } from "@jest/globals"
import Blockchain from "./Blockchain"
import { Block } from "./Block"

describe("Blockchain tests", () => {
  test("Should has genesis block", () => {
    const blockchain = new Blockchain()
    expect(blockchain.blocks.length).toEqual(1)
  })

  test("Should add a new block to the blockchain", () => {
    const blockchain = new Blockchain()
    const block = new Block(1, "abc", "This is a test")
    blockchain.addBlock(block)
    expect(blockchain.blocks).toContain(block)
  })

  test("Should check if the blockchain is valid", () => {
    const blockchain = new Blockchain()
    const block1 = new Block(1, "abc", "This is a test")
    const block2 = new Block(2, "def", "This is a test")
    blockchain.addBlock(block1)
    blockchain.addBlock(block2)
    const isValid = blockchain.isValid()
    expect(isValid).toBeTruthy()
  })

  test("Should check if the blockchain is NOT valid (invalid previousHash)", () => {
    const blockchain = new Blockchain()
    const block1 = new Block(1, "abc", "This is a test")
    const block2 = new Block(2, "", "This is a test")
    blockchain.addBlock(block1)
    blockchain.addBlock(block2)
    const isValid = blockchain.isValid()
    expect(isValid).toBeFalsy()
  })

  test("Should check if the blockchain is NOT valid (invalid index)", () => {
    const blockchain = new Blockchain()
    const block1 = new Block(1, "abc", "abcThis is a test")
    const block2 = new Block(3, "cvs", "def2: This is a test")
    blockchain.addBlock(block1)
    blockchain.addBlock(block2)
    const isValid = blockchain.isValid()
    expect(isValid).toBeFalsy()
  })
})
