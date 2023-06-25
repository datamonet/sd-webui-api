import { ControlNetUnitConfig } from "../types";
/**
 * @class ControlNetUnit
 * @classdesc ControlNet Unit, a translation layer for [Mikubill's ControlNet API](https://github.com/Mikubill/sd-webui-controlnet)
 * @param {ControlNetUnitConfig} config Configuration for the ControlNet Unit
 * @example
 * const api = new StableDiffusionApi();
 * const image = sharp("image.png");
 *
 * const unit = new ControlNetUnit({
 *   input_image: image,
 *   module: "depth",
 *   model: "depth",
 * });
 *
 * const result = await api.txt2img({
 *   prompt: "Someone who pretends to be a world-renowned artist, but is actually a random person who prompts text and presses buttons",
 *   init_images: [image],
 *   controlnet_units: [unit],
 * })
 *
 * result.image.toFile("result.png");
 */
export declare class ControlNetUnit {
    config: ControlNetUnitConfig;
    constructor(config: ControlNetUnitConfig);
    toJson(): Promise<{
        readonly input_image: string;
        readonly mask: string | undefined;
        readonly module: string;
        readonly model: string;
        readonly weight: number;
        readonly resize_mode: "Scale to Fit (Inner Fit)";
        readonly lowvram: boolean;
        readonly processor_res: number;
        readonly threshold_a: number;
        readonly threshold_b: number;
        readonly guidance: number;
        readonly guidance_start: number;
        readonly guidance_end: number;
        readonly guessmode: boolean;
    }>;
}
