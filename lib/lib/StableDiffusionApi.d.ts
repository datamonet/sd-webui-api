import { type ExtraBatchOptions, type ExtraSingleOptions, type Img2ImgOptions, type StableDiffusionApiConfig, type Txt2ImgOptions, type PromptStyle, type RealESRGanModel, type FaceRestorer, type HyperNetwork, type StableDiffusionModel, type Upscaler, type Sampler, type Progress } from "../types";
import { type Sharp } from "sharp";
import StableDiffusionResult from "./StableDiffusionResult";
import { ControlNetApi } from "./ControlNetApi";
/**
 * @class StableDiffusionApi
 * @classdesc Stable Diffusion API, a translation layer for [Automatic1111's Stable Diffusion API](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
 * @param {StableDiffusionApiConfig} config - Configuration object
 * @property {StableDiffusionApiConfig} config - Configuration object
 * @property {axios.AxiosInstance} api - Axios instance
 * @property {ControlNetApi} controlNet - ControlNet API
 * @example
 * const api = new StableDiffusionApi()
 * const result = await api.txt2img({
 *   prompt: "A computer that has more brain power than a human being",
 *   batch_size: 2,
 * })
 *
 * // Save the first image
 * result.image.toFile("result.png")
 *
 * // Save all images
 * result.images.forEach((image, i) => {
 *   image.toFile(`result_${i}.png`)
 * })
 */
export declare class StableDiffusionApi {
    config: {
        host: string;
        port: number | null;
        protocol: "http" | "https";
        timeout: number;
        baseUrl: string | null;
        defaultSampler: string;
        defaultStepCount: number;
    };
    api: import("axios").AxiosInstance;
    constructor({ host, port, protocol, timeout, baseUrl, defaultSampler, defaultStepCount, }?: StableDiffusionApiConfig | undefined);
    /**
     * Set the authentication for the axios API
     * @param {string} username
     * @param {string} password
     * @returns {StableDiffusionApi} this StableDiffusionApi instance
     */
    setAuth(username: string, password: string): StableDiffusionApi;
    /**
     * Stable Diffusion txt2img call
     * @param {Txt2ImgOptions} options
     * @returns {Promise<StableDiffusionResult>} ApiResult containing the generated image(s)
     * @memberof StableDiffusionApi
     * @async
     * @example
     * const api = new StableDiffusionApi();
     * const result = await api.txt2img({
     *   prompt: "An angry artist that claims that the Stable Diffusion model contains an exact copy of their artwork",
     * });
     */
    txt2img(options: Txt2ImgOptions): Promise<StableDiffusionResult>;
    /**
     * Stable Diffusion img2img call
     * @param {Img2ImgOptions} options Options for the img2img call
     * @returns {Promise<StableDiffusionResult>} ApiResult containing the generated image(s)
     * @memberof StableDiffusionApi
     * @async
     * @example
     * const api = new StableDiffusionApi();
     * const init_image = sharp("dog.png");
     * const result = await api.img2img({
     *   init_images: [init_image],
     *   prompt: "Just a funky disco dog",
     * });
     */
    img2img(options: Img2ImgOptions): Promise<StableDiffusionResult>;
    /**
     * Stable Diffusion extra's call for single images
     * @param {ExtraSingleOptions} options Options for the extra's call
     * @returns {Promise<StableDiffusionResult>} ApiResult containing the generated image(s)
     * @memberof StableDiffusionApi
     * @async
     * @example
     * const api = new StableDiffusionApi();
     * const image = sharp("dog.png");
     * const result = await api.extraSingle({
     *   image,
     *   upscaler_1: "Lanczos",
     *   upscaling_resize: 2,
     * });
     */
    extraSingle(options: ExtraSingleOptions): Promise<StableDiffusionResult>;
    /**
     * Stable Diffusion extra's call for batch images
     * @param {ExtraBatchOptions} batchOptions Options for the extra's call
     * @returns {Promise<StableDiffusionResult>} ApiResult containing the generated image(s)
     * @memberof StableDiffusionApi
     * @async
     * @example
     * const api = new StableDiffusionApi();
     * const image1 = sharp("dog.png");
     * const image2 = sharp("cat.png");
     * const result = await api.extraBatch({
     *   images: [image1, image2],
     *   name_list: ["dog", "cat"],
     *   upscaler_1: "Lanczos",
     *   upscaling_resize: 2,
     * });
     */
    extraBatch(options: ExtraBatchOptions): Promise<StableDiffusionResult>;
    /**
     * Gets the info of a png image
     * @param {Sharp} image Image to get info from
     * @returns {Promise<StableDiffusionResult>} ApiResult containing the info
     */
    pngInfo(image: Sharp): Promise<StableDiffusionResult>;
    /**
     * Interrogates an image with an interrogation model
     * @param {Sharp} image Image to interrogate
     * @param model Model to use for interrogation
     * @returns {Promise<StableDiffusionResult>} The result of the interrogation
     */
    interrogate(image: Sharp, model: string): Promise<StableDiffusionResult>;
    getOptions(): Promise<any>;
    setOptions(options: any): Promise<any>;
    /**
     * Gets the progress status of the current session
     * @param {boolean} skipCurrentImage True to skip the current image, false to include it
     * @returns {Promise<Progress>} The progress status of the current session
     */
    getProgress(skipCurrentImage?: boolean): Promise<Progress>;
    /**
     * Gets the list of command line flags that are available
     * @returns {Promise<Record<string, unknown>>} The list of command line flags that are available
     */
    getCmdFlags(): Promise<Record<string, unknown>>;
    /**
     * Gets the list of samplers
     * @returns {Promise<Sampler[]>} The list of samplers
     */
    getSamplers(): Promise<Sampler[]>;
    /**
     * Gets the list of upscalers
     * @returns {Promise<Upscaler[]>} The list of upscalers
     */
    getUpscalers(): Promise<Upscaler[]>;
    /**
     * Gets the list of Stable Diffusion models
     * @returns {Promise<StableDiffusionModel[]>} The list of Stable Diffusion models
     */
    getSdModels(): Promise<StableDiffusionModel[]>;
    /**
     * Gets the list of hypernetworks
     * @returns {Promise<HyperNetwork[]>} The list of hypernetworks
     */
    getHypernetworks(): Promise<HyperNetwork[]>;
    /**
     * Gets the list of face restorers
     * @returns {Promise<FaceRestorer[]>} The list of face restorers
     */
    getFaceRestorers(): Promise<FaceRestorer[]>;
    /**
     * Gets the list of Real-ESRGAN models
     * @returns {Promise<RealESRGanModel[]>} The list of Real-ESRGAN models
     */
    getRealesrganModels(): Promise<RealESRGanModel[]>;
    /**
     * Gets the list of Stable Diffusion prompt styles
     * @returns {Promise<PromptStyle[]>} The list of prompt styles
     */
    getPromptStyles(): Promise<PromptStyle[]>;
    /**
     * Refreshes the list of Stable Diffusion checkpoints
     * @returns {Promise<void>}
     */
    refreshCheckpoints(): Promise<void>;
    /**
     * Gets the name of the current Stable Diffusion checkpoint being used
     * @returns {Promise<string>} The name of the current Stable Diffusion checkpoint being used
     */
    getCurrentModel(): Promise<string>;
    /**
     * Sets the Stable Diffusion checkpoint to use
     * @param name Name of the model to set.
     * @param findClosest If true, will try to find the closest model name if the exact name is not found
     * @returns {Promise<void>}
     */
    setModel(name: string, findClosest?: boolean): Promise<void>;
    /**
     * Waits for the Stable Diffusion server to be ready to accept new requests
     * @param checkInterval Interval in seconds to check progress
     * @returns {Promise<boolean>} Only resolves when progress is 0.0 and job_count is 0
     */
    waitForReady(checkInterval?: number): Promise<boolean>;
    ControlNet: ControlNetApi;
}
