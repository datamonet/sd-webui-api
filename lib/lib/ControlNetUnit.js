"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlNetUnit = void 0;
var base64_1 = require("../utils/base64");
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
var ControlNetUnit = /** @class */ (function () {
    function ControlNetUnit(config) {
        this.config = config;
    }
    ControlNetUnit.prototype.toJson = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __awaiter(this, void 0, void 0, function () {
            var input_image, mask, _o;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0: return [4 /*yield*/, (0, base64_1.toBase64)(this.config.input_image)];
                    case 1:
                        input_image = _p.sent();
                        _o = this.config.mask;
                        if (!_o) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, base64_1.toBase64)(this.config.mask)];
                    case 2:
                        _o = (_p.sent());
                        _p.label = 3;
                    case 3:
                        mask = _o;
                        return [2 /*return*/, {
                                input_image: input_image,
                                mask: mask,
                                module: (_a = this.config.module) !== null && _a !== void 0 ? _a : "none",
                                model: (_b = this.config.model) !== null && _b !== void 0 ? _b : "None",
                                weight: (_c = this.config.weight) !== null && _c !== void 0 ? _c : 1,
                                resize_mode: (_d = this.config.resize_mode) !== null && _d !== void 0 ? _d : "Scale to Fit (Inner Fit)",
                                lowvram: (_e = this.config.lowvram) !== null && _e !== void 0 ? _e : false,
                                processor_res: (_f = this.config.processor_res) !== null && _f !== void 0 ? _f : 64,
                                threshold_a: (_g = this.config.threshold_a) !== null && _g !== void 0 ? _g : 64,
                                threshold_b: (_h = this.config.threshold_b) !== null && _h !== void 0 ? _h : 64,
                                guidance: (_j = this.config.guidance) !== null && _j !== void 0 ? _j : 1,
                                guidance_start: (_k = this.config.guidance_start) !== null && _k !== void 0 ? _k : 0,
                                guidance_end: (_l = this.config.guidance_end) !== null && _l !== void 0 ? _l : 1,
                                guessmode: (_m = this.config.guessmode) !== null && _m !== void 0 ? _m : false,
                            }];
                }
            });
        });
    };
    return ControlNetUnit;
}());
exports.ControlNetUnit = ControlNetUnit;
