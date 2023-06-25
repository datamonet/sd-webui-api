import { ControlNetDetectOptions } from "../types";
import StableDiffusionResult from "./StableDiffusionResult";
import { StableDiffusionApi } from "./StableDiffusionApi";
/**
 * @class ControlNetApi
 * @classdesc ControlNet API, a translation layer for Mikubill's ControlNet API
 * @param {StableDiffusionApi} Stable Diffusion parent API
 */
export declare class ControlNetApi {
    private sd;
    constructor(sd: StableDiffusionApi);
    /**
     * Uses the selected ControlNet proprocessor module to predict a detection
     * on the input image
     * @param {ControlNetDetectOptions} options
     * @returns {Promise<StableDiffusionResult>} ApiResult with the detection result
     * @example
     * const api = new StableDiffusionApi();
     * const image = sharp("image.png");
     *
     * const result = await api.controlnet.detect({
     *   controlnet_input_images: [image],
     *   controlnet_module: "depth",
     *   controlnet_processor_res: 512,
     *   controlnet_threshold_a: 64,
     *   controlnet_threshold_b: 64,
     * });
     *
     * result.image.toFile("result.png");
     */
    detect(options: ControlNetDetectOptions): Promise<StableDiffusionResult>;
    /**
     * Returns a list of available ControlNet models
     * @returns {Promise<string[]>} List of available ControlNet models
     */
    getModels(): Promise<string[]>;
    /**
     * Returns a list of available ControlNet modules
     * @returns {Promise<string[]>} List of available ControlNet modules
     */
    getModules(): Promise<string[]>;
}
