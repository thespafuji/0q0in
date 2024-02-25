import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	/**await fetch(`https://vpnapi.io/api/${event.request.headers.get('x-forwarded-for')}?key=9024c890500a4a62b0482c5874a2ae3a`).then(res=>{
		console.log(res, JSON.stringify(res, null, "\t"), res.body?.getReader())
	})
	console.log(event.request.headers.get('x-forwarded-for'))
	**/
    if (event.url.pathname=='/.well-known/discord') {
		return new Response('dh=6b71cd0489790b637532aa191db2a2fe77d4b847')
	}

	return resolve(event);
};