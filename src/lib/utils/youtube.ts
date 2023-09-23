export async function checkIfVideoExists(videoId: string): Promise<boolean> {
	const response = await fetch(`https://img.youtube.com/vi/${videoId}/0.jpg`, {
		method: 'HEAD',
		headers: {
			'User-Agent':
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0'
		}
	});
	return response.ok;
}
