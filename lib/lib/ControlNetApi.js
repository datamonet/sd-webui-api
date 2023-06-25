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
exports.ControlNetApi = void 0;
var base64_1 = require("../utils/base64");
var StableDiffusionResult_1 = require("./StableDiffusionResult");
/**
 * @class ControlNetApi
 * @classdesc ControlNet API, a translation layer for Mikubill's ControlNet API
 * @param {StableDiffusionApi} Stable Diffusion parent API
 */
var ControlNetApi = /** @class */ (function () {
    function ControlNetApi(sd) {
        this.sd = sd;
    }
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
    ControlNetApi.prototype.detect = function (options) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var input_images, response;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, Promise.all(options.controlnet_input_images.map(function (image) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, base64_1.toBase64)(image)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                    case 1:
                        input_images = _e.sent();
                        return [4 /*yield*/, this.sd.api.post("/controlnet/detect", {
                                controlnet_module: (_a = options.controlnet_module) !== null && _a !== void 0 ? _a : "none",
                                controlnet_input_images: input_images,
                                controlnet_processor_res: (_b = options.controlnet_processor_res) !== null && _b !== void 0 ? _b : 512,
                                controlnet_threshold_a: (_c = options.controlnet_threshold_a) !== null && _c !== void 0 ? _c : 64,
                                controlnet_threshold_b: (_d = options.controlnet_threshold_b) !== null && _d !== void 0 ? _d : 64,
                            })];
                    case 2:
                        response = _e.sent();
                        return [2 /*return*/, new StableDiffusionResult_1.default(response)];
                }
            });
        });
    };
    /**
     * Returns a list of available ControlNet models
     * @returns {Promise<string[]>} List of available ControlNet models
     */
    ControlNetApi.prototype.getModels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sd.api.get("/controlnet/model_list")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.model_list];
                }
            });
        });
    };
    /**
     * Returns a list of available ControlNet modules
     * @returns {Promise<string[]>} List of available ControlNet modules
     */
    ControlNetApi.prototype.getModules = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sd.api.get("/controlnet/module_list")];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.module_list];
                }
            });
        });
    };
    return ControlNetApi;
}());
exports.ControlNetApi = ControlNetApi;
