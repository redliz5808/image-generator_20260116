# AI Image Generation Test Project
This project follows some of the steps found in [Vibe Coding Bootcamp by Misbah Syed](https://www.packtpub.com/en-us/product/vibe-coding-bootcamp-9781806027996) on Packt.

## Technology Used / API Calls

### AI Application Builder
 - This application was initially built from text prompts using [v0 by Vercel](https://v0.app/).
 - The chat can be accessed via the following link:
    - [image-generator-v20260116](https://v0.app/chat/image-generation-website-ueEWOXE80ga?ref=0QXVPG)
 - It uses [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com/) and [TypeScript](https://www.typescriptlang.org/).

**A note about the CSS**: The chat did not provide a CSS file with so I manually copied the rules by inspecting the GUI within the chat and pasting it into my own CSS file. As a result the application run from a local environment is not a 1:1 replica of the application run from the chat, but it's pretty damn close.

### AI Image Generation API
 - This application uses the [fal-ai/flux/schnell model](https://fal.ai/models/fal-ai/flux/schnell) API.
    - **Note:** I have not purchased a plan so image generation may not be available.

## Running the app

### Install dependencies
```
npm install
```

### Install the fal.ai client
```
npm install @fal-ai/client
```

### Build & Run
```
npm run build
```