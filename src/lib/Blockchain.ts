import { Block } from "./Block"
import Validation from "./Validation"

/**
 * Represents a blockchain.
 */
export default class Blockchain {
  /**
   * The array of blocks in the blockchain.
   */
  blocks: Block[]
  nextIndex: number = 0

  /**
   * Creates a new instance of the Blockchain class.
   */
  constructor() {
    this.blocks = [new Block(0, "000000000", "Genesis Block")]
    this.nextIndex++
  }

  getLastBlock(): Block {
    return this.blocks[this.blocks.length - 1]
  }

  /**
   * Adds a new block to the blockchain.
   * @param block - The block to be added.
   */
  addBlock(block: Block): Validation {
    const lastBlock = this.getLastBlock()
    const validation = block.isValid(lastBlock.hash, lastBlock.index)

    if (!validation.success)
      return new Validation(false, `Invalid block: ${validation.message}`)

    this.blocks.push(block)
    this.nextIndex++

    return new Validation()
  }

  /**
   * Checks if the blockchain is valid.
   * @returns A boolean indicating whether the blockchain is valid or not.
   */
  isValid(): Validation {
    for (let i = this.blocks.length - 1; i > 0; i--) {
      const currentBlock = this.blocks[i]
      const previousBlock = this.blocks[i - 1]

      const validation = currentBlock.isValid(
        previousBlock.hash,
        previousBlock.index
      )

      if (!validation.success) {
        return new Validation(
          false,
          `Invalid block: #${currentBlock.index}: ${validation.message}`
        )
      }
    }

    return new Validation()
  }
}
