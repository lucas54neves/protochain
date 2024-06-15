import sha256 from "crypto-js/sha256"

/**
 * Represents a block in the blockchain.
 */
export class Block {
  index: number
  timestamp: number
  hash: string
  previousHash: string
  data: any

  /**
   * Creates a new instance of the Block class.
   * @param index - The index of the block.
   * @param previousHash - The hash of the previous block.
   * @param data - The data stored in the block.
   */
  constructor(index: number, previousHash: string, data: any) {
    this.index = index
    this.timestamp = Date.now()
    this.previousHash = previousHash
    this.data = data
    this.hash = this.getHash()
  }

  /**
   * Calculates the hash of the block.
   * @returns The hash of the block.
   */
  getHash(): string {
    return sha256(
      this.index + this.previousHash + this.timestamp + this.data
    ).toString()
  }

  /**
   * Checks if the block is valid.
   * @returns True if the block is valid, false otherwise.
   */
  isValid(previousHash: string, previousIndex: number): boolean {
    if (previousIndex !== this.index - 1) return false
    if (this.hash !== this.getHash()) return false
    if (!this.data) return false
    if (this.timestamp < 1) return false
    if (this.previousHash !== previousHash) return false
    return true
  }
}
