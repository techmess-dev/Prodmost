
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const nextUrl = new URL(request.url);
	const searchParams = nextUrl.searchParams;
	const url = `https://mmua.nulmassam.in/admin/get_ulb_app_pen.asp?ulbid=${searchParams.get('ulbid')}&search=${searchParams.get('search')}`;



	try {
		console.log(url);
		const response = await fetch(url, { credentials: 'include' });
		const data = await response.text(); // Assuming response is text or JSON

		return new NextResponse(data, {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		return new NextResponse(JSON.stringify({ error: `Failed to fetch data : ${(error as Error).message}` }), { status: 500 });
	}
}
