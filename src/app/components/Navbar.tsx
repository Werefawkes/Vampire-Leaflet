import Link from "next/link"

export default function Navbar() {
	return (
		<div className="flex justify-start gap-2 bg-slate-900">
			{[
				["London Shadows", "/"],
				["Map", "/map"],
				["Wiki", "/wiki"]
			].map(([title, url]) => (
				<Link href={url} className="px-3 py-2 ml-3 my-2 rounded-md shadow-lg shadow-red-950">{title}</Link>				
			))}
		</div>
		)
}