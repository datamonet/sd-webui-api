import { AxiosApiRawResponse as StableDiffusionApiRawResponse } from "../types";
import * as sharp from "sharp";
/**
 * @class StableDiffusionResult
 * @classdesc Result of a Stable Diffusion image processing API call
 * @param {StableDiffusionApiRawResponse} Raw axios response
 * @property {sharp.Sharp} image - First sharp image from the result list
 * @property {sharp.Sharp[]} images - List of sharp images
 * @property {any} info - Info object
 * @property {any} parameters - Parameters object
 * @property {AxiosApiRawResponse} response - Raw response from the API
 * @example
 * const api = new StableDiffusionApi()
 * const result = await api.txt2img({
 *   prompt: "The brain of a computer",
 * })
 *
 * // Save the first image
 * result.image.toFile("result.png")
 *
 * // Save all images
 * result.images.map((image, i) => {
 *   image.toFile(`result_${i}.png`)
 * })
 */
export default class StableDiffusionResult {
    response: StableDiffusionApiRawResponse;
    images: sharp.Sharp[];
    info: any;
    parameters: any;
    constructor(response: StableDiffusionApiRawResponse);
    private addImage;
    /**
     * First sharp image from the result list, or undefined if no images
     * @returns {sharp.Sharp} First sharp image from the result list
     */
    get image(): sharp.Sharp;
}
