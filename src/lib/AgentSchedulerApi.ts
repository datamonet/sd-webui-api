import {
  AgentSchedulerImg2ImgOptions, AgentSchedulerResponse,
  AgentSchedulerTxt2ImgOptions,
} from '../types';
import { toBase64 } from '../utils/base64';
import { StableDiffusionApi, createScriptsWithCnUnits } from './StableDiffusionApi';


export class AgentSchedulerApi {
  constructor(private sd: StableDiffusionApi) {
  }

  public async txt2img(
    options: AgentSchedulerTxt2ImgOptions,
  ): Promise<{ task_id: string }> {
    const alwayson_scripts = await createScriptsWithCnUnits(
      options.alwayson_scripts,
      options.controlnet_units ?? [],
    );

    const response = await this.sd.api.post<{ task_id: string }>('/agent-scheduler/v1/queue/txt2img', {
      enable_hr: options.enable_hr ?? false,
      hr_scale: options.hr_scale ?? 2,
      hr_upscaler: options.hr_upscaler ?? 'Latent',
      hr_second_pass_steps: options.hr_second_pass_steps ?? 0,
      hr_resize_x: options.hr_resize_x ?? 0,
      hr_resize_y: options.hr_resize_y ?? 0,
      denoising_strength: options.denoising_strength ?? 0.7,
      firstphase_width: options.firstphase_width ?? 0,
      firstphase_height: options.firstphase_height ?? 0,
      prompt: options.prompt ?? '',
      styles: options.styles ?? [],
      seed: options.seed ?? -1,
      subseed: options.subseed ?? -1,
      subseed_strength: options.subseed_strength ?? 0.0,
      seed_resize_from_h: options.seed_resize_from_h ?? 0,
      seed_resize_from_w: options.seed_resize_from_w ?? 0,
      batch_count: options.batch_count ?? 1,
      batch_size: options.batch_size ?? 1,
      n_iter: options.n_iter ?? 1,
      steps: options.steps ?? this.sd.config.defaultStepCount,
      cfg_scale: options.cfg_scale ?? 7.0,
      width: options.width ?? 512,
      height: options.height ?? 512,
      restore_faces: options.restore_faces ?? false,
      tiling: options.tiling ?? false,
      do_not_save_samples: options.do_not_save_samples ?? false,
      do_not_save_grid: options.do_not_save_grid ?? false,
      negative_prompt: options.negative_prompt ?? '',
      eta: options.eta ?? 1.0,
      s_churn: options.s_churn ?? 0,
      s_tmax: options.s_tmax ?? 0,
      s_tmin: options.s_tmin ?? 0,
      s_noise: options.s_noise ?? 1,
      override_settings: options.override_settings ?? {},
      override_settings_restore_afterwards:
        options.override_settings_restore_afterwards ?? true,
      script_args: options.script_args ?? [],
      script_name: options.script_name ?? null,
      send_images: options.send_images ?? true,
      save_images: options.save_images ?? false,
      alwayson_scripts,
      sampler_index: options.sampler_name ?? this.sd.config.defaultSampler,
      use_deprecated_controlnet: options.use_deprecated_controlnet ?? false,
      checkpoint: options.checkpoint ?? '',
      callback_url: options.callback_url ?? '',
    });
    return response.data;
  }

  public async img2img(
    options: AgentSchedulerImg2ImgOptions,
  ): Promise<{ task_id: string }> {
    const init_images = await Promise.all(
      options.init_images.map(async (image) => await toBase64(image)),
    );

    const mask = options.mask_image ? await toBase64(options.mask_image) : null;

    const alwayson_scripts = await createScriptsWithCnUnits(
      options.alwayson_scripts,
      options.controlnet_units ?? [],
    );

    const response = await this.sd.api.post<{ task_id: string }>('/agent-scheduler/v1/queue/img2img', {
      init_images,
      resize_mode: options.resize_mode ?? 0,
      denoising_strength: options.denoising_strength ?? 0.75,
      image_cfg_scale: options.image_cfg_scale ?? 1.5,
      mask,
      mask_blur: options.mask_blur ?? 4,
      inpainting_fill: options.inpainting_fill ?? 0,
      inpaint_full_res: options.inpaint_full_res ?? true,
      inpaint_full_res_padding: options.inpaint_full_res_padding ?? 0,
      inpainting_mask_invert: options.inpainting_mask_invert ?? 0,
      initial_noise_multiplier: options.initial_noise_multiplier ?? 1,
      prompt: options.prompt ?? '',
      styles: options.styles ?? [],
      seed: options.seed ?? -1,
      subseed: options.subseed ?? -1,
      subseed_strength: options.subseed_strength ?? 0,
      seed_resize_from_h: options.seed_resize_from_h ?? 0,
      seed_resize_from_w: options.seed_resize_from_w ?? 0,
      sampler_name: options.sampler_name ?? this.sd.config.defaultSampler,
      batch_size: options.batch_size ?? 1,
      n_iter: options.n_iter ?? 1,
      steps: options.steps ?? this.sd.config.defaultStepCount,
      cfg_scale: options.cfg_scale ?? 7.0,
      width: options.width ?? 512,
      height: options.height ?? 512,
      restore_faces: options.restore_faces ?? false,
      tiling: options.tiling ?? false,
      do_not_save_samples: options.do_not_save_samples ?? false,
      do_not_save_grid: options.do_not_save_grid ?? false,
      negative_prompt: options.negative_prompt ?? '',
      eta: options.eta ?? 1.0,
      s_churn: options.s_churn ?? 0,
      s_tmax: options.s_tmax ?? 0,
      s_tmin: options.s_tmin ?? 0,
      s_noise: options.s_noise ?? 1,
      override_settings: options.override_settings ?? {},
      override_settings_restore_afterwards:
        options.override_settings_restore_afterwards ?? true,
      script_args: options.script_args ?? [],
      include_init_images: options.include_init_images ?? false,
      script_name: options.script_name ?? null,
      send_images: options.send_images ?? true,
      save_images: options.save_images ?? false,
      alwayson_scripts,
      use_deprecated_controlnet: options.use_deprecated_controlnet ?? false,
    });
    return response.data;
  }

  public async getResults(
    id: string,
  ): Promise<AgentSchedulerResponse> {
    const response = await this.sd.api.get<AgentSchedulerResponse>(
      `/agent-scheduler/v1/task/${id}/results`,
    );
    return response.data;
  }
}
