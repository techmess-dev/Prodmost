"use client"

import { isStringEmpty } from "@/utils/utils";
import { useEffect, useState } from "react";

interface BeneficiaryData {
	id: string;
	SHG_GroupCode: string;
	SHG_Name: string;
	Beneficiary_Code: string;
	Beneficiary_Name: string;
	Address: string;
	MobileNo: string;
	Caste: string;
	App_Status: string;
	Upload_Remarks: string;
	application_path: string;
	Voter_ID: string;
}


export default function Nulm() {

	const [query, setQuery] = useState("");
	const [data, setData] = useState<BeneficiaryData[]>([]);

	const [isLoading, setIsLoading] = useState(false);

	const [cookie, setCookie] = useState<string>("");

	const [localCookie, setLocalCookie] = useState<string>("");


	async function searchBeneficiaries() {
		// setLoading(true);
		// setError(null);

		setIsLoading(true);

		try {
			// const response = await fetch(`https://mmua.nulmassam.in/admin/get_ulb_app_apv.asp?ulbid=54&search=${query}`);

			const response = await fetch(`/api/proxy?ulbid=54&search=${query}`);
			if (!response.ok) throw new Error("Failed to fetch data");

			const result = await response.json();
			setData(result.data);
		} catch (err) {
			console.log(err);
			// setError((err as Error).message);
		} finally {
			// setLoading(false);
			setIsLoading(false);
		}
	}


	const setCookieToDoc = (name: string, value: string, days: number) => {
		const expires = new Date();
		expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration time
		document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`; // Set cookie
	};

	async function saveCookie() {
		if (cookie) {
			// Split the input string into key-value pairs and set them as cookies
			const cookies = cookie.split(';').map(cookie => cookie.trim());

			cookies.forEach(cookie => {
				const [name, value] = cookie.split('=');
				if (name && value) {
					setCookieToDoc(name, value, 7); // Set the cookie with 7 days expiration
				}
			});
			setLocalCookie(cookie);
		}
	}

	const checkCookie = (cookieName: string): boolean => {
		const cookies = document.cookie.split(';');
		for (const ck of cookies) {
			const [name] = ck.trim().split('=');
			if (name === cookieName) {
				return true; // Cookie exists
			}
		}
		return false; // Cookie doesn't exist
	};

	useEffect(() => {

		const isCookieAvailable = checkCookie('ulbid'); // Replace 'ext_name' with the name of the cookie you're checking for
		setLocalCookie(isCookieAvailable ? "available" : "");

	}, []);


	return (
		<div className="grid grid-cols-12 pt-8 px-20 font-mono">

			{isStringEmpty(localCookie) ?
				<div className="grid col-span-12 grid-cols-6 gap-4 pb-8 items-center">
					<textarea className="grid border text-sm col-span-4 py-2 px-4 rounded resize-none" placeholder="Enter your cookie" value={cookie} onChange={(e) => setCookie(e.target.value)} />
					<button onClick={() => saveCookie()} className="grid bg-blue-500 h-10  items-center rounded text-sm cursor-pointer" >Save Cookie</button>
				</div>
				: ""}



			<div className="grid col-span-12 grid-cols-6 gap-4 ">
				<input type="text" className="grid border text-sm col-span-4 py-2 px-4 rounded" placeholder="Search here..." value={query} onChange={(e) => setQuery(e.target.value)} />
				<button onClick={() => searchBeneficiaries()} className="grid bg-blue-500 items-center rounded text-sm cursor-pointer" >Search</button>
			</div>

			{
				isLoading ? "Loading" :
					<div className="grid grid-cols-1 col-span-12 ">
						{data && data.map((item, index) => (
							<div key={index} className="grid mt-4 p-2 border rounded col-span-1">
								<h3 className="font-bold">{item.Beneficiary_Name}</h3>
								<p><strong>SHG Name:</strong> {item.SHG_Name}</p>
								<p><strong>Mobile No:</strong> {item.MobileNo}</p>
								<p><strong>App Status:</strong> {item.App_Status}</p>
								<p><strong>Caste:</strong> {item.Caste}</p>
								<p><strong>Voter ID:</strong> {item.Voter_ID}</p>
								<a href={`https://mmua.nulmassam.in/admin/upload_benf_application.asp?id=${item.id}`} target="_blank" rel="noopener noreferrer">
									<button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 mt-2">
										View Application
									</button>
								</a>
							</div>
						))}

					</div>
			}




		</div>
	);

}