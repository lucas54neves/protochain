import { Block } from "./Block"

/**
 * Represents a blockchain.
 */
export default class Blockchain {
  /**
   * The array of blocks in the blockchain.
   */
  blocks: Block[]

  /**
   * Creates a new instance of the Blockchain class.
   */
  constructor() {
    this.blocks = [new Block(0, "000000000", "Genesis Block")]
  }

  /**
   * Adds a new block to the blockchain.
   * @param block - The block to be added.
   */
  addBlock(block: Block): void {
    this.blocks.push(block)
  }

  /**
   * Checks if the blockchain is valid.
   * @returns A boolean indicating whether the blockchain is valid or not.
   */
  isValid(): boolean {
    for (let i = this.blocks.length - 1; i > 0; i--) {
      const currentBlock = this.blocks[i]

      if (!currentBlock.isValid()) {
        return false
      }

      const previousBlock = this.blocks[i - 1]

      if (currentBlock.index !== previousBlock.index + 1) {
        return false
      }
    }

    return true
  }
}
