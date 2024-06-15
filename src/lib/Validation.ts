/**
 * Represents a validation result.
 */
export default class Validation {
  /**
   * Indicates whether the validation was successful or not.
   */
  success: boolean

  /**
   * The message associated with the validation result.
   */
  message: string

  /**
   * Creates a new Validation instance.
   * @param success - Indicates whether the validation was successful or not. Default is true.
   * @param message - The message associated with the validation result. Default is an empty string.
   */
  constructor(success: boolean = true, message: string = "") {
    this.success = success
    this.message = message
  }
}
