export const prerender = true;

export function GET() {
	if (process.env.BUILD_PREVIEW !== '1') {
		return new Response('Not found', { status: 404 });
	}
	return new Response('User-agent: *\nDisallow: /\n', {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
}
