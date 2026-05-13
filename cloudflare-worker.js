// Cloudflare Worker — proxies image generation requests to OpenAI
// Deploy this on Cloudflare Workers and add your API key as a secret named OPENAI_KEY

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "https://garciacode.com",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const body = await request.json();

    const allowed_sizes = ["1024x1024", "1536x1024", "1024x1536"];
    if (!body.prompt || typeof body.prompt !== "string") {
      return new Response(JSON.stringify({ error: "Missing prompt" }), { status: 400 });
    }
    if (body.size && !allowed_sizes.includes(body.size)) {
      return new Response(JSON.stringify({ error: "Invalid size" }), { status: 400 });
    }

    const resp = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + env.OPENAI_KEY,
      },
      body: JSON.stringify({
        model: "gpt-image-2",
        prompt: body.prompt,
        n: 1,
        size: body.size || "1024x1024",
      }),
    });

    const data = await resp.text();

    return new Response(data, {
      status: resp.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://garciacode.com",
      },
    });
  },
};
