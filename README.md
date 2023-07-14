## About
A Typescript API client for AUTOMATIC111/stable-diffusion-webui.

## Installation

```bash
npm install sd-webui-api
```

```bash
yarn add ad-webui-api
```

## Usage

### Instantiation

If you don't have a WebUI api available, you can start a WebUI locally, see [Deploy WebUI Doc](https://harrywang.me/diffusion)

**Note: Please enable api mode**

```typescript
const api = new StableDiffusionApi() // The default url for this type of initialization is http://127.0.0.1:7860

const api = new StableDiffusionApi({
  baseUrl: 'http://127.0.0.1:7860', // or other WebUI url
})

//If you need custom parameters, you can initialize them this way
const api = new StableDiffusionApi({
  host: "localhost",
  port: 7860,
  protocol: "http",
  defaultSampler: "Euler a",
  defaultStepCount: 20,
})
```

### Authentication

Use the `--api-auth` command line argument with "username:password" on the server to enable API authentication.

```typescript
api.setAuth("username", "password")
```

### txt2img

```typescript
const result = await api.txt2img({
    prompt: "Serene beach scene with crystal clear water and white sand, tropical palm trees swaying in the breeze, perfect paradise, seascape",
    ...
})
```


### img2img

TBA

### ControlNet 

TBA

## Acknowledgment

This project is based off https://github.com/jaschahuisman/sd-api.