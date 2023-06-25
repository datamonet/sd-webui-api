import { type Sharp } from "sharp";
/**
 * Converts an image buffer to base64
 *
 * @param {Buffer} image image buffer to convert to base64
 * @param {boolean} raw if true, returns the raw base64 string, if false, returns a data url with the base64 string
 * @returns {Promise<string>} base64 encoded image
 */
export declare function toBase64(image: Sharp, raw?: boolean): Promise<string>;
