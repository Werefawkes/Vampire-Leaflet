import Link from "next/link"

export default function Navbar() {
	return (
		<div className="flex justify-start gap-2 bg-slate-900">
			{[
				["London Shadows", "/"],
				["Map", "/map"],
				["Wiki", "/wiki"]
			].map(([title, url]) => (
				<Link href={url} key={title} className="text-lg px-3 pt-1 pb-2 ml-3 my-2 rounded-md bg-red-950 shadow-lg transition hover:bg-red-900">{title}</Link>
			))}
		</div>
		)
}