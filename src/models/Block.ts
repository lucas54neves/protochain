/**
 * Represents a block in the blockchain.
 */
export class Block {
  index: number
  hash: string

  /**
   * Creates a new instance of the Block class.
   * @param index - The index of the block.
   * @param hash - The hash of the block.
   */
  constructor(index: number, hash: string) {
    this.index = index
    this.hash = hash
  }

  /**
   * Checks if the block is valid.
   * @returns True if the block is valid, false otherwise.
   */
  isValid(): boolean {
    if (this.index < 0) {
      return false
    }

    if (!this.hash) {
      return false
    }

    return true
  }
}
