export default {
	async fetch(request, env) {
		const url = new URL(request.url);
	    const inputs = {
	      prompt: url.searchParams.get("text") || "cyberpunk cat",
	    };

		const response = await env.AI.run(
			"@cf/llava-hf/llava-1.5-7b-hf",
			inputs,
		);

		return new Response(response, {
			headers: {
				"content-type": "image/png",
			},
		});
	},
} satisfies ExportedHandler<Env>;
