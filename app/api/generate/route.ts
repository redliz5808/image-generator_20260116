import { fal } from "@fal-ai/client"
import { NextResponse } from "next/server"

fal.config({
  credentials: process.env.FAL_KEY,
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { prompt, image_size = "landscape_4_3" } = body

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    if (!process.env.FAL_KEY) {
      return NextResponse.json({ error: "FAL_KEY environment variable is not set" }, { status: 500 })
    }

    const result = await fal.subscribe("fal-ai/flux/schnell", {
      input: {
        prompt,
        image_size,
        num_inference_steps: 4,
        num_images: 1,
        enable_safety_checker: true,
      },
    })

    return NextResponse.json(result.data)
  } catch (error) {
    console.error("Error generating image:", error)
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 })
  }
}
