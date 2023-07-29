## About
A Typescript API client for [AUTOMATIC111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui).

## Installation

```bash
npm install sd-webui-api
```

```bash
yarn add sd-webui-api
```

## Usage

### SD WebUI API Backend

You need to have a SD WebUI API backend to use this package. Check out [SD WebUI API Doc](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/API) to start a local API backend first and the default URL for API endpoint is: http://127.0.0.1:7860

Simple initialization with all default settings:

```typescript
const api = new StableDiffusionApi({
  baseUrl: 'http://127.0.0.1:7860', // or other WebUI url
})
```
Initialization with custom parameters:

```typescript
const api = new StableDiffusionApi({
  host: "http://127.0.0.1:7860",
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
    prompt: "a black cat",
    ...
})
```

### img2img

TBA

### ControlNet 

TBA

## Acknowledgment

This project is based off https://github.com/jaschahuisman/sd-api.