export async function POST(req: Request) {
	const body = await req.json();
  
	const fastApiRes = await fetch("http://127.0.0.1:8000/ask", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(body),
	});
  
	const data = await fastApiRes.json();
	return new Response(JSON.stringify(data), {
	  status: fastApiRes.status,
	  headers: {
		"Content-Type": "application/json",
	  },
	});
  }